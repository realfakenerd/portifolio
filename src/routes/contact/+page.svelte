<script>
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let init = false;
	onMount(() => {
		init = true;
	});
	let submission = 'New Submission';

	const inputs = [
		{
			id: 'userEmail',
			label: 'Your Email',
			input: {
				type: 'email',
				placeholder: 'your@email.com'
			}
		},
		{
			id: 'userSubject',
			label: 'The Subject',
			input: {
				type: 'text',
				placeholder: 'New Subject',
				name: 'subject'
			}
		},
		{
			id: 'userName',
			label: 'Your Name',
			input: {
				type: 'text',
				placeholder: 'John Doe',
				name: 'name'
			}
		},
		{
			id: 'userText',
			label: 'Type your message',
			input: {
				type: 'textarea',
				placeholder: 'Type Here',
				name: 'message'
			}
		}
	];
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class="hero min-h-[70vh] backdrop-blur-sm">
	<div class="hero-overlay opacity-50 md:rounded-b-3xl" />
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="text-center lg:text-left flex flex-col md:flex-row gap-3">
			<div class="max-w-sm">
				<h1 class="text-5xl font-bold">Let's talk 📜</h1>
				<p class="py-6">
					Whether you're interested to do business, want to chat about some of my projects or just
					wanna talk about coding, i'm happy to talk to you.
				</p>
				<p>Feel free to check my social media 🙂</p>
				<ul>
					<li />
				</ul>
			</div>
			<div>
				<img src="hands_email.png" alt="hand email png" />
			</div>
		</div>
		<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<div class="card-body">
				<form action="https://formsubmit.co/de5e032fc98d660bcfcb0caaf3adeb3a" method="POST">
					<input type="hidden" name="_captcha" value="false" />
					<input type="hidden" name="_template" value="box" />
					<!-- <input type="hidden" name="_next" value="/redirection" /> -->
					<input type="hidden" name="_subject" value="New Submission" />
					{#if init}
						{#each inputs as { input, label, id }, i (id)}
							<div
								class="form-control w-full max-w-xs"
								in:fly={{
									duration: 600,
									delay: 600 * i,
									x: 100,
									y: 10 - i * 10,
									easing: backOut
								}}
							>
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
							</div>
						{/each}
					{/if}

					<div class="form-control mt-6">
						<button class="btn btn-ghost bg-orange-400 text-white" type="submit">Send</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
