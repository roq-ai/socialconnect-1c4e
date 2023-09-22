import axios from 'axios';
import queryString from 'query-string';
import { PaymentHistoryInterface, PaymentHistoryGetQueryInterface } from 'interfaces/payment-history';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPaymentHistories = async (
  query?: PaymentHistoryGetQueryInterface,
): Promise<PaginatedInterface<PaymentHistoryInterface>> => {
  const response = await axios.get('/api/payment-histories', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPaymentHistory = async (paymentHistory: PaymentHistoryInterface) => {
  const response = await axios.post('/api/payment-histories', paymentHistory);
  return response.data;
};

export const updatePaymentHistoryById = async (id: string, paymentHistory: PaymentHistoryInterface) => {
  const response = await axios.put(`/api/payment-histories/${id}`, paymentHistory);
  return response.data;
};

export const getPaymentHistoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/payment-histories/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePaymentHistoryById = async (id: string) => {
  const response = await axios.delete(`/api/payment-histories/${id}`);
  return response.data;
};
