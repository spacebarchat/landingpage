// Considering Fosscord project rename, this file should be updated to reflect the new name. This will also update the logo usage.
// Branding (colors) should be updated through the theming files on tailwind.config.js.

/*
 *	Meta
 */
export const projectName = 'Fosscord';

export const projectUsername = {
	social: {
		twitter: 'fosscord',
		instagram: 'fosscord_'
	},
	github: 'fosscord'
};

export const repoList = ['server', 'client', 'landingpage', 'docs'];

export const projectLogo = {
	wordmark: {
		light:
			'https://raw.githubusercontent.com/fosscord/fosscord/master/assets-rebrand/svg/Fosscord-Wordmark-White.svg',
		dark: {
			default:
				'https://raw.githubusercontent.com/fosscord/fosscord/master/assets-rebrand/svg/Fosscord-Wordmark-Gradient.svg',
			opaque:
				'https://raw.githubusercontent.com/fosscord/fosscord/master/assets-rebrand/svg/Fosscord-Wordmark-Orange.svg'
		}
	},
	icons: {
		app: 'https://raw.githubusercontent.com/fosscord/fosscord/master/assets-rebrand/svg/Fosscord-Icon-Rounded.svg',
		symbol:
			'https://raw.githubusercontent.com/fosscord/fosscord/master/assets-rebrand/svg/Fosscord-Logo.svg'
	}
};

/*
 *	Main Instance
 */
export const mainInstanceURL = 'https://demo.fosscord.com';

/*
 *	Website
 */
export const enabledLanguages = ['en', 'pt-BR'];
