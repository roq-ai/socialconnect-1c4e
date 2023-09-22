import { GetQueryInterface } from 'interfaces';

export interface SocialAccountInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface SocialAccountGetQueryInterface extends GetQueryInterface {
  id?: string;
}
