import React from 'react';
import { useTranslation } from 'react-i18next';
import { CensorshipEvent } from '@/types/censorship';
import TimelineEventCard from '@/components/TimelineEventCard';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import CensorshipChart from '@/components/CensorshipChart';
import { Calendar, ListFilter, Target, Search, X, Gavel, Newspaper, Vote, ArrowRight } from 'lucide-react';
import BackToTopButton from '@/components/BackToTopButton';
import { useCensorshipEvents } from '@/hooks/useCensorshipEvents';
import { cn } from '@/lib/utils';
import { educationalResourcesData } from '@/data/educationalResources';
import EducationalResourceCard from '@/components/EducationalResourceCard'; // Import the new component
import { Link } from 'react-router-dom'; // Import Link for navigation

// Componente para o ícone do evento, movido para cá
const EventIcon = ({ type }: { type: CensorshipEvent['type'] }) => {
  switch (type) {
    case 'judicial':
      return <Gavel className="h-4 w-4 text-primary-foreground" />;
    case 'eleitoral':
      return <Vote className="h-4 w-4 text-primary-foreground" />;
    case 'midiática':
      return <Newspaper className="h-4 w-4 text-primary-foreground" />;
    default:
      return null;
  }
};

const CensorshipTimeline: React.FC = () => {
  const { t, i18n } = useTranslation();
  const {
    filteredEvents,
    filters,
    setFilters,
    filterOptions,
    handleClearFilters,
  } = useCensorshipEvents();

  const eventsByYear = filteredEvents.reduce((acc, event) => {
    const year = event.year.toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(event);
    return acc;
  }, {} as { [year: string]: CensorshipEvent[] });

  const sortedYears = Object.keys(eventsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  const showClearButton = filters.year !== 'all' || filters.type !== 'all' || filters.target !== 'all' || filters.term !== '';

  // Get educational resources for the current language
  const currentLang = i18n.language.split('-')[0];
  const resources = educationalResourcesData[currentLang] || educationalResourcesData.pt; // Fallback to pt

  // Display only a few resources on the timeline page
  const resourcesToShow = resources.slice(0, 4); // Show first 3 resources

  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {t('censorship_timeline_title')}
        </h1>
        <p className="text-lg text-muted-foreground">
          {t('censorship_timeline_description')}
        </p>
      </header>

      <CensorshipChart events={filteredEvents} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 items-end">
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

        <Select value={filters.type} onValueChange={setFilters.setType}>
          <SelectTrigger>
            <ListFilter className="h-4 w-4 mr-2 text-muted-foreground" />
            <SelectValue placeholder={t('filter_by_type')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('all_types')}</SelectItem>
            {filterOptions.types.map(type => (
              <SelectItem key={type} value={type}>{t(`type_${type}`)}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.target} onValueChange={setFilters.setTarget}>
          <SelectTrigger>
            <Target className="h-4 w-4 mr-2 text-muted-foreground" />
            <SelectValue placeholder={t('filter_by_target')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('all_targets')}</SelectItem>
            {filterOptions.targets.map(target => (
              <SelectItem key={target} value={target}>{t(`target_${target}`)}</SelectItem>
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
          {/* Linha vertical central */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-border" aria-hidden="true" />

          {sortedYears.map(year => (
            <div key={year}>
              {/* Marcador de ano */}
              <div className="flex justify-center">
                <h2 className="text-3xl font-bold my-8 bg-background px-4 z-10 relative">{year}</h2>
              </div>
              {eventsByYear[year].map((event, index) => {
                const alignLeft = index % 2 === 0; // Determina o alinhamento do cartão
                return (
                  <div
                    key={`${year}-${event.title}-${index}`}
                    className="relative mb-8"
                  >
                    {/* Container do cartão do evento */}
                    <div className={cn(
                      "w-full", // Largura total em mobile
                      "md:w-[calc(50%-2rem)]", // Metade da largura menos o gap em desktop
                      { "md:ml-auto": alignLeft }, // Empurra o cartão para a direita em desktop se for alinhado à esquerda
                      { "md:mr-auto": !alignLeft }, // Empurra o cartão para a esquerda em desktop se for alinhado à direita
                      { "pl-12": alignLeft }, // Adiciona padding à esquerda em mobile se o cartão for "left-aligned"
                      { "pr-12": !alignLeft } // Adiciona padding à direita em mobile se o cartão for "right-aligned"
                    )}>
                      <TimelineEventCard event={event} />
                    </div>

                    {/* Ponto na linha central */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center bg-primary rounded-full h-8 w-8">
                      <EventIcon type={event.type} />
                    </div>

                    {/* Linha conectora do ponto ao cartão */}
                    <div className={cn(
                      "absolute top-1/2 -translate-y-1/2 h-1 bg-primary z-0",
                      { "left-1/2 w-[calc(50%-2rem)]": alignLeft }, // Linha do centro para o cartão esquerdo
                      { "right-1/2 w-[calc(50%-2rem)]": !alignLeft } // Linha do centro para o cartão direito
                    )} />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-foreground">{t('educational_resources')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
          {resourcesToShow.map((resource) => (
            <EducationalResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
        {resources.length > resourcesToShow.length && (
          <Link to="/educational-resources">
            <Button variant="outline" className="mt-4">
              {t('view_all_resources')}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        )}
      </div>

      <BackToTopButton />
    </div>
  );
};

export default CensorshipTimeline;