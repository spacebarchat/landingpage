<template>
  <section class="pt-95 pb-85 bg-dark color-white content_16">
    <div class="container px-xl-0">
      <div class="row justify-content-between">
        <div class="col-xl-12 col-lg-8 col-md-9 mt-4 mt-md-0 text-center">
          <h2 class="pl-15 small">Random Facts</h2>
          <div class="mt-1 pl-15 f-18 medium op-7 text-adaptive">
            <div>
              {{ randomlyFact }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="js">
  const {
    Vue,
    Component,
    Prop
  } = require("nuxt-property-decorator");

  export default {
    name: "RandomFacts",
    data () {
      return {
        randomlyFact: [
          "The client can connect to multiple server instances without the need to open it multiple times. The client should be extensible through a secure Plugin and Theme System with own store.",
          "Fosscord is completely open-source, so any risk of fraud is eliminated since you can look directly into the code.",
          "You can host Fosscord for yourself and create your own Fosscord instance, which is very useful for private networks like schools etc.",
          "Because the Fosscord is Open Souce, it is of course fully configurable. However, so is the client, you can use themes, install plugins and more."
        ][Math.floor(Math.random() * 4)]
      }
    },
  }

</script>
