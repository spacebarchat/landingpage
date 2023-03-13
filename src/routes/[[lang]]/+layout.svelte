<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '@fontsource/inter';
	import '../../app.postcss';

	import { AppBar, AppShell } from '@skeletonlabs/skeleton';

	import { LL } from '$lib/i18n/i18n-svelte';
</script>

<!-- svelte-ignore missing-declaration -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<img
					alt="Fosscord Logo"
					src="https://raw.githubusercontent.com/fosscord/fosscord/master/assets-rebrand/svg/Fosscord-Wordmark-White.svg"
					class="w-64"
				/>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<nav>Navigation</nav>
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
