import * as yup from 'yup';

export const guestValidationSchema = yup.object().shape({
  insurance_plan_id: yup.string().required(),
  appointment_id: yup.string().required(),
  medical_record_id: yup.string().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
