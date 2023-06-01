import { writable } from 'svelte/store';

const userTheme = typeof window !== 'undefined' && Boolean(localStorage.getItem('color-scheme'));

export const theme = writable(userTheme);

export function toggleTheme() {
	theme.update((currentTheme) => {
		const newTheme = !currentTheme;
		document.body.classList.toggle('dark', newTheme);
		localStorage.setItem('color-scheme', newTheme);
		return newTheme;
	});
}
