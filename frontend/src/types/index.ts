export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'admin' | 'sales';
  token: string;
}

export interface Lead {
  _id: string;
  name: string;
  email: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Lost';
  source: 'Website' | 'Instagram' | 'Referral';
  createdBy: { name: string; email: string };
  createdAt: string;
}

export interface Pagination {
  total: number;
  page: number;
  pages: number;
  limit: number;
}

export interface LeadsResponse {
  success: boolean;
  message: string;
  data: Lead[];
  pagination: Pagination;
}

export interface LeadFilters {
  status: string;
  source: string;
  search: string;
  sort: string;
  page: number;
}