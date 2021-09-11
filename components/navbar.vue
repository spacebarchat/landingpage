<template>
  <nav class="text-center" id="nav">
    <div id="navbar_container">
      <div id="navbar_left">
        <NuxtLink to="/" class="link logo color-main"
          ><img
            src="https://raw.githubusercontent.com/fosscord/fosscord/master/assets/logo/logo.svg"
            height="30px"
            width="30px"
            class="fosscord-logo"
            alt="fosscord.com"
          />
          &nbsp;<span class="fosscord-logo-text">Fosscord</span></NuxtLink
        >
      </div>
      <div id="toggle_container">
        <NuxtLink to="/" class="link logo color-main" id="back_button"
          >Fosscord</NuxtLink
        >
        <button id="toggle" @click="showMobileNavbar = !showMobileNavbar">
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
      <div class="navbar_right">
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
        <NuxtLink to="/instances/" class="link mr-15 color-main nav_link"
          >Instances</NuxtLink
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
      <div
        class="navbar_right mobile_navbar"
        v-show="this.showMobileNavbar === true"
      >
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
        <NuxtLink to="/instances/" class="link mr-15 color-main nav_link"
          >Instances</NuxtLink
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

<script>
export default {
  data() {
    return {
      showMobileNavbar: false
    };
  }
};
</script>

<style>
#nav {
  padding: 1rem;
}
#navbar_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile_navbar {
  display: none;
}

/* #nav .link {
  color: #2e2e2e;
} */

.fosscord-logo {
  vertical-align: middle;
}

.fosscord-logo-text {
  vertical-align: middle;
}

@media (prefers-color-scheme: dark) {
  #nav .link {
    color: white;
  }
}

@media screen and (max-width: 600px) {
  .navbar_right {
    display: none;
  }

  .mobile_navbar {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
}
</style>
