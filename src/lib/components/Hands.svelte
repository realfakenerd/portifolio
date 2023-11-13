<script lang="ts">
	import { animate, spring, timeline } from 'motion';

	function animation(_: Element) {
		timeline(
			[
				[
					'#arrow',
					{
						offsetDistance: ['0%', '25.891651%', null, '100%']
					},
					{
						easing: [
							[0.25, 1, 0.25, 1],
							[0.4, 0, 0.2, 1]
						],
						offset: [0, 0.16, 0.2, 0.83, 1],
						duration: 3
					}
				],
				[
					'#blackhole',
					{
						scale: [null, 1]
					},
					{
						duration: 1,
						at: 0.5,
						easing: spring({ mass: 0.8 })
					}
				],
				[
					'#hand',
					{
						opacity: [0, 1],
						scale: [0, 1]
					},
					{
						duration: 1,
						at: '<',
						easing: spring({ mass: 0.5 })
					}
				],
				[
					'#browser',
					{
						opacity: [0, 1],
						scale: [0, 1]
					},
					{
						duration: 1,
						at: '<',
						easing: [[0.4, 0, 0.2, 1]],
						scale: {
							easing: [[0.4, 0, 0.2, 1.2]]
						}
					}
				]
			],
			{
				defaultOptions: { allowWebkitAcceleration: true }
			}
		);

		animate(
			'#browser',
			{
				y: [10, -10]
			},
			{
				duration: 2,
				delay: 0.1,
				easing: [0.85, 0, 0.15, 1],
				direction: 'alternate',
				repeat: Infinity
			}
		);
	}
</script>

<svg
	use:animation
	xmlns="http://www.w3.org/2000/svg"
	width="212"
	height="361"
	fill="none"
	shape-rendering="geometricPrecision"
	text-rendering="geometricPrecision"
>
	<g class="phone">
		<path
			fill="#D9D9D9"
			d="M12.899 297.942c.618-10.343 9.215-18.396 19.575-18.338l139.927.788c10.612.06 19.228 8.594 19.388 19.205L192 313.5V327c0 10.77-8.73 19.5-19.5 19.5H30.699c-11.227 0-20.134-9.456-19.465-20.662l1.665-27.896Z"
			class="Rectangle 2"
		/>
		<path
			fill="#030003"
			d="M165 313.5c0 14.636-27.758 22.5-62 22.5-34.242 0-62-7.864-62-22.5S68.758 287 103 287c34.242 0 62 11.864 62 26.5Z"
			style="transform-origin: 50% 86%; transform: scale(0)"
			id="blackhole"
		/>
		<path
			fill="#194E66"
			d="M30.188 274.005c-4.845.502-10.093 1.507-11.81 2.411-3.431 1.808-7.973 6.832-9.487 10.549-3.432 8.54-5.148 43.906-2.826 57.871.807 4.923 1.615 6.631 4.44 9.243 1.919 1.708 5.148 3.718 7.37 4.32 6.156 1.909 106.184 3.416 137.575 2.11 14.131-.602 27.455-1.507 29.474-2.11 8.781-2.511 12.213-8.439 13.929-23.61 3.23-28.935-.505-51.139-9.387-56.665-4.24-2.612-15.098-4.624-22.466-4.624h-7v7.5h8.5c21.529 3.67 22.5 7 23.5 34.5-.807 19.592-1 23-9.297 26.925-4.542 1.708-131.015 2.612-149.79 1.004-13.525-1.205-16.048-2.21-18.975-8.238-2.524-4.923-2.438-18.691-1.817-30.643C15 285 18.5 281.5 36 280c5.949 0 124 1 124 1v-7.5s-124 0-129.812.505Z"
			class="Vector"
		/>
		<path
			fill="#053044"
			d="M42.32 354.5h-7.2a1.5 1.5 0 0 0 0 3h6.809a2 2 0 0 0 1.664-.891l.184-.276a.818.818 0 0 0 .095-.713 1.638 1.638 0 0 0-1.554-1.12Z"
			class="Vector 1"
		/>
		<path
			fill="#053044"
			d="M62.178 355H49.76a1.5 1.5 0 0 0 0 3h11.883c.52 0 1.02-.203 1.392-.565l.506-.491a.86.86 0 0 0 .166-1.011 1.72 1.72 0 0 0-1.53-.933Z"
			class="Vector 2"
		/>
		<path
			fill="#053044"
			d="M35 351.5c-12.4.4-19.167-1.833-21-3l-2.283-1.827a.94.94 0 0 1 .587-1.673h.09a2 2 0 0 1 1.11.336L16 347c4.8 2.4 10 2 19.5 2l40.923.499a.972.972 0 0 1 .132.009c3.52.489 54.42.324 79.819-.006.086-.001.164.009.248.024 1.947.348 11.991-.2 16.878-.526 2.833-.333 8.9-1.2 10.5-2 1.6-.8 2.333-.667 2.5-.5.333.333.8 1.2 0 2s-3 1.333-4 1.5c-10.4 1.2-19.333 1.833-22.5 2-18 1.2-63.167.5-83.5 0l-41.5-.5Z"
			class="Vector 3"
		/>
	</g>
	<g id="hand" style="opacity: 0; transform: scale(0); transform-origin: 50% 80%;">
		<path
			fill="#FBD1AF"
			d="m44.5 232.5 1 87.5C58 337 149 337 160 320l-3.5-107.5c9.2-8 25.833-25 33-32.5 21.6-18.4 20.333-30.667 17-34.5 4.4-7.2.5-13.333-2-15.5-8-9.6-27-5.333-35.5-2-8-7.2-21.333-1.333-27 2.5L60.5 173c-8.41-5.719-25.662-13.961-35.991-18.42-3.27-1.411-6.86-1.856-10.396-1.427l-.347.042a11.363 11.363 0 0 0-9.965 12.12 7.575 7.575 0 0 0 2.047 4.642L21 186c18.8 16.8 23.5 38 23.5 46.5Z"
			class="Vector 4"
		/>
		<path
			stroke="#F5B99B"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M122.5 153c2.02-.207 5.121-.189 9 .294m34 12.706a92.36 92.36 0 0 0-4-2.412m0 0c12.333-9.862 38.1-27.288 44.5-18.088m-44.5 18.088a87.407 87.407 0 0 0-15.5-6.935m0 0C161.5 145.268 193 126 200 127m-54 29.653c-5.461-1.823-10.413-2.849-14.5-3.359m0 0c11.333-8.431 32.2-23.194 37-24.794"
			class="Vector 5"
		/>
		<path
			stroke="#F5B99B"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M87 175s24.5-4 29.5 18.5m-25 30.5h8.5"
			class="Vector 6"
		/>
	</g>
	<g id="browser" style="opacity: 0; transform: scale(0); transform-origin: bottom">
		<g class="Browser" clip-path="url(#a)">
			<rect
				width="148.83"
				height="106.29"
				x="25"
				y="33.492"
				fill="#fff"
				rx="9"
				transform="rotate(-2.5 25 33.492)"
			/>
			<g class="Buttons">
				<circle
					cx="152.212"
					cy="35.647"
					r="1.5"
					fill="#469F8C"
					class="Green"
					transform="rotate(-.5 152.212 35.647)"
				/>
				<circle
					cx="159.33"
					cy="35.274"
					r="1.5"
					fill="#EDDE75"
					class="Warning"
					transform="rotate(-.5 159.33 35.274)"
				/>
				<circle
					cx="166.449"
					cy="34.901"
					r="1.5"
					fill="#B07363"
					class="Close"
					transform="rotate(-.5 166.449 34.9)"
				/>
			</g>
			<rect
				width="136.83"
				height="2"
				x="31.619"
				y="47.69"
				fill="#D9D9D9"
				class="Frame 1"
				rx="1"
				transform="rotate(-3 31.62 47.69)"
			/>
		</g>
	</g>
	<g
		id="arrow"
		style="translate: -182px -260px;offset-path:path('M 176.006 258.789 C 148.447 248.485 103.432 355.9 103 311.5 C 103.001 311.499 103 311.5 103 311.5 C 69.4401 193.07 274.691 295.512 135.414 98.8221');offset-rotate:0deg"
	>
		<path
			fill="#030003"
			d="M179.652 248.167c-.178-.902.853-1.546 1.585-.991l6.23 4.722a1 1 0 0 1-.074 1.645l-4.717 2.947a1 1 0 0 1-1.511-.654l-1.513-7.669Z"
			class="Polygon 1"
		/>
		<path
			fill="#030003"
			d="m184.828 252.917 3.312 5.003-1.668 1.104-3.312-5.003z"
			class="Rectangle 1"
		/>
	</g>
	<!-- <g id="stars">
			<g class="yellowstar">
				<path
					stroke="#FFCE02"
					stroke-linecap="round"
					stroke-width="3"
					d="M132.001 2v4"
					class="Line 1"
				/>
				<path
					stroke="#FFCE02"
					stroke-linecap="round"
					stroke-width="3"
					d="M133 6.04h3"
					class="Line 4"
				/>
				<path
					stroke="#FFCE02"
					stroke-linecap="round"
					stroke-width="3"
					d="M128 6.04h3"
					class="Line 5"
				/>
				<path
					stroke="#FFCE02"
					stroke-linecap="round"
					stroke-width="3"
					d="M132.001 7v3"
					class="Line 2"
				/>
			</g>
			<g class="rightwhitestar">
				<path
					stroke="#F0F0F0"
					stroke-linecap="round"
					stroke-width="3"
					d="M176.001 7v4"
					class="Line 1"
				/>
				<path
					stroke="#F0F0F0"
					stroke-linecap="round"
					stroke-width="3"
					d="M179 14h4"
					class="Line 4"
				/>
				<path
					stroke="#F0F0F0"
					stroke-linecap="round"
					stroke-width="3"
					d="M169 14.04h4"
					class="Line 5"
				/>
				<path
					stroke="#F0F0F0"
					stroke-linecap="round"
					stroke-width="3"
					d="M176.001 17v4"
					class="Line 2"
				/>
			</g>
			<g class="pinkstar" style="translate:-160px 70px;offset-path: path('M87.506963,43.494087C112.265537,27.057285,162.369014,24.248067,188.001002,34');">
				<path
					stroke="#F497A4"
					stroke-linecap="round"
					stroke-width="3"
					d="M188.001 30v4"
					class="Line 1"
				/>
				<path
					stroke="#F497A4"
					stroke-linecap="round"
					stroke-width="3"
					d="M189 34.04h3"
					class="Line 4"
				/>
				<path
					stroke="#F497A4"
					stroke-linecap="round"
					stroke-width="3"
					d="M184 34.04h3"
					class="Line 5"
				/>
				<path
					stroke="#F497A4"
					stroke-linecap="round"
					stroke-width="3"
					d="M188.001 35v3"
					class="Line 2"
				/>
			</g>
			<g class="bluestar">
				<path stroke="#EDF0EF" stroke-linecap="round" stroke-width="3" d="M6 31v4" class="Line 1" />
				<path
					stroke="#EDF0EF"
					stroke-linecap="round"
					stroke-width="3"
					d="M7 35.04h3"
					class="Line 4"
				/>
				<path
					stroke="#EDF0EF"
					stroke-linecap="round"
					stroke-width="3"
					d="M2 35.04h3"
					class="Line 5"
				/>
				<path stroke="#EDF0EF" stroke-linecap="round" stroke-width="3" d="M6 36v3" class="Line 2" />
			</g>
			<g class="leftwhitestar">
				<path stroke="#94DAE0" stroke-linecap="round" stroke-width="3" d="M30 8v4" class="Line 1" />
				<path
					stroke="#94DAE0"
					stroke-linecap="round"
					stroke-width="3"
					d="M33 15.04h4"
					class="Line 4"
				/>
				<path
					stroke="#94DAE0"
					stroke-linecap="round"
					stroke-width="3"
					d="M23 15.04h4"
					class="Line 5"
				/>
				<path
					stroke="#94DAE0"
					stroke-linecap="round"
					stroke-width="3"
					d="M30 18v4"
					class="Line 2"
				/>
			</g>
		</g> -->
	<defs>
		<clipPath id="a" class="a">
			<rect
				width="148.83"
				height="106.29"
				x="25"
				y="33.492"
				fill="#fff"
				rx="9"
				transform="rotate(-2.5 25 33.492)"
			/>
		</clipPath>
	</defs>
</svg>
