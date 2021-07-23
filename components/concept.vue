<template>
  <section id="concept">
    <div class="container px-xl-0">
      <div class="row" id="concept_main_container">
        <div class="col-lg-6 col-md-10" id="concept_second_container">
          <h2 class="small">
            About Fosscord
          </h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
            Fosscord is Free Open Source Software compatible to
            <a href="https://discord.com">Discord</a>. It's a Chat, Voice and
            Video platform similar to Slack, Rocket.chat and Discord-compatible.
          </div>
          <div class="mb-30 mb-md-0 d-sm-flex align-items-center buttons">
            <a
              href="https://docs.fosscord.com/"
              class="btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1"
              id="button_"
              >Documentation</a
            >
            <NuxtLink
              to="/about/"
              id="button_"
              class="btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1"
              >Read More</NuxtLink
            >
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <img
            src="../assets/images/sections/mindmap.svg"
            class="img-fluid rounded-3"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.buttons {
  display: flex;
  justify-content: space-evenly;
}
</style>
