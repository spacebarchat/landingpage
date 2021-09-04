<template>
  <div class="instances_container_main">
    <h3 class="instances_container_header">Community Instances:</h3>
    <div class="instances_container">
      <div
        class="instance_container"
        v-for="instance of instances"
        v-bind:key="instance"
      >
        <a v-bind:href="instance.url">
          <img
            class="instance_img"
            :class="
              instance.image ===
                'https://raw.githubusercontent.com/fosscord/fosscord/master/assets/logo512.png' &&
              instance.name !== 'fosscord.com'
                ? 'grey'
                : '' || (instance.name === 'fosscord.com' && 'fosscord_image')
            "
            v-bind:src="instance.image"
          />
        </a>
        <div class="instance_info_container">
          <a v-bind:href="instance.url">
            <h6 class="instance_name">
              {{ instance.name }}
              <svg
                v-if="instance.official"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="check-circle"
                class="verified_icon"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                ></path>
              </svg>
            </h6>
          </a>
          <span class="instance_desc">{{ instance.description }}</span>
        </div>
      </div>
    </div>
    <a
      href="https://github.com/fosscord/fosscord-community-instances/pulls"
      class="btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1"
      >Add your own Instance</a
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      instances: []
    };
  },
  async fetch() {
    let res = await fetch(
      "https://raw.githubusercontent.com/fosscord/fosscord-community-instances/main/instances.json"
    );
    res = await res.json();
    this.instances = res.map(i => {
      if (!i.image)
        i.image =
          "https://raw.githubusercontent.com/fosscord/fosscord/master/assets/logo512.png";
      return i;
    });
  }
};
</script>
