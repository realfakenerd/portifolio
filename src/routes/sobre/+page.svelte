<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import '@fontsource/fira-mono/400.css';
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

	const editor_terminal = [
		{
			title: 'editor',
			klass: 'decoration-lime-500 text-teal-400',
			link: {
				path: 'https://neovim.io/',
				title: 'neovim'
			}
		},
		{
			title: 'terminal linux',
			klass: 'decoration-red-500',
			link: {
				path: 'https://gnome-terminator.org/',
				title: 'terminator'
			}
		},
		{
			title: 'neovim gui',
			klass: 'decoration-green-400 text-blue-400',
			link: {
				path: 'https://neovide.dev',
				title: 'neovide'
			}
		},
		{
			title: 'neovim config',
			klass: 'decoration-teal-400 text-blue-200',
			link: {
				path: 'https://astronvim.com',
				title: 'astro nvim'
			}
		}
	];

	const frameworks_libs = [
		{
			title: 'css',
			klass: 'decoration-teal-400',
			link: {
				path: 'https://tailwindcss.com/',
				title: 'tailwindcss'
			}
		},
		{
			title: 'javascript framework',
			klass: 'decoration-orange-500',
			link: {
				path: 'https://svelte.dev',
				title: 'svelte'
			}
		},
		{
			title: 'frontend framework',
			klass: 'decoration-orange-500',
			link: {
				path: 'https://kit.svelte.dev',
				title: 'sveltekit'
			}
		}
	];

	const hosting_co = [
		{
			title: 'hosting',
			klass: 'decoration-stone-500',
			link: {
				path: 'https://vercel.app/',
				title: 'vercel'
			}
		},
		{
			title: 'database',
			klass: 'decoration-yellow-500',
			link: {
				path: 'https://aws.amazon.com/',
				title: 'AWS'
			}
		},
		{
			title: 'provedor de email',
			klass: 'decoration-zinc-500',
			link: { path: 'https://workspace.google.com/', title: 'GSuit' }
		}
	];
	export let data: PageData;
	const { user } = data;
</script>

<svelte:head>
	<title>Sobre</title>
</svelte:head>

<section class="p-3">
	<section class="flex flex-col items-center justify-center gap-2">
		<div
			class="flex rounded-xl p-4 flex-col items-center justify-center gap-2 bg-background md:flex-row"
		>
			<img class="w-32 rounded-full" src={user.avatar_url} alt="avatar webp" />
			<div class="flex flex-col gap-2">
				<section>
					<h1 class="text-title-medium">{user.name}</h1>
					<h2 class="text-body-medium">Olá! <span>🙂</span></h2>
				</section>
				<section>
					<p class="text-body-medium">
						Eu estou sempre aprendendo novas coisas, melhorando minhas habilidades e meus projetos,
						um de cada vez. Atualmente estou focando em ser Analista de Sistemas e em melhorar
						minhas habilidades no backend com Rust e banco de dados com Redis
					</p>
				</section>
			</div>
		</div>

		<div class="w-full">
			<div class="flex rounded-xl p-4 flex-col gap-2 bg-background">
				<h1 class="text-title-large">O que eu uso Atualmente:</h1>

				<section
					style="font-family: 'Fira Code', monospace"
					class="flex flex-col gap-y-2 md:flex-row items-start justify-between"
				>
					<ul class="text-body-medium w-full md:w-fit rounded-lg bg-surface-variant py-2">
						<li class="pl-3">
							<h2 class="text-body-large">Editor + Terminal</h2>
						</li>
						{#each editor_terminal as { klass, title, link }, i (i)}
							<li class="list">
								<span>{title} =></span>
								<a class={klass} href={link.path}>{link.title}</a>
								<hr class="border-outline" />
							</li>
						{/each}
					</ul>
					<ul class="text-body-medium w-full md:w-fit rounded-lg bg-surface-variant py-2  ">
						<li class="pl-3">
							<h2 class="text-body-large">Frameworks & Libs</h2>
						</li>
						{#each frameworks_libs as { title, klass, link }, i (i)}
							<li class="list">
								<span>{title} =></span>
								<a class={klass} href={link.path}>{link.title}</a>
								<hr class="border-outline" />
							</li>
						{/each}
					</ul>
					<ul class="text-body-medium rounded-lg w-full md:w-fit bg-surface-variant py-2  ">
						<li class="pl-3">
							<h2 class="text-body-large">Hosting & Co.</h2>
						</li>
						{#each hosting_co as { title, klass, link }, i (i)}
							<li class="list">
								<span>{title} =></span>
								<a class={klass} href={link.path}>{link.title}</a>
								<hr class="border-outline" />
							</li>
						{/each}
					</ul>
				</section>
			</div>
		</div>
	</section>
</section>

<style lang="postcss">
	.list {
		@apply py-2 pl-3 pr-6 transition-colors;
	}

	.list a {
		@apply underline decoration-solid decoration-1;
	}

	.list:hover {
		@apply bg-background text-on-background;
	}
</style>
