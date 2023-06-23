<script>
	import Button from '$lib/components/Button.svelte';
	import Chips from '$lib/components/Chips.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import TextField from '$lib/components/TextField.svelte';
	import icons from '$lib/icons';

	const inputs = [
		{
			id: 'email',
			label: 'Seu email',
			input: 'email',
			d: `M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z`
		},
		{
			id: 'name',
			label: 'Seu nome',
			input: 'text',
			d: `M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z`
		},
		{
			id: 'subject',
			label: 'Qual é o assunto?',
			input: 'text',
			d: `M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z`
		},
		{
			id: 'message',
			label: 'Qual é a mensagem?',
			input: 'textarea',
			d: `M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z`
		}
	];
</script>

<svelte:head>
	<title>Contato</title>
	<meta
		name="description"
		content="Entre em contato para fazer negócios, falar sobre projetos ou trocar mensagens sobre programação."
	/>
</svelte:head>

<Hero>
	<div class="flex flex-col gap-3 md:flex-row-reverse">
		<section class="flex flex-col gap-2 text-left">
			<div class="w-full">
				<h1 class="text-headline-medium">Olha a Mensagem! 📜</h1>
				<p class="text-body-medium py-6">
					Se estiver interessado em fazer negócios, quer falar sobre
					<a class="decoration-primary underline decoration-solid" href="/projetos"
						>algum projeto meu</a
					>
					ou só quer trocar mensagens sobre programação, é só mandar uma mensagem, responderei com um
					sorriso no rosto 😁
				</p>
				<section class="flex flex-col gap-1">
					<p class="text-body-small">Pode checar minhas redes sociais também 😉</p>
					<ul class="text-label-large text-primary flex flex-row gap-2">
						<Chips tag="li" icon={icons.github}>
							<a
								href="https://github.com/realfakenerd"
								rel="noreferrer"
								target="_blank"
								class="link"
							>
								github
							</a>
						</Chips>
						<Chips tag="li" icon={icons.linkedin}>
							<a
								href="https://www.linkedin.com/in/dev-lucas-ouverney/"
								rel="noreferrer"
								target="_blank"
								class="link"
							>
								linkedin
							</a>
						</Chips>
					</ul>
				</section>
			</div>
			<figure class="group relative self-center [&>img]:rounded-lg">
				<img
					class="relative z-10"
					src="hands_email.webp"
					height="400"
					width="364"
					alt="Mãos segurando um envelope"
				/>
				<img
					class="
						absolute left-0 top-1 z-0 opacity-0 blur-md
						saturate-150 filter transition duration-500 group-hover:scale-105 group-hover:opacity-100
					"
					src="hands_email.webp"
					height="400"
					width="364"
					alt="Mãos segurando um envelope"
				/>
			</figure>
		</section>
		<section class="bg-background text-on-background w-full rounded-xl p-4 shadow-xl">
			<form
				class="flex flex-col gap-3"
				action="https://formsubmit.co/realfakenerd@gmail.com"
				method="POST"
			>
				<input
					type="hidden"
					name="_next"
					value={import.meta.env.DEV
						? 'http://localhost:5173/success'
						: 'https://dev-lucasouverney.vercel.app/success'}
				/>
				<input type="hidden" name="_subject" value="New submission!" />
				<input type="hidden" name="_captcha" value="false" />
				{#each inputs as { input, label, id, d } (id)}
					{#if input !== 'textarea'}
						<TextField title={label} icon={d}/>
					{:else}
						<TextField isTextarea title={label} icon={d} />
					{/if}
				{/each}
				<Button color="primary" isBlock>Enviar</Button>
			</form>
		</section>
	</div>
</Hero>
