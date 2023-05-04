<script>
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Icon from '$lib/components/Icon.svelte';

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
				<section>
					<p class="text-body-small">Pode checar minhas redes sociais também 😉</p>
					<ul class="text-label-large text-primary flex flex-row gap-2">
						<li
							class="ring-outline fill-primary flex items-center gap-x-2 rounded-md py-1 pl-2 pr-4 ring-1"
						>
							<Icon
								width={18}
								height={18}
								d={`M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z`}
							/>
							<a href="http://twitter.com" rel="noreferrer" target="_blank"> twitter </a>
						</li>
						<li
							class="ring-outline fill-primary flex items-center gap-x-2 rounded-md py-1 pl-2 pr-4 ring-1"
						>
							<Icon
								width={18}
								height={18}
								d={`M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z`}
							/>
							<a
								href="https://github.com/realfakenerd"
								rel="noreferrer"
								target="_blank"
								class="link"
							>
								github
							</a>
						</li>
						<li
							class="ring-outline fill-primary flex items-center gap-x-2 rounded-md py-1 pl-2 pr-4 ring-1"
						>
							<Icon
								width={18}
								height={18}
								d={`M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z`}
							/>
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
		<section class="bg-background text-on-background w-full rounded-xl p-4 shadow-xl">
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
				<button class="button interactive-bg-primary text-on-primary w-full" type="submit"
					>Enviar</button
				>
			</form>
		</section>
	</div>
</Hero>
