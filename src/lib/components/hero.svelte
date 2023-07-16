<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { getFullURLForSubdomain, mainInstanceURL } from '$lib/options';
</script>

<section id="hero" class="bg-gradient-to-b from-primary to-secondary h-[36rem] pt-[2rem] flex self-center">
	<div class="max-w-7xl mx-auto flex flex-row gap-10 w-full self-center">
		<div class="w-full text-center mt-10">
			<h1 class="text-8xl mb-5 font-bold">
				{$LL.MAIN_PAGE.PAGE_HEADER.BIG_MARKETING_TEXT()}
			</h1>
			<p class="text-2xl mb-10">
				{$LL.MAIN_PAGE.PAGE_HEADER.SMALL_MARKETING_TEXT()}
			</p>
			<div class="inline-flex flex-row gap-5">
				<div class="btn-group">
					<a href={getFullURLForSubdomain('docs')} class="btn btn-accent">
						{$LL.MAIN_PAGE.PAGE_HEADER.CTA_BUTTON_DOCS()}
					</a>
					<a href="/contribute" class="btn btn-accent">
						{$LL.MAIN_PAGE.PAGE_HEADER.CTA_BUTTON_CONTRIBUTE()}
					</a>
					<a href={mainInstanceURL} class="btn btn-accent">
						{$LL.MAIN_PAGE.PAGE_HEADER.CTA_BUTTON_DEMO()}
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
