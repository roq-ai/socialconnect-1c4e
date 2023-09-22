import { GetQueryInterface } from 'interfaces';

export interface BillingInformationInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface BillingInformationGetQueryInterface extends GetQueryInterface {
  id?: string;
}
