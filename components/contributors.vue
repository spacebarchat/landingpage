<template>
  <div class="contributors_container_container">
    <h3>Contributors:</h3>
    <div class="contributors_container">
      <div
        class="contributor_container"
        v-for="member of members"
        v-bind:key="member"
      >
        <a v-bind:href="member.html_url">
          <img class="contributor_img" v-bind:src="member.avatar_url" />
        </a>
        <h6>
          {{ member.login }}
        </h6>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      members: []
    };
  },
  async fetch() {
    this.members = await fetch(
      "https://raw.githubusercontent.com/fosscord/fosscord/master/assets/contributors/contributors.json"
      //isn't it supposed to be fosscord in total? i've made one or two pull requests and am not listen here.
    ).then(res => res.json());
  }
};
</script>
