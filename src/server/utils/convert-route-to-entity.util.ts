const mapping: Record<string, string> = {
  'billing-informations': 'billing_information',
  channels: 'channel',
  contents: 'content',
  'notification-settings': 'notification_settings',
  'payment-histories': 'payment_history',
  'post-histories': 'post_history',
  'social-accounts': 'social_account',
  subscriptions: 'subscription',
  'support-tickets': 'support_tickets',
  teams: 'team',
  users: 'user',
  'user-preferences': 'user_preferences',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
