import axios from 'axios';
import queryString from 'query-string';
import { BillingInformationInterface, BillingInformationGetQueryInterface } from 'interfaces/billing-information';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBillingInformations = async (
  query?: BillingInformationGetQueryInterface,
): Promise<PaginatedInterface<BillingInformationInterface>> => {
  const response = await axios.get('/api/billing-informations', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createBillingInformation = async (billingInformation: BillingInformationInterface) => {
  const response = await axios.post('/api/billing-informations', billingInformation);
  return response.data;
};

export const updateBillingInformationById = async (id: string, billingInformation: BillingInformationInterface) => {
  const response = await axios.put(`/api/billing-informations/${id}`, billingInformation);
  return response.data;
};

export const getBillingInformationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/billing-informations/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBillingInformationById = async (id: string) => {
  const response = await axios.delete(`/api/billing-informations/${id}`);
  return response.data;
};
