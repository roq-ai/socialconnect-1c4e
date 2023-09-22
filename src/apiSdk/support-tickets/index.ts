import axios from 'axios';
import queryString from 'query-string';
import { SupportTicketsInterface, SupportTicketsGetQueryInterface } from 'interfaces/support-tickets';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSupportTickets = async (
  query?: SupportTicketsGetQueryInterface,
): Promise<PaginatedInterface<SupportTicketsInterface>> => {
  const response = await axios.get('/api/support-tickets', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSupportTickets = async (supportTickets: SupportTicketsInterface) => {
  const response = await axios.post('/api/support-tickets', supportTickets);
  return response.data;
};

export const updateSupportTicketsById = async (id: string, supportTickets: SupportTicketsInterface) => {
  const response = await axios.put(`/api/support-tickets/${id}`, supportTickets);
  return response.data;
};

export const getSupportTicketsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/support-tickets/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSupportTicketsById = async (id: string) => {
  const response = await axios.delete(`/api/support-tickets/${id}`);
  return response.data;
};
