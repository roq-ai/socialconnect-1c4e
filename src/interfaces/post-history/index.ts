import { GetQueryInterface } from 'interfaces';

export interface PostHistoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface PostHistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
