<template>
  <section id="about_section">
    <div class="container px-xl-0">
      <div class="row mt-10">
        <div class="col-lg-12 col-md-12 about_container">
          <div style="width: 100%">
            <h2 class="small">About:</h2>
            <div
              class="mt-1 mb-35 f-22 color-heading text-adaptive description"
            >
              <ul>
                <li>Discord-compatible</li>
                <li>Selfhostable</li>
                <li>Free Open Source Software</li>
                <li>Configurable</li>
                <li>Secure</li>
                <li>Decentralized</li>
                <li>Extendable</li>
                <li>Themeable</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-10">
            <img
              src="../assets/images/browsing.svg"
              class="img-fluid rounded-3"
            />
          </div>
        </div>
        <div class="col-lg-12 col-md-12">
          <h2 class="small" id="about_head">
            Why backwards compatible to Discord?
          </h2>
          <div class="mt-1 mb-35 f-22 color-heading text-adaptive description">
            <ul>
              <li>
                Benefit from the large user base of discord, thus more users,
                making the switch easier for new users & keeping workflows
                intact
              </li>
              <li>
                No disadvantage for the users who use fosscord, so that they can
                still communicate with all their peers who use discord
              </li>
              <li>
                Discord has already built a great and stable protocol (don't
                reinvent the wheel)
              </li>
              <li>
                The community can extend and customize their clients and servers
                by selfhosting them and developing and installing addons
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row mt-10">
        <div class="col-lg-12 col-md-12">
          <h2 class="small" id="about_head">Philosophy in Detail:</h2>
          <div class="mt-1 mb-35 f-22 color-heading text-adaptive description">
            Fosscord aims to be a full one-on-one clone of Discord, adding more
            features that can be used as a replacement for the official client
            and still connect to discord.com and host private Fosscord server
            instances.<br /><br />

            Fosscord aims to give the best possible user experience, while being
            backwards compatible to Discord's features and adding new
            ones/improving old ones while maintaining the user privacy with
            end-to-end encryption support.<br /><br />
            The client can connect to multiple server instances without the need
            to open it multiple times.<br />
            The client will be extensible through a secure Plugin and Theme
            System with own store. The server will be extensible through bots,
            just like discord without the need to change anything except the api
            endpoint.
            <br /><br />
            The project is open source so everyone can have a look what's going
            on under the hood and can be maintained and expanded by the
            community. Everything is configurable in the server config and
            everyone can add their own features, so that it is not opinionated.
            <br /><br />
            <img
              src="https://docs.fosscord.com/img/architecture.png"
              width="100%"
            />
            <a
              class="about_links"
              target="_blank"
              href="https://docs.fosscord.com/resources/"
              >Fosscord contribution ressources</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media screen and (max-width: 600px) {
  #about_section {
    text-align: left;
  }
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
