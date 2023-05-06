<template>
	<div class="container px-xl-0 container-feature" id="contribute">
		<div class="row" id="contribution_container">
			<div class="col-lg-6 col-md-12">
				<img src="../assets/images/sections/version_control.svg" class="img-fluid rounded-3" />
			</div>
			<div class="col-lg-6 col-md-10" id="contribute_text">
				<h2 class="small">Contribute now!</h2>
				<div class="mt-25 mb-35 f-22 color-heading text-adaptive description">
					Currently, Spacebar is in development, with <span class="fg-fosscord">30</span> active members.
					If Spacebar is interesting to you, we heavily recommend checking out any of the
					<a href="/instances">community instances</a>,
					the <a href="https://docs.spacebar.chat">documentation</a> or the
					<a href="https://github.com/spacebarchat">GitHub repositories</a>.
					We would highly appreciate any and all support.
				</div>
				<a href="https://github.com/spacebarchat/spacebarchat/issues/10"
					class="btn bg-fosscord mb-20 mb-sm-0 mr-15 action-1" id="button_">Contribute</a>
			</div>
		</div>
	</div>
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

ul>li {
	margin-top: 10px;
	margin-bottom: 10px;
}
</style>
