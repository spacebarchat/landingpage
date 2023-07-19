<script lang="ts">
  export let title: string;
</script>

<section id="page-heading">
  <div class="max-w-screen-xl w-full mx-auto pt-36 pb-10">
    <div class="content-between items-center flex justify-between">
      <div class="text-4xl font-bold text-left inline">
        <h1>{title}</h1>
      </div>
      {#if $$slots}
        <div class="inline flex justify-end items-center">
          <slot />
        </div>
      {/if}
    </div>
  </div>
</section>
