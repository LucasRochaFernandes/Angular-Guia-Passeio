import { AuthConfig } from 'angular-oauth2-oidc';

export const auth: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin,
  clientId: '',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false,
};
