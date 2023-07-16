<script lang="ts">
  export let name: string;
  export let list: AccordionItem[];

  import type AccordionItem from '$lib/types/accordion-item';
  import { LL } from '$lib/i18n/i18n-svelte';
  import Icon from '@iconify/svelte';
</script>

{#each list as item}
  <div class="collapse bg-secondary">
    <input type="radio" {name} />
    <div class="collapse-title text-2xl font-medium pr-[16px]">
      <h2>
        <Icon icon={item.icon} width="40px" style="display: initial;" class="pr-3" />{item.title}
      </h2>
    </div>
    <div class="collapse-content">
      <p>{item.description}</p>
    </div>
  </div>
{/each}
