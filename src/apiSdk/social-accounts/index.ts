import axios from 'axios';
import queryString from 'query-string';
import { SocialAccountInterface, SocialAccountGetQueryInterface } from 'interfaces/social-account';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSocialAccounts = async (
  query?: SocialAccountGetQueryInterface,
): Promise<PaginatedInterface<SocialAccountInterface>> => {
  const response = await axios.get('/api/social-accounts', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSocialAccount = async (socialAccount: SocialAccountInterface) => {
  const response = await axios.post('/api/social-accounts', socialAccount);
  return response.data;
};

export const updateSocialAccountById = async (id: string, socialAccount: SocialAccountInterface) => {
  const response = await axios.put(`/api/social-accounts/${id}`, socialAccount);
  return response.data;
};

export const getSocialAccountById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/social-accounts/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSocialAccountById = async (id: string) => {
  const response = await axios.delete(`/api/social-accounts/${id}`);
  return response.data;
};
