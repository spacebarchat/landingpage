import type { BaseTranslation } from '../i18n-types';

const en = {
	PROJECT_NAME: 'Fosscord',

	ONGOING_PROJECT_WARNING: {
		CTA_HEADING:
			'⚠️ Hey! Fosscord is an ongoing project in early stages of development and it is not ready for production yet.',
		CTA_READ_MORE: 'Read more',
		HEADING: "We're still developing Fosscord!",
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
		DEMO_ALPHA_WARNING_BADGE: 'Demo/Alpha'
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
