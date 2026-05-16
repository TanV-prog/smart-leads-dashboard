import { useState, useEffect, useRef } from 'react';
import api from '../services/api';
import type { Lead, Pagination, LeadFilters } from '../types';

const useLeads = (filters: LeadFilters) => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const filtersRef = useRef(filters);

  const fetchLeads = async () => {
    setLoading(true);
    setError(null);
    try {
      const f = filtersRef.current;
      const params = new URLSearchParams();
      if (f.status) params.append('status', f.status);
      if (f.source) params.append('source', f.source);
      if (f.search) params.append('search', f.search);
      if (f.sort) params.append('sort', f.sort);
      params.append('page', f.page.toString());

      const res = await api.get(`/leads?${params.toString()}`);
      setLeads(res.data.data);
      setPagination(res.data.pagination);
    } catch (err) {
      setError('Failed to fetch leads');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    filtersRef.current = filters;
    fetchLeads();
  }, [
    filters.status,
    filters.source,
    filters.search,
    filters.sort,
    filters.page,
  ]);

  return { leads, pagination, loading, error, refetch: fetchLeads };
};

export default useLeads;