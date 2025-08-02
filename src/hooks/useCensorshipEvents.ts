import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { CensorshipEvent, CensorshipData } from '@/types/censorship';

// Import data for all languages
import { censorshipData as censorshipDataPt } from '@/data/censura.pt';
import { censorshipData as censorshipDataEn } from '@/data/censura.en';
import { censorshipData as censorshipDataEs } from '@/data/censura.es';
import { censorshipData as censorshipDataDe } from '@/data/censura.de';

const allCensorshipData: { [key: string]: CensorshipData } = {
  pt: censorshipDataPt,
  en: censorshipDataEn,
  es: censorshipDataEs,
  de: censorshipDataDe,
};

export function useCensorshipEvents() {
  const { i18n } = useTranslation();
  const [events, setEvents] = useState<CensorshipEvent[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<CensorshipEvent[]>([]);
  
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedTarget, setSelectedTarget] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const lang = i18n.language.split('-')[0];
    const data = allCensorshipData[lang] || allCensorshipData.pt; // Fallback to Portuguese

    if (data && data.events) {
      const allEvents: CensorshipEvent[] = Object.values(data.events).flat();
      setEvents(allEvents);
    }
  }, [i18n.language]);

  useEffect(() => {
    let currentEvents = events;

    if (selectedYear !== 'all') {
      currentEvents = currentEvents.filter(event => event.year.toString() === selectedYear);
    }
    if (selectedType !== 'all') {
      currentEvents = currentEvents.filter(event => event.type === selectedType);
    }
    if (selectedTarget !== 'all') {
      currentEvents = currentEvents.filter(event => event.target === selectedTarget);
    }
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      currentEvents = currentEvents.filter(event =>
        event.description.toLowerCase().includes(lowerCaseSearchTerm) ||
        event.title.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    setFilteredEvents(currentEvents);
  }, [selectedYear, selectedType, selectedTarget, searchTerm, events]);

  const filterOptions = useMemo(() => {
    const years = Array.from(new Set(events.map(event => event.year.toString()))).sort((a, b) => parseInt(b) - parseInt(a));
    const types = Array.from(new Set(events.map(event => event.type)));
    const targets = Array.from(new Set(events.map(event => event.target)));
    return { years, types, targets };
  }, [events]);

  const handleClearFilters = () => {
    setSelectedYear('all');
    setSelectedType('all');
    setSelectedTarget('all');
    setSearchTerm('');
  };

  return {
    filteredEvents,
    filters: {
      year: selectedYear,
      type: selectedType,
      target: selectedTarget,
      term: searchTerm,
    },
    setFilters: {
      setYear: setSelectedYear,
      setType: setSelectedType,
      setTarget: setSelectedTarget,
      setTerm: setSearchTerm,
    },
    filterOptions,
    handleClearFilters,
  };
}