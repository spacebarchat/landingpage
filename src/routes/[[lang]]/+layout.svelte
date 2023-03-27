<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import '../../app.css';
</script>

<a href="#ongoing-project-modal">
	<div class="bg-error w-full text-center py-3 text-md font-medium">
		{$LL.ONGOING_PROJECT_WARNING.CTA_HEADING()}
		<span class="underline italic">{$LL.ONGOING_PROJECT_WARNING.CTA_READ_MORE()}</span>
	</div>
</a>

<div class="navbar bg-transparent py-5">
	<div class="navbar-start">
		<div class="dropdown">
			<span class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</span>
			<ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
				<li><a href="/">{$LL.SECTIONS.ABOUT()}</a></li>
				<li><a href="/">{$LL.SECTIONS.ROADMAP()}</a></li>
				<li><a href="/">{$LL.SECTIONS.DOCS()}</a></li>
				<li><a href="/">{$LL.SECTIONS.CONTRIBUTE()}</a></li>
				<li><a href="/">{$LL.SECTIONS.INSTANCES()}</a></li>
			</ul>
		</div>
		<a href="/" class="btn btn-ghost normal-case text-xl">
			<img
				src="https://raw.githubusercontent.com/fosscord/fosscord/master/assets-rebrand/svg/Fosscord-Wordmark-Gradient.svg"
				width="w-16"
				class="max-h-7"
				alt={$LL.PROJECT_NAME()}
			/></a
		>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/">{$LL.SECTIONS.ABOUT()}</a></li>
			<li><a href="/">{$LL.SECTIONS.ROADMAP()}</a></li>
			<li><a href="/">{$LL.SECTIONS.DOCS()}</a></li>
			<li><a href="/">{$LL.SECTIONS.CONTRIBUTE()}</a></li>
			<li><a href="/">{$LL.SECTIONS.INSTANCES()}</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<a href="/" class="btn btn-primary"
			>{$LL.COMMON.SIGN_IN()}
			<div class="badge badge-warning ml-2 badge-xs">
				{$LL.NAVBAR.DEMO_ALPHA_WARNING_BADGE()}
			</div></a
		>
	</div>
</div>

<slot />

<div class="modal modal-bottom sm:modal-middle" id="ongoing-project-modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg">{$LL.ONGOING_PROJECT_WARNING.HEADING()}</h3>
		<p class="py-4">
			{$LL.ONGOING_PROJECT_WARNING.TEXT()}
		</p>
		<div class="modal-action">
			<a href="#" class="btn btn-primary">{$LL.COMMON.GOT_IT()}</a>
		</div>
	</div>
</div>
