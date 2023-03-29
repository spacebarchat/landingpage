import { projectName } from '../../options';
import type { BaseTranslation } from '../i18n-types';

const en = {
	PROJECT_NAME: projectName,
	PROJECT_META_SLOGAN: "It's time to ditch Skype, Teamspeak, and Discord.",

	META: {
		COPYRIGHT_DISCLAIMER: `2023 © ${projectName} and ${projectName} contributors`,
		DISCORD_COPYRIGHT_DISCLAIMER: `Discord and the Discord logo are registered trademarks of Discord Inc. ${projectName} is not affiliated with Discord Inc.`
	},

	ONGOING_PROJECT_WARNING: {
		CTA_HEADING: `⚠️ Hey! ${projectName} is an ongoing project in early stages of development and it is not ready for production yet.`,
		CTA_READ_MORE: 'Read more',
		HEADING: `We're still developing ${projectName}!`,
		TEXT: 'TODO'
	},

	COMMON: {
		SIGN_IN: 'Sign In',
		SIGN_UP: 'Sign Up',
		GET_STARTED: 'Get Started',
		INSTAGRAM: 'Instagram',
		TWITTER: 'Twitter',
		GITHUB: 'GitHub',
		GOT_IT: 'Got It'
	},

	NAVBAR: {
		DEMO_ALPHA_WARNING_BADGE: 'Demo'
	},

	SECTIONS: {
		ABOUT: 'About',
		ROADMAP: 'Roadmap',
		INSTANCES: 'Instances',
		CONTRIBUTE: 'Contribute',
		DOCS: 'Docs'
	},

	MAIN_PAGE: {
		PAGE_HEADER: {
			BIG_MARKETING_TEXT: 'Talk nice!',
			SMALL_MARKETING_TEXT: 'Random, small marketing text for test purposes.',
			CTA_BUTTON_DEMO: 'Open Demo',
			CTA_BUTTON_CONTRIBUTE: 'Contribute',
			CTA_BUTTON_DOCS: 'Get Started'
		}
	}
} satisfies BaseTranslation;

export default en;
