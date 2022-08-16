<template>
  <section>
    <div class="container px-xl-0 container-feature">
      <div class="row" id="concept_main_container">
        <div class="col-lg-6 col-md-10" id="concept_second_container">
          <h2 class="small">About Fosscord</h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
            Fosscord is a free and open source program compatible with
            <a href="https://discord.com">Discord</a>. It's an in development chat, voice and
            video platform similar to Slack and Rocket.chat.
          </div>
          <div class="mb-30 mb-md-0 d-sm-flex align-items-center buttons">
            <a
              href="https://docs.fosscord.com/"
              class="btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1"
              id="button-docs"
              >Documentation</a
            >
            <NuxtLink
              to="/about/"
              id="button_ button-readMore"
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

    <div class="container px-xl-0 container-feature" id="contribute">
      <div class="row" id="contribution_container">
        <div class="col-lg-6 col-md-12">
          <img
            src="../assets/images/sections/version_control.svg"
            class="img-fluid rounded-3"
          />
        </div>
        <div class="col-lg-6 col-md-10" id="contribute_text">
          <h2 class="small">Contribute now!</h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
            Currently, Fosscord is still in development, and may or may not release in the future. In total,
			<span class="fg-fosscord">72</span> persons contributed on this project. Feel free to check out the
			<a href="https://docs.fosscord.com">documentation</a> or the
            <a href="https://github.com/fosscord">GitHub repositories</a>.
			We would highly appreciate any and all support.
          </div>
          <a
            href="https://github.com/fosscord/fosscord/issues/10"
            class="btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1"
            id="button_"
            >Contribute</a
          >
        </div>
      </div>
    </div>
    <div class="container px-xl-0 container-feature">
      <div class="row">
        <div class="col-lg-6 col-md-10">
          <h2 class="small">Configurable</h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
            We believe that anyone should be able to configure their own
            instance exactly to their needs. That's why the instance admin can
            change nearly every default value in the database without changing
            the source code.
          </div>
          <!-- <div class="mb-30 mb-md-0 d-sm-flex align-items-center buttons">
            <NuxtLink
              to="/about/"
              id="button_"
              class="btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1"
              >Read More</NuxtLink
            >
          </div> -->
        </div>
        <div class="col-lg-6 col-md-12">
          <img
            src="../assets/images/sections/configurable.svg"
            class="img-fluid rounded-3"
          />
        </div>
      </div>
    </div>
    <div class="container px-xl-0 container-feature">
      <div class="row left">
        <div class="col-lg-6 col-md-10">
          <h2 class="small">Selfhostable</h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
            We believe that anyone should have the option to host their own instance without any restrictions.
			Through the <a href="https://github.com/fosscord/fosscord-server/releases">guide on our documentation,</a>
			anyone can host their own Fosscord instance.
          </div>
          <!-- <div class="mb-30 mb-md-0 d-sm-flex align-items-center buttons">
            <NuxtLink
              to="/about/"
              id="button_"
              class="btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1"
              >Read More</NuxtLink
            >
          </div> -->
        </div>
        <div class="col-lg-6 col-md-12">
          <img src="../assets/images/sections/selfhostable.svg"
            class="img-fluid rounded-3"/>
        </div>
      </div>
    </div>
    <div class="container px-xl-0 container-feature">
      <div class="row">
        <div class="col-lg-6 col-md-10">
          <h2 class="small">Decentralized</h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
	    Currently, Fosscord instances are centralized. But we do plan on adding
	    decentralized features in the future. As we believe that a central approach
	    leads to a single point of failure and abuse of power. That’s why Fosscord will
	    implement a decentralized architecture, and will allow future clients to be
	    able to connect to multiple servers simultaneously.
          </div>
          <!-- <div class="mb-30 mb-md-0 d-sm-flex align-items-center buttons">
            <NuxtLink
              to="/about/"
              id="button_"
              class="btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1"
              >Read More</NuxtLink
            >
          </div> -->
        </div>
        <div class="col-lg-6 col-md-12">
          <img
            src="../assets/images/sections/decentralized.svg"
            class="img-fluid rounded-3"
          />
        </div>
      </div>
    </div>
    <div class="container px-xl-0 container-feature">
      <div class="row left">
        <div class="col-lg-6 col-md-10">
          <h2 class="small">Free & Open Source</h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
            We believe that the best way to make a software is to make it follow
            the GPL principles and let everyone contribute to it. Additionally we
            represent a libre position so that anyone can do whatever they want
            with Fosscord as long as you publish all changes under the
            <a href="https://www.gnu.org/licenses/agpl-3.0.html"
              >GNU Affero General Public License v3.0</a>.
          </div>
          <!-- <div class="mb-30 mb-md-0 d-sm-flex align-items-center buttons">
            <NuxtLink to="/about/" id="button_"
              class="btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1"
              >Read More</NuxtLink
            >
          </div> -->
        </div>
        <div class="col-lg-6 col-md-12">
          <img src="../assets/images/sections/foss.svg"
            class="img-fluid rounded-3"
          />
        </div>
      </div>
    </div>
    <div class="container px-xl-0 container-feature">
      <div class="row">
        <div class="col-lg-6 col-md-10">
          <h2 class="small">Encryption</h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
	    Currently, we haven't implemented this feature yet. But
            We do believe that communication should be private and no third party
            should be able to intercept and read the content of it. Hence, we
            plan on adding an end-to-end encryption based on Message Layer Security.
          </div>
          <!-- <div class="mb-30 mb-md-0 d-sm-flex align-items-center buttons">
            <NuxtLink
              to="/about/"
              id="button_"
              class="btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1"
              >Read More</NuxtLink
            >
          </div> -->
        </div>
        <div class="col-lg-6 col-md-12">
          <img
            src="../assets/images/sections/encrypted.svg"
            class="img-fluid rounded-3"
          />
        </div>
      </div>
    </div>
    <div class="container px-xl-0 container-feature">
      <div class="row left">
        <div class="col-lg-6 col-md-10">
          <h2 class="small">Security</h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
            Publically auditable, open source software allows users to verify the
	    operation of a Fosscord server,and allows the community to quickly 
	    disclose and discuss potential issues related to not just security, but
            all issues related to Fosscord.
          </div>
          <!-- <div class="mb-30 mb-md-0 d-sm-flex align-items-center buttons">
            <NuxtLink
              to="/about/"
              id="button_"
              class="btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1"
              >Read More</NuxtLink
            >
          </div> -->
        </div>
        <div class="col-lg-6 col-md-12">
          <img
            src="../assets/images/sections/security.svg"
            class="img-fluid rounded-3"
          />
        </div>
      </div>
    </div>
    <div class="container px-xl-0 container-feature">
      <div class="row">
        <div class="col-lg-6 col-md-10">
          <h2 class="small">Privacy</h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
            We believe data privacy is a human right. All data collection in Fosscord is opt-in,
	    and disabled by default. Currently, these options are instance-wide, however we plan
	    to allow users of individual instances to control how this is used in their client.
          </div>
          <!-- <div class="mb-30 mb-md-0 d-sm-flex align-items-center buttons">
            <NuxtLink to="/about/" id="button_"
              class="btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1"
              >Read More</NuxtLink>
          </div> -->
        </div>
        <div class="col-lg-6 col-md-12">
          <img src="../assets/images/sections/privacy.svg"
            class="img-fluid rounded-3" />
        </div>
      </div>
    </div>
    <!-- <no-client-yet/>
    <div class="container px-xl-0 container-feature">
      <div class="row left">
        <div class="col-lg-6 col-md-10">
          <h2 class="small">Extendable</h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
            We believe anyone should be able to extend their clients with
            features that we currently do not provide. That’s why we will integrate a
            secure and cross-platform plugin system.
          </div>
          < !-- <div class="mb-30 mb-md-0 d-sm-flex align-items-center buttons">
            <NuxtLink to="/about/" id="button_"
              class="btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1"
              >Read More</NuxtLink>
          </div> 
        </div>
        <div class="col-lg-6 col-md-12">
          <img src="../assets/images/sections/extendable.svg"
            class="img-fluid rounded-3" />
        </div>
      </div>
    </div> -->
    <!-- <div class="container px-xl-0 container-feature">
      <div class="row">
        <div class="col-lg-6 col-md-10">
          <h2 class="small">Themeable</h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
            We believe anyone should be able to adjust the look and feel of
            their client. That’s why we will integrate a cross-platform theme system.
            Additionally we provide a design editor for easier creation of
            client themes.
          </div>
          < !-- <div class="mb-30 mb-md-0 d-sm-flex align-items-center buttons">
            <NuxtLink to="/about/" id="button_"
              class="btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1"
              >Read More</NuxtLink>
          </div> -- >
        </div>
        <div class="col-lg-6 col-md-12">
          <img src="../assets/images/sections/themeable.svg"
            class="img-fluid rounded-3" />
        </div>
      </div>
    </div>
    -->
    <div class="container px-xl-0 container-feature">
      <div class="row left">
        <div class="col-lg-6 col-md-10">
          <h2 class="small">Discord compatible</h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
            We believe that to create a successful communication platform that
            users will migrate to either need a large user base or a unique
            selling point. We have both features by customizing the client
            however you like and being backwards compatible to discord, which
            means you can use the client to communicate with all friends who are
            still using discord.com and also connect to other Fosscord
            servers.
          </div>
          <!-- <div class="mb-30 mb-md-0 d-sm-flex align-items-center buttons">
            <NuxtLink
              to="/about/"
              id="button_"
              class="btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1"
              >Read More</NuxtLink
            >
          </div> -->
        </div>
        <div class="col-lg-6 col-md-12">
          <img src="../assets/images/sections/discord-compatible.svg"
            class="img-fluid rounded-3" />
        </div>
      </div>
    </div>
    <div class="container px-xl-0 container-feature" id="faq">
      <div class="row">
        <div class="col-lg-6 col-md-10">
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
            <h2 class="white small">Why develop Fosscord?</h2>
            <br />
            <ul>
              <li>Discord prohibits client modifications</li>
              <li>Fosscord is free and open source, as opposed to Discord.</li>
              <li>Discord is a private service, which introduces privacy concerns. Fosscord allows you to control the data on your instances.</li>
              <li>The Discord desktop client makes use of Electron, which is typically resource hungry</li>
            </ul>
          </div>
          <!-- <div class="mb-30 mb-md-0 d-sm-flex align-items-center buttons">
            <NuxtLink
              to="/about/"
              id="button_"
              class="btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1"
              >Read More</NuxtLink
            >
          </div> -->
        </div>
        <div class="col-lg-5 col-md-12">
          <img
            src="../assets/images/sections/faq.svg"
            class="img-fluid rounded-3"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-feature {
  margin: 7rem auto;
}

#contribute_text {
  padding-right: 9rem;
}

@media screen and (max-width: 600px) {
  #contribute_text {
    padding-right: 0;
  }

  .container-feature img {
    margin-top: 2rem;
  }

  #faq {
    text-align: justify;
  }

  #button-docs {
    margin-bottom: 0.5rem;
  }
}

/* .buttons {
  display: flex;
  justify-content: right;
} */

#button-docs {
  margin-right: 0.5rem;
}

ul {
  line-height: 1.5;
  margin-top: 20px;
  margin-bottom: 20px;
}

ul > li {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
