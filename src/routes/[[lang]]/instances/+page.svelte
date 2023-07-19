<script>
  import { LL } from '$lib/i18n/i18n-svelte';
  import PageHeading from '$lib/components/PageHeading.svelte';
  import InstanceList from '$lib/components/InstanceList.svelte';
  import Icon from '@iconify/svelte';

  let verifiedOnly = false;
</script>

<PageHeading title={$LL.SECTIONS.INSTANCES()}>
  <div class="form-control mr-6">
    <label class="label cursor-pointer">
      <span class="label-text mr-3">{$LL.INSTANCES_PAGE.MENU.ONLY_VERIFIED()}</span>
      <input bind:checked={verifiedOnly} type="checkbox" class="toggle toggle-success" />
    </label>
  </div>
  <a href="#top" class="btn btn-accent btn-sm btn-outline"
    ><Icon icon="fa6-solid:plus" width="16" /> {$LL.INSTANCES_PAGE.MENU.ADD_YOUR_INSTANCE()}</a
  >
</PageHeading>

<section class="page-section">
  <div class="section-content text-center">
    <InstanceList verifiedonly={verifiedOnly} />
  </div>
</section>
