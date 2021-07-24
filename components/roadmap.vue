<template>
  <div class="roadmap">
    <div id="roadmap_api"></div>
  </div>
</template>
<script>
const markdown = require("markdown-it");
const taskLists = require("markdown-it-task-lists");
const md = new markdown();
md.use(taskLists, { enabled: true });
md.configure({
  options: {
    html: true,
    xhtmlOut: true,
    breaks: true,
    langPrefix: "language-",
    linkify: true,
    typographer: true,
    maxNesting: 100
  }
});

async function getRoadmap() {
  let res = await fetch(
    "https://api.github.com/repos/fosscord/fosscord-api/issues/140"
  );
  res = await res.json();
  let { body } = res;

  window.document.getElementById("roadmap_api").innerHTML = md.render(body);
}
getRoadmap();
</script>
