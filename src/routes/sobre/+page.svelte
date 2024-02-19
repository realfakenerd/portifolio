<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import List from '$lib/components/List.svelte';
	import ListItem from '$lib/components/ListItem.svelte';

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
</script>

<svelte:head>
	<title>Sobre</title>
	<meta
		name="description"
		content="Conheça mais sobre mim, um entusiasta de tecnologia focado em desenvolvimento de sistemas. Saiba quais ferramentas e tecnologias eu uso atualmente."
	/>
	<link rel="preload" as="image" type="image/webp" href="/profile_lowres.webp" />
</svelte:head>

<Hero>
	<section class="flex flex-col items-center justify-center gap-2">
		<div role="presentation" class="card flex flex-col items-center gap-2 rounded-lg md:flex-row">
			<img
				width="164"
				height="164"
				class="rounded-full"
				src="/profile.webp"
				style="background-image: url(/profile_lowres.webp); min-width: 164px;"
				alt="Minha foto de perfil do github"
			/>
			<div class="flex flex-col gap-2">
				<section>
					<h1 class="text-title-medium">Lucas A. Ouverney</h1>
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
			<div class="card gap-2 rounded-lg">
				<h1 class="text-title-large">O que eu uso Atualmente:</h1>

				<section class="flex flex-col items-start justify-between gap-y-2 font-mono md:flex-row">
					<List
						isUl
						list={editor_terminal}
						let:item
						class="text-body-medium bg-surface-variant w-full rounded-md md:w-fit"
					>
						{@const title = item.title}
						{@const klass = item.klass}
						{@const link = item.link}
						<svelte:fragment slot="list-description">
							<li class="item list-lines-1 items-center">
								<div class="item-body">
									<h2 class="list-headline">Editor &amp; Terminal</h2>
								</div>
							</li>
							<hr class="divider-list-inset" />
						</svelte:fragment>
						<ListItem class="hover:bg-surface">
							<span>{title} =&gt;</span>
							<a class={klass} href={link.path}>{link.title}</a>
						</ListItem>
					</List>

					<List
						isUl
						list={frameworks_libs}
						let:item
						class="bg-surface-variant w-full rounded-md text-body-medium md:w-fit"
					>
						{@const title = item.title}
						{@const klass = item.klass}
						{@const link = item.link}
						<svelte:fragment slot="list-description">
							<li class="item list-lines-1 items-center">
								<div class="item-body">
									<h2 class="list-headline">Frameworks &amp; Libs</h2>
								</div>
							</li>
							<hr class="divider-list-inset" />
						</svelte:fragment>
						<ListItem class="hover:bg-surface">
							<span>{title} =&gt;</span>
							<a class={klass} href={link.path}>{link.title}</a>
						</ListItem>
					</List>

					<List
						isUl
						list={hosting_co}
						let:item
						class="bg-surface-variant w-full rounded-md text-body-medium md:w-fit"
					>
						{@const title = item.title}
						{@const klass = item.klass}
						{@const link = item.link}
						<svelte:fragment slot="list-description">
							<li class="item list-lines-1 items-center">
								<div class="item-body">
									<h2 class="list-headline">Hosting &amp; Co.</h2>
								</div>
							</li>
							<hr class="divider-list-inset" />
						</svelte:fragment>
						<ListItem class="hover:bg-surface">
							<span>{title} =&gt;</span>
							<a class={klass} href={link.path}>{link.title}</a>
						</ListItem>
					</List>
				</section>
			</div>
		</div>
	</section>
</Hero>
