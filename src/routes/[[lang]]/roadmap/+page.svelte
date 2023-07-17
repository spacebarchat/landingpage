<script>
  import { LL } from '$lib/i18n/i18n-svelte';
  import PageHeading from '$lib/components/PageHeading.svelte';
</script>

<PageHeading title={$LL.SECTIONS.ROADMAP()} />

<section class="page-section">
  <div class="section-content text-center">
    <div class="tabs justify-center">
      <a class="tab tab-bordered tab-active">Our Projects</a>
      <a class="tab tab-bordered">Getting Started</a>
      <a class="tab tab-bordered">Tab 3</a>
    </div>
  </div>
</section>
