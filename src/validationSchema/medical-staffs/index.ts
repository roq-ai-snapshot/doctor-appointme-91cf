import * as yup from 'yup';

export const medicalStaffValidationSchema = yup.object().shape({
  designation: yup.string().required(),
  qualification: yup.string().required(),
  experience: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
