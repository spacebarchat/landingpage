<script lang="ts">
  import { LL } from '$lib/i18n/i18n-svelte';
  import { getFullURLForSubdomain, mainInstanceURL, projectLogo } from '$lib/options';
  import { mainMenu, socialLinks } from '$lib/menus';
  import Icon from '@iconify/svelte';
  import '@fontsource-variable/inter';
  import '../../app.css';
</script>

<svelte:head>
  <title>{$LL.PROJECT_NAME()} | {$LL.PROJECT_META_SLOGAN()}</title>

  <!-- We need to insert a PNG and ICO equivalent here. -->
  <link rel="icon" href={projectLogo.icons.app} type="image/svg+xml" />
</svelte:head>

<a href="#warning">
  <div
    id="ongoing-project-warning"
    class="w-full flex justify-center py-1.5 text-md font-medium drop-shadow-[0_0_3px_rgba(0,0,0,0.7)] px-auto"
  >
    <p class="text-red text-center bg-error backdrop-blur-sm w-full py-4">
      {$LL.ONGOING_PROJECT_WARNING.CTA_HEADING()}
      <span class="underline italic">{$LL.ONGOING_PROJECT_WARNING.CTA_READ_MORE()}</span>
    </p>
  </div>
</a>

<div class="absolute bg-transparent w-full z-50 flex align-center">
  <div class="max-w-screen-xl mx-auto navbar py-7 xl:px-0">
    <div class="navbar-start">
      <div class="dropdown mr-3 lg:mr-0">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <Icon icon="fa6-solid:bars" width="1.15rem" />
        </label>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul
          tabindex="0"
          class="menu menu-normal dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
        >
          {#each mainMenu as item}
            <li class="w-[calc(100vw-2.6rem)]"><a href={item.url}>{item.label}</a></li>
          {/each}
        </ul>
      </div>
      <a href="/" class="normal-case text-xl">
        <img
          src={projectLogo.wordmark.white}
          width="w-16"
          class="max-h-7"
          alt={$LL.PROJECT_NAME()}
        /></a
      >
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 justify-center">
        {#each mainMenu as item}
          <li><a href={item.url}>{item.label}</a></li>
        {/each}
        <div class="divider divider-horizontal" />
        {#each socialLinks as item}
          <li class="self-center">
            <!-- alt={item.label} -->
            <a href={item.url} target="_blank"
              ><Icon icon="fa-brands:{item.label.toLowerCase()}" width="22" height="22" /></a
            >
          </li>
        {/each}
      </ul>
    </div>
    <div class="navbar-end">
      <a href={mainInstanceURL} class="btn btn-accent drop-shadow-lg border-white font-bold"
        >{$LL.COMMON.SIGN_IN()}
        <div class="badge badge-error ml-2 badge-xs p-3">
          {$LL.NAVBAR.DEMO_ALPHA_WARNING_BADGE()}
        </div></a
      >
    </div>
  </div>
</div>

<slot />

<div class="modal modal-bottom sm:modal-middle" id="warning">
  <div class="modal-box">
    <h3 class="pb-2 font-bold text-lg">{$LL.ONGOING_PROJECT_WARNING.HEADING()}</h3>
    <p class="text-sm pb-5">
      {$LL.ONGOING_PROJECT_WARNING.TEXT_1()}
    </p>
    <h3 class="pt-3 pb-2 font-bold text-lg">
      <Icon icon="fa6-solid:users" width={25} style="display: initial;" class="mr-3" />
      {$LL.ONGOING_PROJECT_WARNING.TEXT_2_HEADING()}
    </h3>
    <p class="mb-6 text-sm">
      {$LL.ONGOING_PROJECT_WARNING.TEXT_2()}
    </p>
    <div class="mt-4 modal-action">
      <a href="/contribute" class="btn btn-link text-white"
        >{$LL.ONGOING_PROJECT_WARNING.CONTRIBUTE_BUTTON()}</a
      >
      <a href="#top" class="btn btn-accent">{$LL.ONGOING_PROJECT_WARNING.CLOSE_BUTTON()}</a>
    </div>
  </div>
</div>

<footer class="footer p-10 bg-darkblue text-base-content sticky top-[100vh]">
  <div>
    <img src={projectLogo.wordmark.white} width="w-32" class="max-h-7" alt={$LL.PROJECT_NAME()} />
    <p>{$LL.META.COPYRIGHT_DISCLAIMER()}</p>
  </div>
  <div>
    <span class="footer-title">Header</span>
    <a href="#top" class="link link-hover">Option 1</a>
  </div>
  <div>
    <span class="footer-title">Header</span>
    <a href="#top" class="link link-hover">Option 2</a>
  </div>
  <div>
    <span class="footer-title">Header</span>
    <a href="#top" class="link link-hover">Option 3</a>
  </div>
</footer>
