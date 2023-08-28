import * as yup from 'yup';

export const healthcareProviderValidationSchema = yup.object().shape({
  specialization: yup.string().required(),
  qualification: yup.string().required(),
  experience: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
