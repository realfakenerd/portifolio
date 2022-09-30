<script>
	import { backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
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
		
	];

	let init = false;

	onMount(() => {
		init = true;
	});
</script>

<svelte:head>
	<title>About me</title>
</svelte:head>

<section class="py-10 px-5 min-h-[70vh] backdrop-blur-sm">
	<section class="flex flex-col justify-center items-center gap-10">
		<div class="flex flex-col md:flex-row gap-5 justify-center items-center">
			<div class="avatar md:place-self-end">
				<div class="w-32 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
					<img src="avatar.webp" alt="avatar webp" />
				</div>
			</div>
			<div class="max-w-md">
				<h1 class="text-xl">Hi! <span>🙂</span></h1>
				<p>
					I'm Lucas a web and game developer who loves the browser. 20-something-year-old, frontend
					developer, sometimes fullstack developer and cake maker.
				</p>
			</div>
		</div>

		<div class="flex flex-col md:flex-row">
			<div class="card max-w-sm">
				<div class="card-body">
					<p>
						I'm always learning new things, improving myself and my projects one at a time.
						Currently focusing on being and Software Analyst and improving my backend skills with
						Rust.
					</p>
				</div>
			</div>
			<div class="card md:w-[26rem] md:min-h-16 md:max-w-md">
				<div class="card-body">
					<div class="card-title">Tech Skills</div>
					<ul class="grid grid-cols-2 md:grid-cols-5 gap-5">
						{#if init}
							{#each skills as s, i (i)}
								<li class="flex flex-col items-center" in:fly={{ delay: 300 * i, y: -100, easing: backOut }}>
                                    <img class="w-10 h-10" src={s.img} alt={s.skill}>
                                    <span>{s.skill}</span>
                                </li>
							{/each}
						{/if}
					</ul>
				</div>
			</div>
		</div>
	</section>
</section>
