import { GetQueryInterface } from 'interfaces';

export interface SupportTicketsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface SupportTicketsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
