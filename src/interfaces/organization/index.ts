import { GuestInterface } from 'interfaces/guest';
import { HealthcareProviderInterface } from 'interfaces/healthcare-provider';
import { InsuranceProviderInterface } from 'interfaces/insurance-provider';
import { MedicalStaffInterface } from 'interfaces/medical-staff';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  guest?: GuestInterface[];
  healthcare_provider?: HealthcareProviderInterface[];
  insurance_provider?: InsuranceProviderInterface[];
  medical_staff?: MedicalStaffInterface[];
  user?: UserInterface;
  _count?: {
    guest?: number;
    healthcare_provider?: number;
    insurance_provider?: number;
    medical_staff?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
