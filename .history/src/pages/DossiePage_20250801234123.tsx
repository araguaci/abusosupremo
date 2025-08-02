import React from 'react';
import { useTranslation } from 'react-i18next';
import { DossieEvent } from '@/types/dossie';
import DossieEventCard from '@/components/DossieEventCard';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { Calendar, ListFilter, Search, X, FileText, ArrowRight, LinkIcon } from 'lucide-react';
import BackToTopButton from '@/components/BackToTopButton';
import { useDossieEvents } from '@/hooks/useDossieEvents';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom'; // Import Link for navigation

const DossieEventIcon = () => (
  <FileText className="h-4 w-4 text-primary-foreground" />
);

const DossiePage: React.FC = () => {
  const { t } = useTranslation();
  const {
    filteredEvents,
    filters,
    setFilters,
    filterOptions,
    handleClearFilters,
  } = useDossieEvents();

  const eventsByYear = filteredEvents.reduce((acc, event) => {
    const year = event.year.toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(event);
    return acc;
  }, {} as { [year: string]: DossieEvent[] });

  const sortedYears = Object.keys(eventsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  const showClearButton = filters.year !== 'all' || filters.violation !== 'all' || filters.term !== '';

  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {t('dossie_page_title')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {t('dossie_page_description')}
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 items-end">
        <Select value={filters.year} onValueChange={setFilters.setYear}>
          <SelectTrigger>
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <SelectValue placeholder={t('filter_by_year')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('all_years')}</SelectItem>
            {filterOptions.years.map(year => (
              <SelectItem key={year} value={year}>{year}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.violation} onValueChange={setFilters.setViolation}>
          <SelectTrigger>
            <ListFilter className="h-4 w-4 mr-2 text-muted-foreground" />
            <SelectValue placeholder={t('filter_by_violation')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('all_violations')}</SelectItem>
            {filterOptions.violations.map(violation => (
              <SelectItem key={violation} value={violation}>{violation}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder={t('search_timeline')}
            value={filters.term}
            onChange={(e) => setFilters.setTerm(e.target.value)}
            className="pl-10 pr-10"
          />
          {filters.term && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground hover:bg-transparent"
              onClick={() => setFilters.setTerm('')}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Clear search</span>
            </Button>
          )}
        </div>
      </div>

      {showClearButton && (
        <div className="text-center mb-8">
          <Button onClick={handleClearFilters} variant="outline">
            <X className="h-4 w-4 mr-2" />
            {t('clear_filters')}
          </Button>
        </div>
      )}

      {filteredEvents.length === 0 ? (
        <p className="text-center text-muted-foreground">{t('no_events_found')}</p>
      ) : (
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-border" aria-hidden="true" />

          {sortedYears.map(year => (
            <div key={year}>
              <div className="flex justify-center">
                <h2 className="text-3xl font-bold my-8 bg-background px-4 z-10 relative">{year}</h2>
              </div>
              {eventsByYear[year].map((event, index) => {
                const alignLeft = index % 2 === 0;
                return (
                  <div
                    key={`${year}-${event.data}-${index}`}
                    className="relative mb-8"
                  >
                    <div className={cn(
                      "w-full md:w-[calc(50%-2rem)]",
                      { "md:ml-auto": !alignLeft },
                      { "md:mr-auto": alignLeft },
                    )}>
                      <DossieEventCard event={event} />
                    </div>

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center bg-primary rounded-full h-8 w-8">
                      <DossieEventIcon />
                    </div>
                    
                    <div className={cn(
                      "hidden md:block absolute top-1/2 -translate-y-1/2 h-1 bg-primary z-0",
                      { "left-1/2 w-[2rem]": !alignLeft },
                      { "right-1/2 w-[2rem]": alignLeft }
                    )} />
                  </div>
                );
              })}
            </div>
          ))}
        </div>        
      )}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-foreground">{t('source')}</h2>        
        <Link to="https://www.dossiemoraes.com.br/">            
          <Button variant="outline" className="mt-4 ml-4">
            {t('nav_dossie')}
            <LinkIcon className="h-4 w-4 ml-2" />
          </Button>
        </Link>
        <Link to="/prisoes-politicas">            
          <Button variant="outline" className="mt-4 ml-4">
            {t('nav_prisoes_politicas')}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link> 
      </div>
      <BackToTopButton />
    </div>
  );
};

export default DossiePage;