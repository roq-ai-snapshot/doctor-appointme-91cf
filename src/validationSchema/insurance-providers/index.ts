import * as yup from 'yup';

export const insuranceProviderValidationSchema = yup.object().shape({
  company_name: yup.string().required(),
  policy_name: yup.string().required(),
  coverage_details: yup.string().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
