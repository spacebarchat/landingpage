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
		TEXT_1: `Spacebar is still in its early stages of development. We develop new stuff and features pretty quickly, but it's important to note that there are a lot of features to be created and issues that need to be ironed out before we're ready to production environments.`,
		TEXT_2_HEADING: `Wanna help? Join us!`,
		TEXT_2: `Want to help us? Whether it's contributing code, reporting bugs, or even just providing feedback, your involvement is highly encouraged and welcomed by our community!`,
		CONTRIBUTE_BUTTON: 'Let me join you',
		CLOSE_BUTTON: 'Okay, thanks'
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
			BIG_MARKETING_TEXT: `Chat as it should be.`,
			SMALL_MARKETING_TEXT: `Spacebar is a free, open-source and federated Discord alternative.`,
			CTA_BUTTON_DOCS: 'Get Started',
			CTA_BUTTON_CONTRIBUTE: 'Contribute',
			CTA_BUTTON_DEMO: 'Open Demo',
		}
	}
} satisfies BaseTranslation;

export default en;
