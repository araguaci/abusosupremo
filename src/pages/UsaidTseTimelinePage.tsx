import React from 'react';
import { useTranslation } from 'react-i18next';
import { useUsaidTseEvents } from '@/hooks/useUsaidTseEvents';
import UsaidTseEventCard from '@/components/UsaidTseEventCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';

const UsaidTseTimelinePage: React.FC = () => {
  const { t } = useTranslation();
  const {
    filteredEvents,
    filters,
    setFilters,
    filterOptions,
    handleClearFilters,
  } = useUsaidTseEvents();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight">{t('usaid_tse_timeline_title')}</h1>
        <p className="text-muted-foreground mt-2">{t('usaid_tse_timeline_subtitle')}</p>
      </header>

      <div className="sticky top-14 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t('search_events')}
              value={filters.term}
              onChange={(e) => setFilters.setTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filters.year} onValueChange={setFilters.setYear}>
            <SelectTrigger>
              <SelectValue placeholder={t('filter_by_year')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('all_years')}</SelectItem>
              {filterOptions.years.map(year => (
                <SelectItem key={year} value={year}>{year}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={filters.gravity} onValueChange={setFilters.setGravity}>
            <SelectTrigger>
              <SelectValue placeholder={t('filter_by_gravity')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('all_gravities')}</SelectItem>
              {filterOptions.gravities.map(gravity => (
                <SelectItem key={gravity} value={gravity} className="capitalize">
                  {t(`gravity_${gravity.replace('é', 'e')}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="ghost" onClick={handleClearFilters} className="w-full">
            <X className="mr-2 h-4 w-4" />
            {t('clear_filters')}
          </Button>
        </div>
      </div>

      <main>
        {filteredEvents.length > 0 ? (
          <div className="space-y-6">
            {filteredEvents.map((event, index) => (
              <UsaidTseEventCard key={`${event.data}-${index}`} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">{t('no_events_found')}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default UsaidTseTimelinePage;