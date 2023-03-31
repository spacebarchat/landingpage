import MenuItem from '$lib/types/menu-item';
import { projectUsername, getFullURLForSubdomain } from '$lib/options';

// TODO: Add support for i18n using typesafe-i18n
export const mainMenu = [
	new MenuItem('About', '/about'),
	new MenuItem('Roadmap', '/roadmap'),
	new MenuItem('Docs', getFullURLForSubdomain('docs')),
	new MenuItem('Instances', '/instances'),
	new MenuItem('Contribute', '/contribute')
];

export const socialLinks = [
	new MenuItem('GitHub', `https://github.com/${projectUsername.github}`),
	new MenuItem('Twitter', `https://twitter.com/${projectUsername.social.twitter}`),
	new MenuItem('Instagram', `https://instagram.com/${projectUsername.social.instagram}`)
];
