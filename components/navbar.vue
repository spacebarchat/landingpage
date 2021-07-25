<template>
  <nav class="text-center" id="nav">
    <div id="navbar_container">
      <div id="navbar_left">
        <NuxtLink to="/" class="link logo color-main">fosscord.com</NuxtLink>
      </div>
      <div id="toggle_container">
        <NuxtLink to="/" class="link logo color-main" id="back_button"
          >fosscord.com</NuxtLink
        >
        <button id="toggle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 0 24 24"
            width="32px"
            fill="white"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
      </div>
      <div class="navbar_right hidden">
        <NuxtLink to="/about/" class="link mr-15 color-main nav_link"
          >About</NuxtLink
        >
        <NuxtLink to="/roadmap/" class="link mr-15 color-main nav_link"
          >Roadmap</NuxtLink
        >

        <NuxtLink to="/contributors/" class="link mr-15 color-main nav_link"
          >Contributors</NuxtLink
        >

        <a
          href="https://docs.fosscord.com/"
          target="_blank"
          class="link mx-15 color-main nav_link"
          >Documentation</a
        >
        <!--
        <a
          href="https://github.com/fosscord/fosscord"
          target="_blank"
          class="link mx-15 color-main nav_link"
          >Download</a
        >
        -->
      </div>
    </div>
  </nav>
</template>

<style>
#nav {
  padding: 1rem;
}
#navbar_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* #nav .link {
  color: #2e2e2e;
} */

@media (prefers-color-scheme: dark) {
  #nav .link {
    color: white;
  }
}

@media screen and (max-width: 600px) {
  .navbar_right {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
}
</style>
