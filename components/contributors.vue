<template>
  <div class="contributors_container_container">
    <h3>Founders:</h3>
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
      "https://api.github.com/orgs/fosscord/members"
    ).then(res => res.json());
  }
};
</script>
