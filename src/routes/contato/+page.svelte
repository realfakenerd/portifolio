<script>
	import Button from '$lib/components/Button.svelte';
	import Chips from '$lib/components/Chips.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import TextField from '$lib/components/TextField.svelte';

	const inputs = [
		{
			id: 'email',
			label: 'Seu email',
			name: 'email',
			input: 'email',
			icon: `mdi:at`
		},
		{
			id: 'name',
			label: 'Seu nome',
			name: 'nome',
			input: 'text',
			icon: `mdi:person`
		},
		{
			id: 'subject',
			label: 'Qual é o assunto?',
			name: 'assunto',
			input: 'text',
			icon: `mdi:text-long`
		},
		{
			id: 'message',
			label: 'Qual é a mensagem?',
			name: 'mensagem',
			input: 'textarea',
			icon: `mdi:message`
		}
	];

	let value = $state('');
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
				<p class="py-2 text-body-medium">
					Se estiver interessado em fazer negócios, quer falar sobre
					<a class="underline decoration-on-surface decoration-solid" href="/projetos">
						algum projeto meu
					</a>
					ou só quer trocar mensagens sobre programação, é só mandar uma mensagem, responderei com um
					sorriso no rosto 😁
				</p>
				<section class="flex flex-col gap-1">
					<p class="text-body-small">Pode checar minhas redes sociais também 😉</p>
					<ul class="flex flex-row gap-2 text-label-large text-primary">
						<Chips tag="li" icon="mdi:github">
							<a
								href="https://github.com/realfakenerd"
								rel="noreferrer"
								target="_blank"
								class="link"
							>
								github
							</a>
						</Chips>
						<Chips tag="li" icon="mdi:linkedin">
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
			<figure class="group relative self-center">
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
		<section class="bg-background w-full rounded-xl p-4 text-on-background shadow-xl">
			<form
				class="flex h-full flex-col justify-between gap-y-2"
				method="POST"
				action="https://formsubmit.co/realfakenerd@gmail.com"
			>
				<fieldset class="flex flex-col gap-3">
					<input
						type="hidden"
						name="_next"
						value={import.meta.env.DEV
							? 'http://localhost:5173/success'
							: 'https://dev-lucasouverney.vercel.app/success'}
					/>
					<input type="hidden" name="_subject" value="New submission!" />
					<input type="hidden" name="_captcha" value="false" />
					<!-- {#each inputs as { input, label, id, icon, name } (id)}
						{#if input !== 'textarea'}
							<TextField title={label} {icon} {name} />
						{:else}
							<TextField
								bind:value
								isTextarea
								title={label}
								{icon}
								{name}
								supportingText="use Markdown aqui!"
							/>
						{/if}
					{/each} -->
				</fieldset>
				<Button class="interactive-bg-primary" isBlock icon="mdi:send">Enviar</Button>
			</form>
		</section>
	</div>
</Hero>
