<template>
  <div>
    <div id="hero_container">
      <section id="hero" class="container">
        <h2 id="main_header">
          Fosscord
        </h2>
        <span id="main_header_sub">For better and secure communication</span>
        <div style="margin-top: 2rem">
          <a
            id="open_demo"
            href="https://dev.fosscord.com"
            class="btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1"
            >Open Demo</a
          >
        </div>
        <!--
        <div id="features">
          <span>Discord-compatible</span>
          <span>Free Open Source</span>
          <span>Decentralized</span>
          <span>Configurable</span>
          <span>Selfhostable</span>
          <span>Extendable</span>
          <span>Themeable</span>
          <span>Secure</span>
        </div>
           <img id="mockup" src="~@/assets/images/discord-mockup.svg" /> -->
      </section>
    </div>

    <div id="waves"></div>
  </div>
</template>

<style>
#mockup  {
  height: 33vh;
  margin-top: 4rem;
}

#open_demo {
  z-index: 1;
  position: relative;
}

#waves {
  display: none;
  height: 25vh;
  width: 100vw;
  background-color: var(--background-color-accent);
  -webkit-mask-image: url("~@/assets/images/waves.svg");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: cover;
  mask-image: url("~@/assets/images/waves.svg");
  mask-position: center;
  mask-size: cover;
  mask-repeat: no-repeat;
  margin-top: -13rem;
}

#features {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  z-index: 1;
  margin-top: 1rem;
}

#features > * {
  margin: 0.25rem 0.25rem;
  background: white;
  color: var(--background-color);
  width: fit-content;
  height: 35px;
  font-size: 1rem;
  border-radius: 50px;
  font-weight: 700;
  padding: 5px 8px;
  line-height: 1.5;
}

#hero_container {
  height: 100%;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  background: var(--background-color);
  color: white;
}

#hero {
  height: 100%;
  flex-grow: 1;
  text-align: center;
  display: flex;
  margin-top: 9rem;
  flex-direction: column;
}

#hero_container #nav .link {
  color: white;
}

@media screen and (max-width: 600px) {
  #hero {
    padding-top: 0;
  }

  #waves {
    visibility: hidden;
  }

  #features > * {
    width: 160px;
    font-size: 0.9rem;
    height: 27px;
    padding: 3px 5px;
  }
}
</style>
