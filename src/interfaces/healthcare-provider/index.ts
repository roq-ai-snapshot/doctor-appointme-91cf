import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface HealthcareProviderInterface {
  id?: string;
  specialization: string;
  qualification: string;
  experience: number;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface HealthcareProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  specialization?: string;
  qualification?: string;
  user_id?: string;
  organization_id?: string;
}
