<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '@fontsource/inter';
	import '../../app.postcss';

	import { AppBar, AppShell } from '@skeletonlabs/skeleton';

	import { LL } from '$lib/i18n/i18n-svelte';
</script>

<div class="max-w-7xl justify-center items-center flex mx-auto">
	<AppShell slotHeader="my-3">
		<svelte:fragment slot="header">
			<AppBar
				gridColumns="grid-cols-3"
				slotDefault="place-self-center"
				slotTrail="place-content-end"
				background="transparent"
			>
				<svelte:fragment slot="lead">
					<img
						alt="Fosscord Logo"
						src="https://raw.githubusercontent.com/fosscord/fosscord/master/assets-rebrand/svg/Fosscord-Wordmark-White.svg"
						class="w-48"
					/>
				</svelte:fragment>
				<nav>Navigation</nav>
				<svelte:fragment slot="trail">
					<button type="button" class="btn variant-filled"
						>{$LL.COMMON.SIGN_IN()}
						<span class="badge variant-filled-warning ml-2"
							>{$LL.NAVBAR.DEMO_ALPHA_WARNING_BADGE()}</span
						></button
					>
				</svelte:fragment>
			</AppBar>
		</svelte:fragment>
		<svelte:fragment slot="pageHeader">Page header test.</svelte:fragment>
		<slot />
	</AppShell>
</div>
