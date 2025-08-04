import { useState, useEffect, useMemo } from 'react';
import { UsaidTseEvent } from '@/types/usaid';
import { usaidTseEventsData } from '@/data/usaid-tse';

export function useUsaidTseEvents() {
  const [allEvents] = useState<UsaidTseEvent[]>(usaidTseEventsData);
  const [filteredEvents, setFilteredEvents] = useState<UsaidTseEvent[]>([]);
  
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedGravity, setSelectedGravity] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    setFilteredEvents(allEvents);
  }, [allEvents]);

  const filterOptions = useMemo(() => {
    const years = Array.from(new Set(allEvents.map(event => event.year.toString()))).sort((a, b) => parseInt(b) - parseInt(a));
    const gravities = Array.from(new Set(allEvents.map(event => event.gravidade))).sort((a, b) => {
      const order = { 'baixa': 0, 'média': 1, 'alta': 2 };
      return order[a] - order[b];
    });
    return { years, gravities };
  }, [allEvents]);

  useEffect(() => {
    let currentEvents = allEvents;

    if (selectedYear !== 'all') {
      currentEvents = currentEvents.filter(event => event.year.toString() === selectedYear);
    }
    
    if (selectedGravity !== 'all') {
      currentEvents = currentEvents.filter(event => event.gravidade === selectedGravity);
    }

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      currentEvents = currentEvents.filter(event =>
        event.titulo.toLowerCase().includes(lowerCaseSearchTerm) ||
        event.descrição.toLowerCase().includes(lowerCaseSearchTerm) ||
        event.envolvidos.some(e => e.toLowerCase().includes(lowerCaseSearchTerm))
      );
    }

    setFilteredEvents(currentEvents);
  }, [selectedYear, selectedGravity, searchTerm, allEvents]);

  const handleClearFilters = () => {
    setSelectedYear('all');
    setSelectedGravity('all');
    setSearchTerm('');
  };

  return {
    filteredEvents,
    filters: {
      year: selectedYear,
      gravity: selectedGravity,
      term: searchTerm,
    },
    setFilters: {
      setYear: setSelectedYear,
      setGravity: setSelectedGravity,
      setTerm: setSearchTerm,
    },
    filterOptions,
    handleClearFilters,
  };
}