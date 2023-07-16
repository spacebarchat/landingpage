<script lang="ts">
  export let icon: string;
  export let title: string;
  export let description: string;

  import Icon from '@iconify/svelte';
</script>

<div class="w-96">
  <figure>
    <Icon {icon} width="3rem" />
  </figure>
  <div class="items-left text-justify mt-4">
    <h2 class="text-2xl">{title}</h2>
    <p>{description}</p>
  </div>
</div>
