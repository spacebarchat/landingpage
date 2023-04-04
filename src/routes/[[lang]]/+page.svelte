<script lang="ts">
	import ArcList from '$lib/components/ArcList.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Icon from '@iconify/svelte';
</script>

<Hero />

<section class="page-section bg-gray-800">
	<div class="section-content text-center">
		<h2 class="section-title">Better than the rest</h2>
		<p>
			Honestly, Spacebar <span class="line-through">is</span> will be simply better than anything else.
			For real.
		</p>
		<div class="flex flex-row gap-10 justify-center mt-10">
			<div class="card w-96 bg-base-100 shadow-xl">
				<figure class="px-5 pt-5">
					<Icon icon="fa6-solid:user-lock" width="4rem" />
				</figure>
				<div class="card-body items-center text-center">
					<h2 class="card-title">E2EE</h2>
					<p>Demo Text</p>
				</div>
			</div>
			<div class="card w-96 bg-base-100 shadow-xl">
				<figure class="px-5 pt-5">
					<Icon icon="fa6-solid:user-lock" width="4rem" />
				</figure>
				<div class="card-body items-center text-center">
					<h2 class="card-title">E2EE</h2>
					<p>Demo Text</p>
				</div>
			</div>
			<div class="card w-96 bg-base-100 shadow-xl">
				<figure class="px-5 pt-5">
					<Icon icon="fa6-solid:user-lock" width="4rem" />
				</figure>
				<div class="card-body items-center text-center">
					<h2 class="card-title">E2EE</h2>
					<p>Demo Text</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="page-section bg-primary">
	<div class="section-content text-center">
		<h2 class="section-title">This is a test.</h2>

		<ArcList
			contentList={['Secure', 'Scalable', 'Federated', 'Open-Source', 'Free']}
			className="h-80"
		/>
	</div>
</section>
