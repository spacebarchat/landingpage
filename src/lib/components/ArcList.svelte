<script lang="ts">
	export let contentList: string[];
	export let className: string = '';
	let marginListPerIndex: string[] = [];

	function defineWhatToDo() {
		const middle: number = Math.floor(contentList.length / 2);

		for (let x = 0; x < contentList.length; x++) {
			let concat: string;
			if (x < middle) {
				concat = `${x}rem`;
			} else if (x > middle) {
				concat = `${middle - (x - middle)}rem`;
			} else {
				concat = `${middle}rem`;
			}
			marginListPerIndex.push(concat);
		}

		console.log(marginListPerIndex);
	}

	defineWhatToDo();
</script>

<ul class="arc-list {className}">
	{#each contentList as content, i}
		<li class="ml-[calc({i}rem*5)]" style="margin-left: {marginListPerIndex[i]}">{content}</li>
	{/each}
</ul>
