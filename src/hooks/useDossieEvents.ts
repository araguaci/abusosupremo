import { useState, useEffect, useMemo } from 'react';
import { DossieEvent } from '@/types/dossie';
import { dossieData } from '@/data/dossie';

export function useDossieEvents() {
  const [allEvents, setAllEvents] = useState<DossieEvent[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<DossieEvent[]>([]);
  
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedViolation, setSelectedViolation] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const events = Object.values(dossieData).flat();
    setAllEvents(events);
    setFilteredEvents(events);
  }, []);

  const filterOptions = useMemo(() => {
    const years = Array.from(new Set(allEvents.map(event => event.year.toString()))).sort((a, b) => parseInt(b) - parseInt(a));
    const violations = Array.from(new Set(allEvents.flatMap(event => event.violacao))).sort();
    return { years, violations };
  }, [allEvents]);

  useEffect(() => {
    let currentEvents = allEvents;

    if (selectedYear !== 'all') {
      currentEvents = currentEvents.filter(event => event.year.toString() === selectedYear);
    }
    
    if (selectedViolation !== 'all') {
      currentEvents = currentEvents.filter(event => event.violacao.includes(selectedViolation));
    }

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      currentEvents = currentEvents.filter(event =>
        event.acao.toLowerCase().includes(lowerCaseSearchTerm) ||
        event.violacao.some(v => v.toLowerCase().includes(lowerCaseSearchTerm))
      );
    }

    setFilteredEvents(currentEvents);
  }, [selectedYear, selectedViolation, searchTerm, allEvents]);

  const handleClearFilters = () => {
    setSelectedYear('all');
    setSelectedViolation('all');
    setSearchTerm('');
  };

  return {
    filteredEvents,
    filters: {
      year: selectedYear,
      violation: selectedViolation,
      term: searchTerm,
    },
    setFilters: {
      setYear: setSelectedYear,
      setViolation: setSelectedViolation,
      setTerm: setSearchTerm,
    },
    filterOptions,
    handleClearFilters,
  };
}