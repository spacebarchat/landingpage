<template>
  <section id="contribute">
    <div class="container px-xl-0">
      <div class="row" id="contribution_container">
        <div class="col-lg-6 col-md-12">
          <img
            src="../assets/images/version_control.svg"
            class="img-fluid rounded-3"
          />
        </div>
        <div class="col-lg-6 col-md-10" id="contribute_text">
          <h2 class="small">Contribute now!</h2>
          <div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
            Currently fosscord is still in development and we can't say when we
            will be able to release fosscord completely. In total
            <span class="fg-fosscord">20</span> developers are working on this
            project. Feel free to check out the documentation or the GitHub
            repositories.
          </div>
          <a
            href="https://docs.fosscord.com/contributing.html"
            class="btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1"
            id="button_"
            >Contribute</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#contribute_text {
  padding-right: 9rem;
}

@media screen and (max-width: 600px) {
  #contribute_text {
    padding-right: 0;
  }
}
</style>
