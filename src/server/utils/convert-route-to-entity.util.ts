const mapping: Record<string, string> = {
  guests: 'guest',
  'healthcare-providers': 'healthcare_provider',
  'insurance-providers': 'insurance_provider',
  'medical-staffs': 'medical_staff',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
