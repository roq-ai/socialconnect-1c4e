import { GetQueryInterface } from 'interfaces';

export interface PaymentHistoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface PaymentHistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
