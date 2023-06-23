type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'pt-br') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
}

export function handleScroll(navbar: HTMLElement, fab: HTMLDivElement) {
	let lastScrollTop = 0;

	window.addEventListener('scroll', () => {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const isScrollingDown = scrollTop > lastScrollTop;

		navbar.style.animationTimingFunction = 'cubic-bezier(0.291, 0.281, 0, 1.2)';
		fab.style.animationTimingFunction = 'cubic-bezier(0.291, 0.281, 0, 1.2)';

		navbar.style.bottom = isScrollingDown ? '-80px' : '0';
		fab.style.bottom = isScrollingDown ? '1rem' : '6rem';

		lastScrollTop = scrollTop;
	});
}
