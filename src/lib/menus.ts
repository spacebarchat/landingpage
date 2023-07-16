import MenuItem from '$lib/types/menu-item';
import { projectUsername, getFullURLForSubdomain } from '$lib/options';

// TODO: Add support for i18n using typesafe-i18n
export const mainMenu = [
	// When localizing, use LL.SECTIONS.ABOUT, LL.SECTIONS.ROADMAP, etc.
	new MenuItem('About', '/about'),
	new MenuItem('Roadmap', '/roadmap'),
	new MenuItem('Docs', getFullURLForSubdomain('docs')),
	new MenuItem('Instances', '/instances'),
	new MenuItem('Contribute', '/contribute')
];

export const socialLinks = [
	// When localizing, use LL.COMMON.GITHUB, LL.COMMON.TWITTER, etc.
	new MenuItem('GitHub', `https://github.com/${projectUsername.github}`),
	new MenuItem('Discord', `https://discord.gg/${projectUsername.social.discord}`),
	new MenuItem('Twitter', `https://twitter.com/${projectUsername.social.twitter}`),
	new MenuItem('Instagram', `https://instagram.com/${projectUsername.social.instagram}`),
];
