type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'pt-br') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
}

export function handleScroll(nav: HTMLElement) {
	let lastScrollTop = 0;
	let ticking = false;

	const animationTimingFunction = 'cubic-bezier(0.291, 0.281, 0, 1.2)';
	const initialBottomValue = '0px 0px';
	const scrolledDownBottomValue = '0px 80px';

	const navbar = nav;
	navbar.style.animationTimingFunction = animationTimingFunction;
	function updateScroll() {
		const scrollTop = window.scrollY || document.documentElement.scrollTop;
		const isScrollingDown = scrollTop > lastScrollTop;

		navbar.style.translate = isScrollingDown ? scrolledDownBottomValue : initialBottomValue;

		lastScrollTop = scrollTop;
		ticking = false;
	}

	function requestTick() {
		if (!ticking) {
			requestAnimationFrame(updateScroll);
			ticking = true;
		}
	}

	window.addEventListener('scroll', requestTick);
}
