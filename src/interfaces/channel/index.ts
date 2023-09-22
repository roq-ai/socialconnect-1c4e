import { GetQueryInterface } from 'interfaces';

export interface ChannelInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ChannelGetQueryInterface extends GetQueryInterface {
  id?: string;
}
