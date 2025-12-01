<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import { AppBar } from "@skeletonlabs/skeleton-svelte";
	import ThemeSwitcher from "../components/ThemeSwitcher.svelte";
	import SideBar from "../components/SideBar.svelte";

	let { children, session } = $props();
	
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<header>
		<AppBar>
			<AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">
				<AppBar.Lead>
					<SideBar />
				</AppBar.Lead>
				<AppBar.Headline>
					<p class="text-2xl">Viktor</p>
				</AppBar.Headline>
				<AppBar.Trail>
					<ThemeSwitcher />
				</AppBar.Trail>
			</AppBar.Toolbar>
		</AppBar>
	</header>
	<!-- Main Content -->
	<main class="p-4">
		{@render children()}
	</main>

	<footer>FOOTER</footer>
</div>
