import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const userTheme = browser && Boolean(localStorage.getItem('color-scheme'));

export const theme = writable(userTheme);

export function toggleTheme() {
	theme.update((currentTheme) => {
		const newTheme = currentTheme ? false : true;
		document.body.classList.toggle('dark');
		localStorage.setItem('color-scheme', JSON.stringify(newTheme));
		return newTheme;
	});
}
