<template>
  <section id="announcement">
    <div class="container px-xl-0">
      <div class="row justify-content-center">
        <div
          class="col-xl-12 col-lg-8 col-md-9 mt-4 mt-md-0 text-center"
          id="section_content"
        >
          <h2 class="small">
            Thanks for <span class="fg-fosscord">{{ stars }}</span> Github
            stars!
          </h2>
          <div class="description">
            <div>
              Fosscord has reached {{ stars }} stars on Github in such a short
              time. <br />Thanks to you.
            </div>
          </div>
          <a
            href="https://github.com/fosscord/fosscord"
            target="_blank"
            class="btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1"
            id="button_"
            >Github</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      stars: 0
    };
  },
  async fetch() {
    let res = await fetch("https://api.github.com/repos/fosscord/fosscord");
    res = await res.json();
    this.stars = res.stargazers_count;
  }
};
</script>

<style>
#announcement {
  padding: 5rem 2rem;
  padding-bottom: 0;
}
</style>
