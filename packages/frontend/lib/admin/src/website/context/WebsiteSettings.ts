import {createContext} from 'react';
import {
  defaultWebsiteSettingsContext,
  WebsiteSettingsContext,
} from './WebsiteSettings.types';

export const websiteSettingsContext = createContext<WebsiteSettingsContext>(
  defaultWebsiteSettingsContext
);
