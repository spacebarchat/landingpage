<!--this shit doesnt work fuck nuxt and vue-->

<template>
  <div class="roadmap">
    <h4>Media:</h4>
    <div id="roadmap_media" v-html="$md.render(content)"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: ""
    };
  },
  async fetch() {
    let res = await fetch(
      "https://api.github.com/repos/fosscord/fosscord-rtc/issues/18"
    );
    res = await res.json();
    let { body } = res;

    this.content = body
      .replace(/\[ \]/g, "<input type='checkbox' disabled/>")
      .replace(/\[x\]/g, "<input type='checkbox' checked disabled/>")
      .replace(
        /#(\d+)/g,
        '<a href="https://github.com/fosscord/fosscord-rtc/issues/$1">#$1</a>'
      );
  }
};
</script>
