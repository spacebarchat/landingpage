// Considering Fosscord project rename, this file should be updated to reflect the new name. This will also update the logo usage.
// Branding (colors) should be updated through the theming files on tailwind.config.js.

import type Instance from './types/instance';
import axios from 'axios';

/*
 *	Meta
 */
export const PROJECT_NAME = 'Spacebar';

export const PROJECT_DOMAIN = 'spacebar.chat';

export const PROJECT_USERNAME = {
  SOCIAL: {
    TWITTER: 'spacebarchat',
    INSTAGRAM: 'spacebarchat',
    DISCORD: 'Ms5Ev7S6bF'
  },
  GITHUB: 'spacebarchat'
};

export const GITHUB_REPOS = ['server', 'client', 'landingpage', 'docs'];

export const INSTANCE_LIST_URL =
  'https://raw.githubusercontent.com/spacebarchat/spacebarchat/master/instances/instances.json';

export const BRANDING_RESOURCES = {
  WORDMARK: {
    BLUE: 'https://raw.githubusercontent.com/spacebarchat/spacebarchat/master/branding/svg/Spacebar__Logo-Blue.svg',
    WHITE:
      'https://raw.githubusercontent.com/spacebarchat/spacebarchat/master/branding/svg/Spacebar__Logo-White.svg'
  },
  ICONS: {
    APP: 'https://raw.githubusercontent.com/spacebarchat/spacebarchat/master/branding/svg/Spacebar__Icon-Rounded.svg',
    SYMBOL: {
      BLUE: 'https://raw.githubusercontent.com/spacebarchat/spacebarchat/master/branding/svg/Spacebar__Logomark-Blue.svg',
      WHITE:
        'https://raw.githubusercontent.com/spacebarchat/spacebarchat/master/branding/svg/Spacebar__Logomark-White.svg'
    }
  }
};

/*
 *  Functions
 */
export const getFullURLForSubdomain = (subdomain: string, path?: string) =>
  `https://${subdomain}.${PROJECT_DOMAIN}${path ? `/${path}` : ''}`;

export const getInstanceList = async (): Promise<Instance[]> => {
  let final: Instance[] = [];

  await axios
    .get(INSTANCE_LIST_URL)
    .then((response) => {
      final = response.data;
      return response.data;
    })
    .catch(() => {
      final = [];
    });

  return final;
};

/*
 *	Main Instance
 */
export const OFFICIAL_INSTANCE_URL = getFullURLForSubdomain('app');

/*
 *	Website
 */

// enabledLanguages is not used at the moment.
export const enabledLanguages = ['en'];
