<script lang="ts">
  import AccordionWithIcons from '$lib/components/AccordionWithIcons.svelte';
  import ArcList from '$lib/components/ArcList.svelte';
  import Card from '$lib/components/Card.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import VerticalItemCard from '$lib/components/VerticalItemCard.svelte';
  import LL from '$lib/i18n/i18n-svelte';
  import Icon from '@iconify/svelte';
</script>

<Hero />

<section class="page-section bg-darkblue drop-shadow-[0_0_3px_rgba(0,0,0,0.7)]">
  <div class="section-content text-center">
    <div class="flex flex-row gap-24 justify-center">
      <Card
        icon="fluent-emoji:locked-with-key"
        title={$LL.MAIN_PAGE.CARDS.SECURE.TITLE()}
        description={$LL.MAIN_PAGE.CARDS.SECURE.DESCRIPTION()}
      />
      <Card
        icon="fluent-emoji:puzzle-piece"
        title={$LL.MAIN_PAGE.CARDS.FEDERATED.TITLE()}
        description={$LL.MAIN_PAGE.CARDS.FEDERATED.DESCRIPTION()}
      />
      <Card
        icon="fluent-emoji:chart-increasing"
        title={$LL.MAIN_PAGE.CARDS.SCALABLE.TITLE()}
        description={$LL.MAIN_PAGE.CARDS.SCALABLE.DESCRIPTION()}
      />
      <Card
        icon="fluent-emoji:check-mark-button"
        title={$LL.MAIN_PAGE.CARDS.DISCORD_COMPATIBLE.TITLE()}
        description={$LL.MAIN_PAGE.CARDS.DISCORD_COMPATIBLE.DESCRIPTION()}
      />
    </div>
  </div>
</section>

<section class="page-section bg-secondary">
  <div class="section-content text-center">
    <h2 class="section-title">This is a test.</h2>
  </div>
</section>
