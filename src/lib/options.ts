// Considering Fosscord project rename, this file should be updated to reflect the new name. This will also update the logo usage.
// Branding (colors) should be updated through the theming files on tailwind.config.js.

import type Instance from './types/instance';
import axios from 'axios';

/*
 *	Meta
 */
export const projectName = 'Spacebar';

export const projectDomain = 'spacebar.chat';

export const projectUsername = {
  social: {
    twitter: 'spacebarchat',
    instagram: 'spacebarchat',
    discord: 'Ms5Ev7S6bF'
  },
  github: 'spacebarchat'
};

export const repoList = ['server', 'client', 'landingpage', 'docs'];

// Needs to be changed to the prod URL as soon as https://github.com/spacebarchat/community-instances/pull/68 gets merged.
export const instanceListURL =
  'https://raw.githubusercontent.com/BRGustavoRibeiro/community-instances/patch-1/instances.json';

export const projectLogo = {
  wordmark: {
    blue: 'https://raw.githubusercontent.com/spacebarchat/spacebarchat/master/branding/svg/Spacebar__Logo-Blue.svg',
    white:
      'https://raw.githubusercontent.com/spacebarchat/spacebarchat/master/branding/svg/Spacebar__Logo-White.svg'
  },
  icons: {
    app: 'https://raw.githubusercontent.com/spacebarchat/spacebarchat/master/branding/svg/Spacebar__Icon-Rounded.svg',
    symbol: {
      blue: 'https://raw.githubusercontent.com/spacebarchat/spacebarchat/master/branding/svg/Spacebar__Logomark-Blue.svg',
      white:
        'https://raw.githubusercontent.com/spacebarchat/spacebarchat/master/branding/svg/Spacebar__Logomark-White.svg'
    }
  }
};

/*
 *  Functions
 */
export const getFullURLForSubdomain = (subdomain: string, path?: string) =>
  `https://${subdomain}.${projectDomain}${path ? `/${path}` : ''}`;

export const getInstanceList = async (): Promise<Instance[]> => {
  let final: Instance[] = [];

  await axios
    .get(instanceListURL)
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
export const mainInstanceURL = getFullURLForSubdomain('demo');

/*
 *	Website
 */

// enabledLanguages is not used at the moment.
export const enabledLanguages = ['en'];
