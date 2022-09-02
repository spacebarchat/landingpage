<template>
	<div style="padding-top: 5rem;">
		<h1 style="text-align: center;">Features</h1>
		<div class="features-wrapper">
			<div class="features">
				<div class="feature done">
					<h3>Free and Open Source</h3>
					<p>
						We believe the best way to make software is through easy and open public contribution.
						Fosscord is 100% open source, and is licensed under the
						<a href="https://www.gnu.org/licenses/agpl-3.0.html">GNU Affero General Public License v3.0</a>
					</p>
					<a class="moreInfo" href="https://github.com/Fosscord/fosscord-server">Github</a>
				</div>

				<div class="feature done">
					<h3>Configurable</h3>
					<p>
						Fosscord has a large number of configurable values to determine every aspect of how your
						instance operates. If an option you need doesn't exist, you do always have the option to simply
						edit the source too!
					</p>
					<a class="moreInfo" href="https://docs.fosscord.com/server/configuration/">Config documentation</a>
				</div>

				<div class="feature done">
					<h3>Many supported DB engines</h3>
					<p>
						Instance owners have complete control over which DBMS software they use as a backend to
						Fosscord.
					</p>
					<a class="moreInfo" href="https://docs.fosscord.com/server/database/">Database documentation</a>
				</div>

				<div class="feature done">
					<h3>Separable backend components</h3>
					<p>
						Fosscord-server is made up of a few different components: api, gateway, cdn, webrtc. Each can be
						run as separate services, giving instance owners more control over how their system operates. If
						you wish, you can run each on separate machines, behind load balances with many instances of
						each component.
					</p>
				</div>

				<div class="feature incomplete">
					<h3>E2E Encryption</h3>
					<p>We believe communication should be private. End to End Encryption is a planned, core feature of
						Fosscord, and will allow users to truly trust that their privacy, and private information is
						kept from prying eyes. It should be noted that, without client support for this feature, you
						will be unable to send/receive encrypted messages.
					</p>
					<a class="moreInfo" href="https://github.com/fosscord/fosscord-server/issues/322">Tracker</a>
				</div>

				<div class="feature incomplete">
					<h3>Discord.com Compatibility</h3>
					<p>Fosscord aims to be 100% compatible with existing discord.com clients, bots, and other services,
						as well as any that appear in the future. This allows a smooth transition from Discord.com to a
						Fosscord instance. With this goal also comes complete feature parity between Discord.com and
						Fosscord. We aim to have all Discord.com features implemented within Fosscord, as well as
						additional
						features and configurability given to our users.</p>
				</div>

				<div class="feature incomplete">
					<h3>Server Plugins</h3>
					<p>Through Fosscord server plugins, instance owners will be able to easily extend and add new
						features to their instances.
					</p>
					<a class="moreInfo" href="https://github.com/fosscord/fosscord-server/pull/837">Tracker</a>
				</div>

				<div class="feature incomplete">
					<h3>Voice and Video</h3>
					<p>Voice and Video support on Fosscord is in active development, but may take a while longer.</p>
					<a class="moreInfo" href="https://github.com/fosscord/fosscord-server/pull/472">Tracker</a>
				</div>

				<div class="feature">
					<h3>Much more!</h3>
					<p>This is by <i>no</i> means a complete list of features, planned or completed, that the team
						behind
						Fosscord wishes to implement. We already have a large number of features implemented and working
						using existing discord.com clients, and have no plans on stopping.</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.features {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}

.feature {
	width: max(30%, 500px);
	padding: 30px;
	margin: 30px;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 5px;
	position: relative;
	display: flex;
	flex-direction: column;
}

.feature .moreInfo {
	margin-top: auto;
}

.done::after {
	content: "\2713";
	color: #db182f;
	font-size: 5rem;
	font-weight: bolder;
	position: absolute;
	top: 0rem;
	right: 2rem;
	transform: rotate(20deg);
}

.incomplete::after {
	content: "*";
	color: #db182f;
	font-size: 7.5rem;
	font-weight: bolder;
	position: absolute;
	top: 1rem;
	right: 2.5rem;
	transform: rotate(20deg);
}
</style>
