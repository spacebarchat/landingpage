<script lang="ts">
  import { LL } from '$lib/i18n/i18n-svelte';
  import { getFullURLForSubdomain, mainInstanceURL } from '$lib/options';
  import Icon from '@iconify/svelte';
</script>

<section id="hero" class="bg-gradient-to-b from-primary to-secondary h-[36rem] flex self-center">
  <div class="max-w-7xl mx-auto flex flex-row gap-10 mt-16 w-full self-center">
    <div class="w-full text-center">
      <h1 class="text-6xl mb-5 font-bold">
        {$LL.MAIN_PAGE.PAGE_HEADER.BIG_MARKETING_TEXT()}
      </h1>
      <p class="mb-10">
        {$LL.MAIN_PAGE.PAGE_HEADER.SMALL_MARKETING_TEXT()}
      </p>
      <div class="inline-flex flex-row gap-5">
        <a href={getFullURLForSubdomain('docs')} class="btn btn-accent">
          <Icon icon="fa6-solid:arrow-right" width="20px" />
          {$LL.MAIN_PAGE.PAGE_HEADER.CTA_BUTTON_DOCS()}
        </a>
        <div class="join">
          <a href="/contribute" class="btn btn-ghost join-item border-[#ffffff80]">
            {$LL.MAIN_PAGE.PAGE_HEADER.CTA_BUTTON_CONTRIBUTE()}
          </a>
          <a href={mainInstanceURL} class="btn btn-ghost join-item border-[#ffffff80]">
            {$LL.MAIN_PAGE.PAGE_HEADER.CTA_BUTTON_DEMO()}
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
