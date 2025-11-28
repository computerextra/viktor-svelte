<script lang="ts">
	import { Popover, Portal, SegmentedControl } from "@skeletonlabs/skeleton-svelte";
	import { Computer, Moon, Palette, Sun } from "lucide-svelte";

	let activeMode = $state("system");
	$effect(() => {
		const mode = localStorage.getItem("mode");
		if (mode == null) {
			setMode("system");
		} else {
			setMode(mode);
		}
		const theme = localStorage.getItem("theme");
		if (theme == null) {
			setTheme("cerberus");
		} else {
			setTheme(theme);
		}
	});

	function setMode(mode: string) {
		localStorage.setItem("mode", mode);
		if (mode == "system") {
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				document.documentElement.setAttribute("data-mode", "dark");
			} else {
				document.documentElement.setAttribute("data-mode", "light");
			}
		} else {
			document.documentElement.setAttribute("data-mode", mode);
		}
		activeMode = mode;
	}

	function setTheme(theme: string) {
		localStorage.setItem("theme", theme);
		document.documentElement.setAttribute("data-theme", theme);
	}

	const themes: { name: string; icon: string }[] = [
		{ name: "catppuccin", icon: "🐈" },
		{ name: "cerberus", icon: "🐺" },
		{ name: "concord", icon: "🤖" },
		{ name: "crimson", icon: "🔴" },
		{ name: "fennec", icon: "🦊" },
		{ name: "hamlindigo", icon: "👔" },
		{ name: "legacy", icon: "💀" },
		{ name: "mint", icon: "🍃" },
		{ name: "modern", icon: "🌸" },
		{ name: "mona", icon: "🐙" },
		{ name: "nosh", icon: "🥙" },
		{ name: "nouveau", icon: "👑" },
		{ name: "pine", icon: "🌲" },
		{ name: "reign", icon: "📒" },
		{ name: "rocket", icon: "🚀" },
		{ name: "rose", icon: "🌷" },
		{ name: "sahara", icon: "🏜️" },
		{ name: "seafoam", icon: "🧜‍♀️" },
		{ name: "terminus", icon: "🌑" },
		{ name: "vintage", icon: "📺" },
		{ name: "vox", icon: "👾" },
		{ name: "wintry", icon: "🌨️" }
	];
</script>

<Popover>
	<Popover.Trigger class="btn-icon hover:preset-tonal">
		<Palette class="size-6" />
	</Popover.Trigger>
	<Portal>
		<Popover.Positioner>
			<Popover.Content
				class="card bg-surface-50-950 border-surface-200-800 p-2 space-y-4 shadow-xl max-h-[75vh] lg:max-h-none overflow-y-auto"
			>
				<SegmentedControl
					defaultValue={activeMode}
					onValueChange={(e) => setMode(e.value ?? "system")}
				>
					<SegmentedControl.Control>
						<SegmentedControl.Indicator />
						<SegmentedControl.Item value="system" title="system" aria-label="system">
							<SegmentedControl.ItemText>
								<span class="flex items-center gap-1">
									<Computer class="size-4" /> System</span
								></SegmentedControl.ItemText
							>
							<SegmentedControl.ItemHiddenInput />
						</SegmentedControl.Item>
						<SegmentedControl.Item value="light" title="light" aria-label="light">
							<SegmentedControl.ItemText>
								<span class="flex items-center gap-1">
									<Sun class="size-4" /> Light
								</span>
							</SegmentedControl.ItemText>
							<SegmentedControl.ItemHiddenInput />
						</SegmentedControl.Item>
						<SegmentedControl.Item value="dark" title="dark" aria-label="dark">
							<SegmentedControl.ItemText>
								<span class="flex items-center gap-1">
									<Moon class="size-4" />Dark</span
								></SegmentedControl.ItemText
							>
							<SegmentedControl.ItemHiddenInput />
						</SegmentedControl.Item>
					</SegmentedControl.Control>
				</SegmentedControl>

				<div class="space-y-4">
					<div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
						{#each themes as theme}
							<button
								data-theme={theme.name}
								type="button"
								class="bg-surface-50-950 p-3 preset-outlined-surface-100-900 hover:preset-outlined-surface-950-50 rounded-md grid grid-cols-[auto_1fr_auto] items-center gap-4"
								onclick={() => setTheme(theme.name)}
							>
								<span>{theme.icon}</span>
								<h3 class="text-sm capitalize font-bold text-left">{theme.name}</h3>
								<div class="flex justify-center items-center -space-x-1.5">
									<div
										class="aspect-square w-4 bg-primary-500 border border-black/10 rounded-full"
									></div>
									<div
										class="aspect-square w-4 bg-secondary-500 border border-black/10 rounded-full"
									></div>
									<div
										class="aspect-square w-4 bg-tertiary-500 border border-black/10 rounded-full"
									></div>
								</div>
							</button>
						{/each}
					</div>
				</div>
			</Popover.Content>
		</Popover.Positioner>
	</Portal>
</Popover>
