<script lang="ts">
  export let verifiedonly: boolean = false;

  import { getInstanceList, projectLogo } from '$lib/options';
  import Icon from '@iconify/svelte';
  import LL from '$lib/i18n/i18n-svelte';

  const instanceList = getInstanceList();
</script>

{#await instanceList}
  <span class="loading loading-dots loading-xl" />
{:then instanceListItems}
  {#if instanceListItems.length === 0}
    <p>{$LL.INSTANCES_PAGE.INSTANCES_LIST.NO_INSTANCES()}</p>
  {/if}
  <div class="join join-vertical w-full">
    {#each instanceListItems as item}
      {#if (verifiedonly && item.verified) || !verifiedonly}
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <div class="instance-list-item border-bottom join-item">
            <div class="flex items-center content-between space-x-3">
              <div class="basis-1/3 flex items-center">
                <div class="avatar rounded-full inline shadow-lg border">
                  <div class="mask mask-circle w-16 h-16">
                    <img src={item.image} alt="{item.name} logo" />
                  </div>
                </div>
                <div
                  class={item.verified
                    ? 'tooltip tooltip-success tooltip-right inline flex items-center'
                    : 'inline flex items-center'}
                  data-tip={$LL.INSTANCES_PAGE.INSTANCES_LIST.VERIFIED_BADGE()}
                >
                  <div class="font-bold text-xl inline ml-4">{item.name}</div>
                  {#if item.verified}
                    <span class="inline ml-1"><Icon icon="bxs:badge-check" width="22" /> </span>
                  {/if}
                </div>
              </div>
              <div class="basis-1/3">
                <div class="opacity-50">{item.description}</div>
              </div>
              <div class="basis-1/3 text-right">{item.url}</div>
            </div>
          </div>
        </a>
      {/if}
    {/each}
  </div>
{:catch error}
  <p>{$LL.INSTANCES_PAGE.INSTANCES_LIST.LOADING_FAILED()}</p>
{/await}
