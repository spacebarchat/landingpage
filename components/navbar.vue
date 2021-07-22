<template>
  <nav class="pt-30 pb-30 bg-light lh-40 text-center navigation_8" id="nav">
    <div class="container px-xl-0" id="sec_nav">
      <div class="row navbar_container">
        <div class="col-lg-3 text-lg-left" id="navbar_left">
          <NuxtLink to="/" class="link logo color-main">fosscord.com</NuxtLink>
        </div>
        <div class="col-lg-6">
          <NuxtLink
            to="/"
            class="link mr-15 color-main nav_link"
            id="back_button"
            >Home</NuxtLink
          >
          <NuxtLink to="/about/" class="link mr-15 color-main nav_link"
            >About</NuxtLink
          >
          <a
            href="https://docs.fosscord.com/"
            class="link mx-15  color-main nav_link"
            >Documentation</a
          >
          <a
            href="https://github.com/fosscord/fosscord"
            class="link mx-15 color-main nav_link"
            >Download</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>
