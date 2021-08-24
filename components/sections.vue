<template>
  <section>
    <div class="container px-xl-0 container-feature">
      <div class="row" id="concept_main_container">
        <div class="col-lg-6 col-md-10" id="concept_second_container">
          <h2 class="small">About Fosscord</h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
            Fosscord is a free and open source software compatible with
            <a href="https://discord.com">Discord</a>. It's a chat, voice and
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
            Currently fosscord is still in development and we can't say when we
            will be able to release fosscord completely. In total,
            <span class="fg-fosscord">20</span> developers are working on this
            project. Feel free to check out the
            <a href="https://docs.fosscord.com">documentation</a> or the
            <a href="https://github.com/fosscord">GitHub repositories</a>.
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
            change nearly every default value in the settings without changing
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
            We believe that anyone should have the option to host their own
            instance without any restrictions. That’s why we provide an easy
            <a href="https://github.com/fosscord/fosscord-server/releases"
              >one-click server installer</a
            >
            to have full control over the instance and its data.
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
            src="../assets/images/sections/selfhostable.svg"
            class="img-fluid rounded-3"
          />
        </div>
      </div>
    </div>
    <div class="container px-xl-0 container-feature">
      <div class="row">
        <div class="col-lg-6 col-md-10">
          <h2 class="small">Decentralized</h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
            We believe that a central approach leads to a single point of
            failure and abuse of power. That’s why Fosscord is decentralized and
            the client is able to connect to multiple servers simultaneously.
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
          <h2 class="small">Free Open Source</h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
            We believe that the best way to make a software is to make it follow
            GPL principles and let everyone contribute to it. Additionally we
            represent a libre position so that anyone can do whatever they want
            with Fosscord as long as you publish all changes under the
            <a href="https://www.gnu.org/licenses/agpl-3.0.html"
              >GNU Affero General Public License v3.0</a
            >.
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
            src="../assets/images/sections/foss.svg"
            class="img-fluid rounded-3"
          />
        </div>
      </div>
    </div>
    <div class="container px-xl-0 container-feature">
      <div class="row">
        <div class="col-lg-6 col-md-10">
          <h2 class="small">Encrypted</h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
            We believe that communication should be private and no third party
            should be able to intercept and read the content of it. That’s why
            Fosscord is end-to-end encrypted based on the concept “don’t trust
            the server”. (Currently work in progress)
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
            We believe publicly audited and hosted FOSS software is the future
            in terms of security. That's why we choose this approach to create a
            transparent foundation between the user and the project.
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
            We believe data privacy is a human right, therefore the user needs
            to opt into data collection and analytics via the client settings
            and it's disabled by default.
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
            src="../assets/images/sections/privacy.svg"
            class="img-fluid rounded-3"
          />
        </div>
      </div>
    </div>
    <div class="container px-xl-0 container-feature">
      <div class="row left">
        <div class="col-lg-6 col-md-10">
          <h2 class="small">Extendable</h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
            We believe anyone should be able to extend their clients with
            features that we currently do not provide. That’s why we integrate a
            secure and cross-platform plugin system.
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
            src="../assets/images/sections/extendable.svg"
            class="img-fluid rounded-3"
          />
        </div>
      </div>
    </div>
    <div class="container px-xl-0 container-feature">
      <div class="row">
        <div class="col-lg-6 col-md-10">
          <h2 class="small">Themeable</h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
            We believe anyone should be able to adjust the look and feel of
            their client. That’s why we integrate a cross-platform theme system.
            Additionally we provide a design editor for easier creation of
            client themes.
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
            src="../assets/images/sections/themeable.svg"
            class="img-fluid rounded-3"
          />
        </div>
      </div>
    </div>
    <div class="container px-xl-0 container-feature">
      <div class="row left">
        <div class="col-lg-6 col-md-10">
          <h2 class="small">Discord compatible</h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
            We believe that to create a successful communication platform that
            users will migrate to you either need a large user base or a unique
            selling point. We have both features by customizing the client
            however you like and being backwards compatible to discord, which
            means you can use the client to communicate with all friends who are
            "still" using discord.com and also connect to other Fosscord
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
          <img
            src="../assets/images/sections/discord-compatible.svg"
            class="img-fluid rounded-3"
          />
        </div>
      </div>
    </div>
    <div class="container px-xl-0 container-feature" id="faq">
      <div class="row">
        <div class="col-lg-6 col-md-10">
          <h2 class="small">FAQ</h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
            <h4 class="white">Why did you develop Fosscord?</h4>
            <br />
            Personal opinion:
            <ul>
              <li>
                Discord abuses their power and censors things they don't like
              </li>
              <li>Discord prohibits client modifications</li>
              <li>Discord being slow in development of new features</li>
              <li>Discord not listening to their community</li>
              <li>
                Free and open source version that you can have a look, trust and
                adjust
              </li>
              <li>
                Self host your own server to have complete control over it and
                its data
              </li>
              <li>
                Add additional features like end to end encryption and a secure
                and cross platform plugin/theme system
              </li>
              <li>
                Discord making use of Electron and other bloated RAM hungry
                technologies
              </li>
            </ul>
            <h4 class="white">How do you make money?</h4>
            <ul>
              <li>
                We don’t, we are volunteers providing a better and secure way of
                communication and are supported by donations.
              </li>
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
