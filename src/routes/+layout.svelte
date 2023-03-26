<script>
	import '../app.css';
</script>

<div class="navbar bg-transparent">
	<div class="navbar-start">
		<div class="dropdown">
			<span class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</span>
			<ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
				<li><a href="/">Item 1</a></li>
				<li>
					<a href="/" class="justify-between">
						Parent
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg
						>
					</a>
					<ul class="p-2">
						<li><a href="/">Submenu 1</a></li>
						<li><a href="/">Submenu 2</a></li>
					</ul>
				</li>
				<li><a href="/">Item 3</a></li>
			</ul>
		</div>
		<a href="/" class="btn btn-ghost normal-case text-xl">
			<img
				src="https://raw.githubusercontent.com/fosscord/fosscord/master/assets-rebrand/svg/Fosscord-Wordmark-Gradient.svg"
				width="w-16"
				class="max-h-7"
				alt="FOSSCORD"
			/></a
		>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/">Item 1</a></li>
			<li>
				<a href="/">
					Parent
					<svg
						class="fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
					>
				</a>
				<ul class="p-2">
					<li><a href="/">Submenu 1</a></li>
					<li><a href="/">Submenu 2</a></li>
				</ul>
			</li>
			<li><a href="/">Item 3</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<a href="/" class="btn btn-primary">Sign In</a>
	</div>
</div>

<slot />
