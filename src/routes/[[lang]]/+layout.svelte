<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '@fontsource/inter';
	import '../../app.postcss';

	import { AppBar, AppShell } from '@skeletonlabs/skeleton';

	import { Twitter, Instagram, Github } from 'lucide-svelte';

	import { LL } from '$lib/i18n/i18n-svelte';
</script>

<div class="max-w-7xl justify-center items-center flex mx-auto">
	<AppShell>
		<svelte:fragment slot="header">
			<AppBar
				gridColumns="grid-cols-3"
				slotDefault="place-self-center"
				slotTrail="place-content-end"
				background="transparent"
				padding="py-10"
			>
				<svelte:fragment slot="lead">
					<img
						alt="Fosscord Logo"
						src="https://raw.githubusercontent.com/fosscord/fosscord/master/assets-rebrand/svg/Fosscord-Wordmark-White.svg"
						class="w-48"
					/>
				</svelte:fragment>
				<nav>
					<div class="btn-group variant-ringed">
						<a href="/">{$LL.SECTIONS.ABOUT()}</a>
						<a href="/instances">{$LL.SECTIONS.INSTANCES()}</a>
						<a href="/contribute">{$LL.SECTIONS.CONTRIBUTE()}</a>
						<a href="/roadmap">{$LL.SECTIONS.ROADMAP()}</a>
						<a href="https://docs.fosscord.com/" target="_blank">{$LL.SECTIONS.DOCS()}</a>
						<a href="https://twitter.com/fosscord_/"><Twitter /></a>
						<a href="https://instagram.com/fosscord/" rel="me"><Instagram /></a>
						<a href="https://github.com/fosscord/fosscord/"><Github /></a>
					</div>
				</nav>
				<svelte:fragment slot="trail">
					<a href="/" class="btn variant-filled"
						>{$LL.COMMON.SIGN_IN()}
						<span class="badge variant-filled-warning ml-2"
							>{$LL.NAVBAR.DEMO_ALPHA_WARNING_BADGE()}</span
						></a
					>
				</svelte:fragment>
			</AppBar>
		</svelte:fragment>
		<svelte:fragment slot="pageHeader">Page header test.</svelte:fragment>
		<slot />
	</AppShell>
</div>
