<script lang="ts">
	import { backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	const skills = [
		{
			skill: 'javascript',
			img: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
		},
		{
			skill: 'typescript',
			img: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
		},
		{
			skill: 'nodejs',
			img: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Font_Awesome_5_brands_node-js.svg'
		},
		{
			skill: 'svelte',
			img: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg'
		},
		{
			skill: 'vue',
			img: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg'
		},
		{
			skill: 'express',
			img: 'https://cdn.hackersandslackers.com/2020/05/express.png'
		},
		{
			skill: 'rust',
			img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg'
		},
		{
			skill: 'tailwindcss',
			img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'
		},
		{
			skill: 'vercel',
			img: 'https://images.saasworthy.com/tr:w-178,h-0/vercel_7966_logo_1623223240_4aqmr.png'
		},
		{
			skill: 'supabase',
			img: 'https://res.cloudinary.com/practicaldev/image/fetch/s---1zZlXx3--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/1968/c0dbe341-1d94-4192-a93b-921519678894.png'
		},
		{
			skill: 'redis',
			img: 'https://logos-download.com/wp-content/uploads/2020/06/Redis_Logo.png'
		}
	];

	let init = false;

	onMount(() => {
		init = true;
	});

	export let data: PageData;
</script>

<svelte:head>
	<title>Sobre</title>
</svelte:head>

<section class="min-h-[70vh] py-10 px-5 backdrop-blur-sm">
	<section class="flex flex-col items-center justify-center gap-10">
		<div class="flex flex-col items-center justify-center gap-5 md:flex-row">
			<div class="avatar md:place-self-end">
				<div class="w-32 rounded-full ring ring-orange-400 ring-offset-2 ring-offset-base-100">
					<img src={data.authorData.profile_image} alt="avatar webp" />
				</div>
			</div>
			<div class="max-w-md">
				<h1 class="text-xl">Ol??! <span>????</span></h1>
				<p>{data.authorData.bio}</p>
			</div>
		</div>

		<div class="grid grid-rows-2 w-full gap-5 [&>*]:shadow-md [&>*]:bg-base-200">
			<div class="card">
				<div class="card-body">
					<h1 class="card-title">Tech Skills</h1>

					<section class="custom-grid gap-12 place-items-center grid">
						<p>
							Eu estou sempre aprendendo novas coisas, melhorando minhas habilidades e meus
							projetos, um de cada vez. Atualmente estou focando em ser Analista de Sistemas e em
							melhorar minhas habilidades no backend com Rust e banco de dados com Redis
						</p>
						<ul class="grid grid-cols-3 place-items-center gap-3 md:grid-cols-5">
							{#if init}
								{#each skills as s, i (i)}
									<li
										class="p-2 bg-base-100 rounded-xl shadow-md mouseover transition ease-out"
										in:fly={{ delay: 300 * i, y: -100, easing: backOut }}
									>
										<img height="40" width="40" src={s.img} alt={s.skill} />
									</li>
								{/each}
							{/if}
						</ul>
					</section>
				</div>
			</div>
			<div class="card">
				<div class="card-body">
					<h1 class="card-title">O que eu uso Atualmente:</h1>

					<section
						class="grid grid-cols-1 md:grid-cols-3 gap-3 [&>ul>li>h2]:text-xl [&>ul]:p-3 [&>ul]:rounded-md 
						[&>ul]:bg-base-100 [&>ul]:font-mono"
					>
						<ul
							class="
								[&>li>a]:link [&>li>a]:text-orange-300 [&>li>a:hover]:text-orange-400
								[&>li>a]:decoration-2
								"
						>
							<li>
								<h2>Editor + Terminal</h2>
							</li>
							<li>
								<span>Editor =></span>
								<a class="decoration-blue-500" href="http://code.visualstudio.com">VSCode</a>
							</li>
							<li>
								<span>Terminal Linux =></span>
								<a class="decoration-red-400" href="https://gnome-terminator.org/"> Terminator </a>
							</li>
							<li>
								<span>Terminal Windows =></span>
								<a
									class="decoration-blue-500"
									href="https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=en-us&gl=us"
								>
									Terminal
								</a>
							</li>
						</ul>
						<ul
							class="
							[&>li>a]:link [&>li>a]:text-orange-300 [&>li>a:hover]:text-orange-400
							[&>li>a]:decoration-2
							"
						>
							<li>
								<h2>Frameworks & Libs</h2>
							</li>
							<li>
								<span>CSS =></span>
								<a class="decoration-teal-500" href="https://tailwindcss.com/">TailwindCSS</a>
							</li>
							<li>
								<span>CSS lib =></span>
								<a class="decoration-rose-500" href="https://daisyui.com/">Daisyui</a>
							</li>
							<li>
								<span>Javascript Framework =></span>
								<a class="decoration-orange-500" href="https://svelte.dev/">Svelte</a>
							</li>
							<li>
								<span>Frontend Framework =></span>
								<a class="decoration-orange-500" href="https://kit.svelte.dev/">SvelteKit</a>
							</li>
							<li>
								<span>Javascript Framework =></span>
								<a class="decoration-lime-500" href="https://vuejs.org/">Vue</a>
							</li>
						</ul>
						<ul
							class="
							[&>li>a]:link [&>li>a]:text-orange-300 [&>li>a:hover]:text-orange-400
							[&>li>a]:decoration-2
							"
						>
							<li>
								<h2>Hosting & Co.</h2>
							</li>
							<li>
								<span>Hosting =></span>
								<a class="decoration-stone-500" href="https://vercel.app/">Vercel</a>
							</li>
							<li>
								<span>Provedor de Email =></span>
								<a class="decoration-stone-500" href="https://workspace.google.com/">GSuit</a>
							</li>
							<li>
								<span>Cloud database =></span>
								<a class="decoration-green-500" href="https://supabase.com/">Supabase</a>
							</li>
						</ul>
					</section>
				</div>
			</div>
		</div>
	</section>
</section>

<style>
	.custom-grid {
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	}

	@media (min-width: 768px) {
		.custom-grid {
			grid-template-columns: 1fr 2fr;
		}
	}

	.mouseover:hover {
		@apply -translate-y-2 shadow-xl;
	}
</style>
