import MenuItem from '$lib/types/menu-item';
import { PROJECT_USERNAME, getFullURLForSubdomain } from '$lib/options';

// TODO: Add support for i18n using typesafe-i18n
export const mainMenu = [
  // When localizing, use LL.SECTIONS.ABOUT, LL.SECTIONS.ROADMAP, etc.
  new MenuItem('About', '/'),
  new MenuItem('Roadmap', '/roadmap'),
  new MenuItem('Docs', getFullURLForSubdomain('docs')),
  new MenuItem('Instances', '/instances'),
  new MenuItem('Contribute', '/contribute')
];

export const socialLinks = [
  // When localizing, use LL.COMMON.GITHUB, LL.COMMON.TWITTER, etc.
  new MenuItem('GitHub', `https://github.com/${PROJECT_USERNAME.GITHUB}`),
  new MenuItem('Discord', `https://discord.gg/${PROJECT_USERNAME.SOCIAL.DISCORD}`),
  new MenuItem('Twitter', `https://twitter.com/${PROJECT_USERNAME.SOCIAL.TWITTER}`),
  new MenuItem('Instagram', `https://instagram.com/${PROJECT_USERNAME.SOCIAL.INSTAGRAM}`)
];
