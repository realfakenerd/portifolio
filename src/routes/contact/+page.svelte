<script>
	let submission = 'New Submission';
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
				<img src="hands_email.png" alt="asd" />
			</div>
		</div>
		<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<div class="card-body">
				<form action="https://formsubmit.co/lucas210898.lao@gmail.com" method="POST">
					<input type="hidden" name="_captcha" value="false" />
					<input type="hidden" name="_template" value="box" />
					<input type="hidden" name="_next" value="http://localhost:5173/redirection" />
					<input type="hidden" name="_subject" bind:value={submission} />
					<div class="form-control w-full max-w-xs">
						<label for="UserEmail" class="label">
							<span class="label-text">Your Email</span>
						</label>
						<input
							required
							id="UserEmail"
							name="email"
							type="email"
							placeholder="your@email.com"
							class="input input-bordered border-orange-400"
						/>
					</div>

					<div class="form-control w-full max-w-xs">
						<label for="UserSubjection" class="label">
							<span class="label-text">The Subject</span>
						</label>

						<input
							required
							id="UserSubjection"
							name="subject"
							type="text"
							placeholder="New Subject"
							class="input input-bordered border-orange-400"
							bind:value={submission}
						/>
					</div>

					<div class="form-control w-full max-w-xs">
						<label for="UserName" class="label">
							<span class="label-text">Your Name</span>
						</label>
						<input
							required
							id="UserName"
							name="name"
							type="text"
							placeholder="John Doe"
							class="input input-bordered border-orange-400"
						/>
					</div>

					<div class="form-control w-full max-w-xs">
						<label for="UserText" class="label">
							<span class="label-text">Type your message</span>
						</label>
						<input
							required
							id="UserText"
							type="textarea"
							name="message"
							placeholder="Type here"
							class="textarea textarea-bordered border-orange-400"
						/>
					</div>

					<div class="form-control mt-6">
						<button class="btn btn-ghost bg-orange-400 text-white" type="submit">Send</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
