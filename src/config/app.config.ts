interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Team Member'],
  tenantName: 'Team',
  applicationName: 'socialconnect',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read content', 'Read post history', 'Read support tickets', 'View user preferences'],
  ownerAbilities: [
    'Manage support tickets',
    'Manage billing information',
    'Manage notification settings',
    'Manage user preferences',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/68491c8c-ca27-4c74-8500-57ce35a83f25',
};
