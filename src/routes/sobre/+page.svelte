<script lang="ts">
	import type { PageData } from './$types';
	import '@fontsource/fira-mono';

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
	<meta
		name="description"
		content="Conheça mais sobre mim, um entusiasta de tecnologia focado em desenvolvimento de sistemas. Saiba quais ferramentas e tecnologias eu uso atualmente."
	/>
</svelte:head>

<section class="p-3">
	<section class="flex flex-col items-center justify-center gap-2">
		<div
			role="presentation"
			class="bg-background flex flex-col items-center justify-center gap-2 rounded-xl p-4 md:flex-row"
		>
			<img class="w-32 rounded-full" src={user.avatar_url} alt="Minha foto de perfil do github" />
			<div class="flex flex-col gap-2">
				<section>
					<h1 class="text-title-medium">{user.name}</h1>
					<h2 class="text-body-medium">Olá! <span>🙂</span></h2>
				</section>
				<section>
					<p class="text-body-medium">
						Quer saber um pouco mais sobre mim? Sou um entusiasta de tecnologia, apaixonado por
						aprender e aprimorar minhas habilidades em desenvolvimento de sistemas. <br />
						Atualmente, como Analista de Sistemas, estou focando meus esforços em me tornar um especialista
						em Rust no backend e em aprimorar meu conhecimento em banco de dados, especialmente com Redis.
						<br />
						Acredito que sempre há espaço para crescer e me desafio a aprender algo novo a cada dia.
						Quer se juntar a mim nesta jornada de aprimoramento contínuo? Vamos lá!
					</p>
				</section>
			</div>
		</div>

		<div class="w-full">
			<div class="bg-background flex flex-col gap-2 rounded-xl p-4">
				<h1 class="text-title-large">O que eu uso Atualmente:</h1>

				<section class="flex flex-col items-start justify-between gap-y-2 font-mono md:flex-row">
					<ul
						class="text-body-medium interactive-bg-surface-variant w-full rounded-lg py-2 md:w-fit"
					>
						<li class="pl-3">
							<h2 class="text-body-large">Editor &amp; Terminal</h2>
						</li>
						{#each editor_terminal as { klass, title, link }, i (i)}
							<li class="list">
								<span>{title} =&gt;</span>
								<a class={klass} href={link.path}>{link.title}</a>
								<hr class="border-outline" />
							</li>
						{/each}
					</ul>
					<ul
						class="text-body-medium interactive-bg-surface-variant w-full rounded-lg py-2 md:w-fit"
					>
						<li class="pl-3">
							<h2 class="text-body-large">Frameworks &amp; Libs</h2>
						</li>
						{#each frameworks_libs as { title, klass, link }, i (i)}
							<li class="list">
								<span>{title} =&gt;</span>
								<a class={klass} href={link.path}>{link.title}</a>
								<hr class="border-outline" />
							</li>
						{/each}
					</ul>
					<ul
						class="text-body-medium interactive-bg-surface-variant w-full rounded-lg py-2 md:w-fit"
					>
						<li class="pl-3">
							<h2 class="text-body-large">Hosting &amp; Co.</h2>
						</li>
						{#each hosting_co as { title, klass, link }, i (i)}
							<li class="list">
								<span>{title} =&gt;</span>
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
		@apply py-2 pl-3 pr-6 transition-colors duration-200;
	}

	.list a {
		@apply underline decoration-solid decoration-1;
	}

	@media (hover: hover) {
		.list:hover {
			@apply bg-background-hover text-on-background;
		}
	}
</style>
