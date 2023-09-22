import { GetQueryInterface } from 'interfaces';

export interface ContentInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ContentGetQueryInterface extends GetQueryInterface {
  id?: string;
}
