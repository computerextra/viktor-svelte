import { writable } from "svelte/store";
export const mode = writable();

if (typeof localStorage !== "undefined") {
	mode.subscribe((value) => (localStorage.mode = JSON.stringify(value)));
}
