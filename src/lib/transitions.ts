import type { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';
interface transitionOptions {
	delay?: number;
	duration?: number;
	easing?: typeof cubicOut;
}

type sharedAxisOptions =
	| {
			direction: 'X' | 'Y';
			/**
			 * true if this element is on the top/left of things
			 * if it's first, then use transition: and set it to true
			 * if it's last, then use transition: and set it to false
			 * if it's in between, use separate in: and out: statements:
			 * > set it to false when it's interacting with the left side, and true when interacting with its right
			 * > in order to implement this, try something like using a prevPage variable:
			 * > ```
			 * > {:else if page == 1}
			 * > <div
			 * >   in:sharedAxisTransition={{
			 * >     direction: "X",
			 * >     rightSeam: prevPage > 1, (if we're transitioning from a page on the right, rightseam is true)
			 * >   }}
			 * >   out:sharedAxisTransition={{
			 * >     direction: "X",
			 * >     rightSeam: page > 1, (if we're transitioning to a page on the right, rightseam is true)
			 * >   }}
			 * > >
			 * > ```
			 * i went insane over figuring this out :)
			 */
			rightSeam: boolean;
	  }
	| {
			direction: 'Z';
			leaving: boolean /* set to true in out:, set to false in in: */;
	  };

const createBezierLUT = (points: [number, number][], pointCount = 100) => {
	const lut = [];
	for (let t = 0; t < 1; t += 1 / pointCount) {
		const a = (1 - t) * (1 - t) * (1 - t);
		const b = (1 - t) * (1 - t) * t;
		const c = (1 - t) * t * t;
		const d = t * t * t;
		const x = a * points[0][0] + 3 * b * points[1][0] + 3 * c * points[2][0] + d * points[3][0];
		const y = a * points[0][1] + 3 * b * points[1][1] + 3 * c * points[2][1] + d * points[3][1];
		lut.push([x, y]);
	}
	return lut;
};

const createEase = (lutOptions: [number, number][][]) => {
	let lut: ReturnType<typeof createBezierLUT>;
	return (t: number) => {
		if (!lut) lut = lutOptions.flatMap((args) => createBezierLUT(args));
		const closestPoint = lut.find((p) => p[0] >= t);
		const closestY = closestPoint ? closestPoint[1] : 1;
		return closestY;
	};
};

export const easeEmphasized = createEase([
	[
		[0, 0],
		[0.05, 0],
		[0.133, 0.06],
		[0.166, 0.4]
	],
	[
		[0.166, 0.4],
		[0.208, 0.82],
		[0.25, 1],
		[1, 1]
	]
]);

export const easeEmphasizedDecel = createEase([
	[
		[0, 0],
		[0.05, 0.7],
		[0.1, 1],
		[1, 1]
	]
]);
export const easeEmphasizedAccel = createEase([
	[
		[0, 0],
		[0.3, 0],
		[0.8, 0.15],
		[1, 1]
	]
]);

export const sharedAxisTransition = (
	node: Element,
	options: transitionOptions & sharedAxisOptions
) => {
	return {
		delay: options.delay,
		duration: options.duration || 500,
		easing: options.easing || easeEmphasized,
		css: (t: number, u: number) => {
			const opacity = (t - 0.35) * (1 / 0.35);
			if (options.direction === 'Z') {
				const factor = options.leaving ? u * 0.1 + 1 : t * 0.2 + 0.8;
				let css = `transform: scale(${factor.toFixed(3)});`;
				if (!options.leaving) css += `opacity: ${opacity.toFixed(3)};`;
				return css;
			}
			const factor = u * (options.rightSeam ? -30 : 30);
			return (
				`transform: translate${options.direction}(${factor.toFixed(3)}px);` +
				`opacity: ${opacity.toFixed(3)}`
			);
		}
	};
};

function styleToString(style: StyleObject): string {
	return Object.entries(style)
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		.filter(([_, value]) => value !== undefined)
		.map(([key, value]) => `${key}:${value}`)
		.join(';');
}

type StyleObject = Record<string, number | string | undefined>;

const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
	const [minA, maxA] = scaleA;
	const [minB, maxB] = scaleB;

	const percentage = (valueA - minA) / (maxA - minA);
	const valueB = percentage * (maxB - minB) + minB;

	return valueB;
};

interface FlyAndScaleOptions {
	y: number;
	start: number;
	duration?: number;
}

export function flyAndScale(node: HTMLElement, options: FlyAndScaleOptions) {
	const { transform } = getComputedStyle(node);

	return {
		duration: options.duration ?? 150,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [options.y, 0]);
			const scale = scaleConversion(t, [0, 1], [options.start, 1]);

			return styleToString({
				transform: `${transform !== 'none' ? transform : ''} translate3d(0, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: easeEmphasized
	} as TransitionConfig;
};
