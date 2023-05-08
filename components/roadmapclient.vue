<!--this shit doesnt work fuck nuxt and vue-->

<template>
  <div class="roadmap">
    <h3>Client</h3>
    <div id="roadmap_client" v-html="$md.render(content)"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  async fetch() {
    let res = await fetch(
      "https://api.github.com/repos/fosscord/fosscord-client/issues/67"
    );
    res = await res.json();
    let { body } = res;

    if (body) {
      this.content = body
        .replace(/\[ \]/g, "<input type='checkbox' disabled/>")
        .replace(/\[x\]/g, "<input type='checkbox' checked disabled/>")
        .replace(
          /#(\d+)/g,
          '<a href="https://github.com/fosscord/fosscord-client/issues/$1">#$1</a>'
        );
    } else {
      this.content = "<p>We don't have any roadmap for the client yet.</p>";
    }
  },
};
</script>
