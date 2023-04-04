// Considering Fosscord project rename, this file should be updated to reflect the new name. This will also update the logo usage.
// Branding (colors) should be updated through the theming files on tailwind.config.js.

/*
 *	Meta
 */
export const projectName = 'Spacebar';

export const projectDomain = 'spacebar.chat';

export const projectUsername = {
	social: {
		twitter: 'spacebarchat',
		instagram: 'spacebarchat'
	},
	github: 'spacebarchat'
};

export const repoList = ['server', 'client', 'landingpage', 'docs'];

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

/*
 *	Main Instance
 */
export const mainInstanceURL = getFullURLForSubdomain('demo');

/*
 *	Website
 */

// enabledLanguages is not used at the moment.
export const enabledLanguages = ['en'];
