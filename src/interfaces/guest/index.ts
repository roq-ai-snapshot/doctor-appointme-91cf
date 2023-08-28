import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface GuestInterface {
  id?: string;
  insurance_plan_id: string;
  user_id: string;
  organization_id: string;
  appointment_id: string;
  medical_record_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface GuestGetQueryInterface extends GetQueryInterface {
  id?: string;
  insurance_plan_id?: string;
  user_id?: string;
  organization_id?: string;
  appointment_id?: string;
  medical_record_id?: string;
}
