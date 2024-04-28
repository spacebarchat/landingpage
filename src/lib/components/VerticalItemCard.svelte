<script lang="ts">
  export let label: string;
  export let description: string;
  export let icon: string;

  import { LL } from '$lib/i18n/i18n-svelte';
  import { getFullURLForSubdomain, OFFICIAL_INSTANCE_URL } from '$lib/options';
  import Icon from '@iconify/svelte';
</script>

<div class="bg-secondary shadow-xl w-full text-left p-3 rounded-xl">
  <div class="flex flex-row">
    <div class="basis-1/3">
      <Icon {icon} width="4rem" style="display: initial;" />
    </div>
    <div class="basis-1/3">
      <h2>{label}</h2>
    </div>
    <div class="basis-1/3 w-full">
      <p>{description}</p>
    </div>
  </div>
</div>
