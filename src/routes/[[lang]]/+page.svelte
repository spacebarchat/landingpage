<script>
	import { LL } from '$lib/i18n/i18n-svelte';
</script>

<svelte:head>
	<title>{$LL.PROJECT_NAME()}</title>
</svelte:head>

<div class="container">
	<div class="flex-1">
		<h1>{$LL.MAIN_PAGE.PAGE_HEADER.BIG_MARKETING_TEXT()}</h1>
		<p>{$LL.MAIN_PAGE.PAGE_HEADER.SMALL_MARKETING_TEXT()}</p>
		<button type="button" class="btn variant-filled-primary">{$LL.COMMON.GET_STARTED()}</button>
	</div>
</div>
