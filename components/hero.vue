<template>
  <div>
    <div id="hero_container">
      <navbar />
      <section id="hero" class="container">
        <h2 id="main_header">
          Fosscord for better and secure communication
        </h2>
        <div style="margin-top: 2rem">
          <a
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

#waves {
  height: 25vh;
  width: 100vw;
  background-image: url("~@/assets/images/waves.svg");
  background-position: center;
  background-size: cover;
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
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  background: var(--background-color);
  color: white;
}

#hero_container .link {
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

@media screen and (max-width: 600px) {
  #hero {
    padding-top: 0;
  }

  #features > * {
    width: 160px;
    font-size: 0.9rem;
    height: 27px;
    padding: 3px 5px;
  }
}
</style>
