import axios from 'axios';
import queryString from 'query-string';
import { PostHistoryInterface, PostHistoryGetQueryInterface } from 'interfaces/post-history';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPostHistories = async (
  query?: PostHistoryGetQueryInterface,
): Promise<PaginatedInterface<PostHistoryInterface>> => {
  const response = await axios.get('/api/post-histories', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPostHistory = async (postHistory: PostHistoryInterface) => {
  const response = await axios.post('/api/post-histories', postHistory);
  return response.data;
};

export const updatePostHistoryById = async (id: string, postHistory: PostHistoryInterface) => {
  const response = await axios.put(`/api/post-histories/${id}`, postHistory);
  return response.data;
};

export const getPostHistoryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/post-histories/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePostHistoryById = async (id: string) => {
  const response = await axios.delete(`/api/post-histories/${id}`);
  return response.data;
};
