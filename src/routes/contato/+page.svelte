<script>
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import Hero from '$lib/components/Hero.svelte';

	let init = false;
	onMount(() => {
		init = true;
	});

	const inputs = [
		{
			id: 'userEmail',
			label: 'Seu email',
			input: {
				type: 'email',
				placeholder: 'seu@email.com'
			}
		},
		{
			id: 'userName',
			label: 'Seu nome',
			input: {
				type: 'text',
				placeholder: 'Jose Silva Sauro',
				name: 'name'
			}
		},
		{
			id: 'userSubject',
			label: 'Qual é o assunto?',
			input: {
				type: 'text',
				placeholder: 'Escreve o assunto aqui ó',
				name: 'subject'
			}
		},
		{
			id: 'userText',
			label: 'Qual é a mensagem?',
			input: {
				type: 'textarea',
				placeholder: 'Escreve aqui ó',
				name: 'message'
			}
		}
	];
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<Hero>
	<div class="flex flex-col md:flex-row-reverse gap-3">
		<section class="flex flex-col gap-2 text-left">
			<div class="w-full">
				<h1 class="text-headline-medium">Olha a Mensagem! 📜</h1>
				<p class="py-6 text-body-medium">
					Se estiver interessado em fazer negócios, quer falar sobre
					<a class="link decoration-orange-400" href="/projetos">algum projeto meu</a>
					ou só quer trocar mensagens sobre programação, é só mandar uma mensagem, responderei com um
					sorriso no rosto 😁
				</p>
				<section>
					<p class="text-body-small">Pode checar minhas redes sociais também 😉</p>
					<ul class="flex flex-row gap-2 text-label-large text-primary">
						<li>
							<a href="http://twitter.com" rel="noreferrer" target="_blank" class="link">
								twitter
							</a>
						</li>
						<li>
							<a
								href="https://github.com/realfakenerd"
								rel="noreferrer"
								target="_blank"
								class="link"
							>
								github
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/dev-lucas-ouverney/"
								rel="noreferrer"
								target="_blank"
								class="link"
							>
								linkedin
							</a>
						</li>
					</ul>
				</section>
			</div>
			<figure class="group relative self-center [&>img]:rounded-lg">
				<img
					class="relative z-10"
					src="hands_email.webp"
					height="400"
					width="364"
					alt="hand email"
				/>
				<img
					class="
						absolute left-0 top-1 z-0 opacity-0 blur-md
						saturate-150 filter transition duration-500 group-hover:scale-105 group-hover:opacity-100
					"
					src="hands_email.webp"
					height="400"
					width="364"
					alt="hand email"
				/>
			</figure>
		</section>
		<section class="w-full rounded-xl bg-background text-on-background p-4 shadow-xl">
			<form
				class="flex flex-col gap-2"
				action="https://formsubmit.co/realfakenerd@gmail.com"
				method="POST"
			>
				<input type="hidden" name="_captcha" value="false" />
				<input type="hidden" name="_template" value="box" />
				<!-- <input type="hidden" name="_next" value="/redirection" /> -->
				<input type="hidden" name="_subject" value="New Submission" />
				{#each inputs as { input, label, id } (id)}
					<div class="w-full">
						{#if input.type !== 'textarea'}
							<label class="space-y-2" for={id}>
								<span class="text-label-large">{label}</span>
								<input
									required
									{id}
									name={input.type}
									type={input.name}
									placeholder={input.placeholder}
								/>
							</label>
						{:else}
							<label for={id} class="space-y-2">
								<span class="text-label-large">{label}</span>
								<textarea
									name={input.name}
									{id}
									placeholder={input.placeholder}
									cols="30"
									rows="9"
								/>
							</label>
						{/if}
					</div>
				{/each}
				<button class="button bg-primary text-on-primary w-full" type="submit"
					>Enviar</button
				>
			</form>
		</section>
	</div>
</Hero>

<style lang="postcss">
	input,
	textarea {
		@apply bg-surface-variant ring-on-surface-variant w-full 
		rounded-xl border-none py-2 pl-4  ring-1 transition;
	}

	input:placeholder {
		@apply text-on-surface-variant;
	}

	input:focus {
		@apply ring-on-surface-variant ring-2;
	}
</style>
