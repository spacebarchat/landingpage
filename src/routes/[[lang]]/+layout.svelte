<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { projectLogo } from '$lib/options';
	import '../../app.css';
</script>

<svelte:head>
	<title>{$LL.PROJECT_NAME()} | {$LL.PROJECT_META_SLOGAN()}</title>

	<!-- We need to insert a PNG and ICO equivalent here. -->
	<link rel="icon" href={projectLogo.icons.app} type="image/svg+xml" />
</svelte:head>

<a href="#ongoing-project-modal">
	<div
		class="bg-error w-full text-center py-3 text-md font-medium drop-shadow-[0_0_3px_rgba(0,0,0,0.7)]"
	>
		{$LL.ONGOING_PROJECT_WARNING.CTA_HEADING()}
		<span class="underline italic">{$LL.ONGOING_PROJECT_WARNING.CTA_READ_MORE()}</span>
	</div>
</a>

<div class="absolute bg-transparent w-full z-50 flex align-center">
	<div class="max-w-screen-xl mx-auto navbar py-7 xl:px-0">
		<div class="navbar-start">
			<div class="dropdown">
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label tabindex="0" class="btn btn-ghost lg:hidden">
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
				</label>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul
					tabindex="0"
					class="menu menu-normal dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
				>
					<li class="w-[calc(100vw-2.40rem)]"><a href="/">{$LL.SECTIONS.ABOUT()}</a></li>
					<li><a href="/">{$LL.SECTIONS.ROADMAP()}</a></li>
					<li><a href="/">{$LL.SECTIONS.DOCS()}</a></li>
					<li><a href="/">{$LL.SECTIONS.CONTRIBUTE()}</a></li>
					<li><a href="/">{$LL.SECTIONS.INSTANCES()}</a></li>
				</ul>
			</div>
			<a href="/" class="normal-case text-xl">
				<img
					src={projectLogo.wordmark.light}
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
			<a href="/" class="btn btn-accent drop-shadow-lg border-white font-bold"
				>{$LL.COMMON.SIGN_IN()}
				<div class="badge badge-error ml-2 badge-xs p-3">
					{$LL.NAVBAR.DEMO_ALPHA_WARNING_BADGE()}
				</div></a
			>
		</div>
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
			<a href="#top" class="btn btn-primary">{$LL.COMMON.GOT_IT()}</a>
		</div>
	</div>
</div>

<footer class="footer p-10 bg-base-200 text-base-content sticky top-[100vh]">
	<div>
		<img src={projectLogo.wordmark.light} width="w-32" class="max-h-7" alt={$LL.PROJECT_NAME()} />
		<p>{$LL.META.COPYRIGHT_DISCLAIMER()}</p>
	</div>
	<div>
		<span class="footer-title">Header</span>
		<a href="#top" class="link link-hover">Option 1</a>
	</div>
	<div>
		<span class="footer-title">Header</span>
		<a href="#top" class="link link-hover">Option 2</a>
	</div>
	<div>
		<span class="footer-title">Header</span>
		<a href="#top" class="link link-hover">Option 3</a>
	</div>
</footer>
