<template>
  <nav class="text-center container" id="nav">
    <div id="navbar_container">
      <div id="navbar_left">
        <NuxtLink to="/" class="link logo color-main">fosscord.com</NuxtLink>
      </div>
      <div class="">
        <NuxtLink to="/" class="link mr-15 color-main nav_link" id="back_button"
          >Home</NuxtLink
        >
        <NuxtLink to="/about/" class="link mr-15 color-main nav_link"
          >About</NuxtLink
        >
        <a
          href="https://docs.fosscord.com/"
          target="_blank"
          class="link mx-15 color-main nav_link"
          >Documentation</a
        >
        <a
          href="https://github.com/fosscord/fosscord"
          target="_blank"
          class="link mx-15 color-main nav_link"
          >Download</a
        >
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
</style>
