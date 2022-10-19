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
			},
			klass: 'col-span-2'
		},
		{
			id: 'userText',
			label: 'Qual é a mensagem?',
			input: {
				type: 'textarea',
				placeholder: 'Escreve aqui ó',
				name: 'message'
			},
			klass: 'col-span-2'
		}
	];
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<Hero reverse>
	<section class="flex flex-col gap-3 text-left">
		<div class="max-w-lg">
			<h1 class="text-5xl font-bold">Olha a Mensagem! 📜</h1>
			<p class="py-6">
				Se estiver interessado em fazer negócios, quer falar sobre
				<a class="link decoration-orange-400" href="/projetos">algum projeto meu</a>
				ou só quer trocar mensagens sobre programação, é só mandar uma mensagem, responderei com um sorriso
				no rosto 😁
			</p>
			<section>
				<p>Pode checar minhas redes sociais também 😉</p>
				<ul class="flex flex-row text-orange-400 gap-5">
					<li>
						<a href="http://twitter.com" rel="noreferrer" target="_blank" class="link"> twitter </a>
					</li>
					<li>
						<a href="https://github.com/realfakenerd" rel="noreferrer" target="_blank" class="link">
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
		<figure class="[&>img]:rounded-lg relative group">
			<img class="relative z-10" src="hands_email.webp" height="400" width="364" alt="hand email" />
			<img
				class="
					absolute top-1 transition duration-500 left-0 z-0
					filter blur-md saturate-150 opacity-0 group-hover:opacity-100 group-hover:scale-105
				"
				src="hands_email.webp"
				height="400"
				width="364"
				alt="hand email"
			/>
		</figure>
	</section>
	<section class="card bg-base-100 shadow-2xl">
		<div class="card-body">
			<form
				class="grid grid-cols-1 md:grid-cols-2 place-items-center gap-3"
				action="https://formsubmit.co/realfakenerd@gmail.com"
				method="POST"
			>
				<input type="hidden" name="_captcha" value="false" />
				<input type="hidden" name="_template" value="box" />
				<!-- <input type="hidden" name="_next" value="/redirection" /> -->
				<input type="hidden" name="_subject" value="New Submission" />
				{#if init}
					{#each inputs as { input, label, id, klass }, i (id)}
						<div
							class="form-control w-full max-w-xs {klass ? klass : ''}"
							in:fly={{
								duration: 600,
								delay: 600 * i,
								x: 100,
								y: 10 - i * 10,
								easing: backOut
							}}
						>
							{#if input.type !== 'textarea'}
								<label for={id} class="label">
									<span class="label-text">{label}</span>
								</label>
								<input
									required
									{id}
									name={input.type}
									type={input.name}
									placeholder={input.placeholder}
									class="input input-bordered border-orange-400"
								/>
							{:else}
								<label for={id} class="label">
									<span class="label-text">{label}</span>
								</label>
								<textarea
									class="textarea textarea-bordered border-orange-400"
									name={input.name}
									{id}
									placeholder={input.placeholder}
									cols="30"
									rows="10"
								/>
							{/if}
						</div>
					{/each}
				{/if}

				<div class="form-control mt-6 w-full col-span-2">
					<button class="btn btn-block btn-ghost bg-orange-400 text-white" type="submit"
						>Send</button
					>
				</div>
			</form>
		</div>
	</section>
</Hero>
