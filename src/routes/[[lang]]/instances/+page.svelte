<script>
  import { LL } from '$lib/i18n/i18n-svelte';
  import PageHeading from '$lib/components/PageHeading.svelte';
  import InstanceList from '$lib/components/InstanceList.svelte';
</script>

<PageHeading title={$LL.SECTIONS.INSTANCES()} />

<section class="page-section">
  <div class="section-content text-center">
    <InstanceList />
  </div>
</section>
