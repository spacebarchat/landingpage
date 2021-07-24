<!--this shit doesnt work fuck nuxt and vue-->
<!--
<template>
  <div class="roadmap">
    <div id="roadmap_api" @load="$fetch">
      <vue-markdown>{{ content }}</vue-markdown>
    </div>
  </div>
</template>
<script>
import VueMarkdown from "@adapttive/vue-markdown";

new Vue({
  components: {
    VueMarkdown
  }
});
export default {
  data() {
    return {
      content: ""
    };
  },
  async fetch() {
    let res = await fetch(
      "https://api.github.com/repos/fosscord/fosscord-api/issues/140"
    );
    res = await res.json();
    let { body } = res;

    this.content = body;
  }
};
</script>
-->
