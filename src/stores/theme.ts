import { writable } from "svelte/store";
export const theme = writable();

if (typeof localStorage !== "undefined") {
	theme.subscribe((value) => (localStorage.theme = JSON.stringify(value)));
}
