<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { getFullURLForSubdomain, mainInstanceURL } from '$lib/options';
</script>

<section class="bg-gradient-to-b from-primary to-secondary h-[36rem] pt-[2rem] flex">
	<div class="max-w-7xl mx-auto flex flex-row gap-10 w-full self-center">
		<div class="basis-1/2 md:text-left text-center">
			<h1 class="text-8xl mb-5 font-bold">
				{$LL.MAIN_PAGE.PAGE_HEADER.BIG_MARKETING_TEXT()}
			</h1>
			<p class="text-4xl mb-5">
				{$LL.MAIN_PAGE.PAGE_HEADER.SMALL_MARKETING_TEXT()}
			</p>
			<div class="inline-flex flex-row gap-5">
				<a href={mainInstanceURL} class="btn btn-accent border-white">
					{$LL.MAIN_PAGE.PAGE_HEADER.CTA_BUTTON_DEMO()}
				</a>
				<a href={getFullURLForSubdomain('docs')} class="btn btn-accent border-white">
					{$LL.MAIN_PAGE.PAGE_HEADER.CTA_BUTTON_DOCS()}
				</a>
				<a href="#top" class="btn btn-accent border-white">
					{$LL.MAIN_PAGE.PAGE_HEADER.CTA_BUTTON_CONTRIBUTE()}
				</a>
			</div>
		</div>
		<div class="basis-1/2 md:text-right text-center">
			<p>Test</p>
		</div>
	</div>
</section>
