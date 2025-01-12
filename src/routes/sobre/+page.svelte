<script lang="ts">
	import Icon from '@iconify/svelte';
	import { animate } from 'motion';

	let hidden = $state(true);

	$effect(() => {
		animate(
			'#logoIcon',
			{
				rotateZ: '359deg'
			},
			{
				repeat: Number.POSITIVE_INFINITY,
				duration: 20,
				easing: 'ease-in-out'
			}
		);

		$inspect(hidden);
	});
</script>

<svelte:head>
	<title>Sobre</title>
	<meta
		name="description"
		content="Procurando um desenvolvedor Svelte para dar vida ao seu projeto? Conheça meu trabalho e entre em contato para uma consultoria gratuita."
	/>

	<meta property="og:title" content="Lucas Silva - Desenvolvedor Web Svelte" />
	<meta
		property="og:description"
		content="Desenvolvedor Svelte criando interfaces web de alta performance. Confira meu portfólio!"
	/>
	<meta property="og:image" content="https://www.example.com/lucas-profile-picture.jpg" />
	<meta property="og:url" content="https://www.example.com/sobre" />
	<meta property="og:type" content="website" />
</svelte:head>

<section class="section-hero container">
	<main class="main-grid">
		<section class="profile">
			<div class="profile-content">
				<figure>
					<enhanced:img src="/static/avatar.png?format=webp" alt="my profile"></enhanced:img>
				</figure>
				<div class="profile-text">
					<p>SOU O <br /> WEBDEV <br /> <span class="slanted">lucas</span></p>

					<button class="btn-trigger" onclick={() => (hidden = !hidden)} aria-label="Open dialog">
						<svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24">
							<path
								class="fill-secondary"
								d="M21 8V7l-3 2l-3-2v1l3 2m4-7H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M8 6a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1m8-5h-8V6h8"
							/>
						</svg>
					</button>
				</div>
				<div class="inline-flex w-full items-center gap-4 text-title-medium">
					<p>lucas210898@hotmail.com</p>
					<Icon icon="mdi:email" />
				</div>
			</div>
			<svg
				id="logoIcon"
				width="450px"
				height="450px"
				viewBox="0 0 300 300"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle id="Ell1" cx="50" cy="50" r="47" class="stroke-primary" stroke-width="8" />
				<circle id="Ell2" cx="210" cy="50" r="50" class="fill-primary" />
				<circle id="Ell3" cx="50" cy="210" r="50" class="fill-primary" />
				<circle id="Ell4" cx="210" cy="210" r="50" class="fill-primary" />
			</svg>
		</section>
		<hgroup class="titulo">
			<h1>Sobre mim</h1>
		</hgroup>
		<div
			class={[
				'biography',
				hidden ? 'bg-secondary text-on-secondary' : 'bg-tertiary text-on-tertiary'
			]}
		>
			{#if !hidden}
				<p>
					Olá! Sou um webdev que curte muito o que faz. Com anos de experiência, amo Typescript, CSS
					e Svelte. A criação de interfaces interativas e de alto desempenho é minha especialidade,
					sempre focando em detalhes.
				</p>
				<p>
					Quando não estou desenvolvendo sites extraordinários, estou curtindo um bom jogo, filmes e
					séries dos melhores super-heróis ou épicos do sci-fi ou simplesmente aprendendo a
					aprimorar meus projetos.
				</p>
				<p>
					Então não deixe sua ideia só na ficção, entre em <button
						onclick={() => (hidden = !hidden)}
						class="underline">contato comigo</button
					> que transformo ficção em realidade, ponho suas ideias no mundo digital.
				</p>
			{:else}
				<form>
					<header>
						<h1>Fale comigo</h1>
						<h2>Escreva para mim que eu receberei em meu e-mail :)</h2>
					</header>
					<main>
						<ul>
							<li class="text-field">
								<label for="nome"> Nome </label>

								<input id="nome" type="text" />
							</li>
							<li class="text-field">
								<label for="email"> E-mail </label>

								<input id="email" type="email" />
							</li>
							<li class="text-field">
								<label for="assunto"> Assunto </label>

								<input id="assunto" type="text" />
							</li>
						</ul>
						<div class="text-field w-1/2">
							<label for="mensagem">Mensagem</label>
							<textarea id="mensagem" class="h-full"></textarea>
						</div>
					</main>
				</form>
			{/if}
		</div>
		<div class="stat">
			<div class="w-1/2">
				<p class="font-thin">+20</p>
			</div>
			<div class="bg-tertiary w-full rounded-l-3xl">
				<p class="font-black">projetos</p>
			</div>
		</div>
		<div class="stat">
			<div class="bg-tertiary w-1/2 rounded-r-3xl">
				<p class="font-light">+4</p>
			</div>
			<div class="w-full">
				<p class="font-black">clientes</p>
			</div>
		</div>
		<div class="technologies">
			<svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75q.918 0 1.627.111a6.4 6.4 0 0 1 1.306.34v2.458a4 4 0 0 0-.643-.361a5 5 0 0 0-.717-.26a5.5 5.5 0 0 0-1.426-.2q-.45 0-.819.086a2.1 2.1 0 0 0-.623.242q-.254.156-.393.374a.9.9 0 0 0-.14.49q0 .294.156.529q.156.234.443.444c.287.21.423.276.696.41q.41.203.926.416q.705.296 1.266.628q.561.333.963.753q.402.418.614.957q.213.538.214 1.253q0 .986-.373 1.656a3 3 0 0 1-1.012 1.085a4.4 4.4 0 0 1-1.487.596q-.85.18-1.79.18a10 10 0 0 1-1.84-.164a5.5 5.5 0 0 1-1.512-.493v-2.63a5.03 5.03 0 0 0 3.237 1.2q.5 0 .872-.09q.373-.09.623-.25q.249-.162.373-.38a1.02 1.02 0 0 0-.074-1.089a2.1 2.1 0 0 0-.537-.5a5.6 5.6 0 0 0-.807-.444a28 28 0 0 0-1.007-.436q-1.377-.575-2.053-1.405t-.676-2.005q0-.92.369-1.582q.368-.662 1.004-1.089a4.5 4.5 0 0 1 1.47-.629a7.5 7.5 0 0 1 1.77-.201m-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
				/></svg
			>

			<svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M10.99 1.974c2.92-1.86 6.957-.992 9.001 1.934a6.27 6.27 0 0 1 1.072 4.74a5.9 5.9 0 0 1-.88 2.198c.64 1.221.855 2.62.61 3.977a5.88 5.88 0 0 1-2.657 3.94l-5.127 3.268c-2.92 1.86-6.957.993-9.002-1.933a6.27 6.27 0 0 1-1.07-4.741a5.9 5.9 0 0 1 .88-2.198a6.2 6.2 0 0 1-.611-3.977a5.88 5.88 0 0 1 2.658-3.94zM8.049 20.25c.782.29 1.633.332 2.44.123c.369-.099.72-.253 1.042-.458l5.128-3.267a3.54 3.54 0 0 0 1.598-2.37a3.77 3.77 0 0 0-.645-2.85a4.07 4.07 0 0 0-4.37-1.62c-.369.099-.72.253-1.042.458l-1.957 1.246a1.1 1.1 0 0 1-.314.138a1.227 1.227 0 0 1-1.5-.899a1.1 1.1 0 0 1-.01-.45a1.07 1.07 0 0 1 .48-.713l5.129-3.268a1.1 1.1 0 0 1 .314-.138a1.23 1.23 0 0 1 1.317.489c.157.222.23.492.207.762l-.018.19l.191.058a6.6 6.6 0 0 1 2.005 1.003l.263.192l.096-.295q.078-.235.123-.478a3.77 3.77 0 0 0-.644-2.85a4.07 4.07 0 0 0-4.371-1.621a3.7 3.7 0 0 0-1.042.458L7.34 7.357a3.54 3.54 0 0 0-1.6 2.37a3.77 3.77 0 0 0 .645 2.85a4.07 4.07 0 0 0 4.371 1.62c.369-.099.72-.253 1.042-.457l1.956-1.248q.148-.093.315-.137a1.23 1.23 0 0 1 1.5.899c.034.147.037.3.011.449a1.07 1.07 0 0 1-.482.713l-5.127 3.269a1.1 1.1 0 0 1-.314.137a1.23 1.23 0 0 1-1.317-.488a1.15 1.15 0 0 1-.207-.762l.017-.19l-.19-.058a6.6 6.6 0 0 1-2.005-1.003l-.263-.192l-.096.295a4 4 0 0 0-.123.478a3.77 3.77 0 0 0 .644 2.85a4.07 4.07 0 0 0 1.93 1.498"
				/></svg
			>

			<svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M12.001 4.8q-4.8 0-6 4.8q1.8-2.4 4.2-1.8c.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12q4.8 0 6-4.8q-1.8 2.4-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8m-6 7.2q-4.8 0-6 4.8q1.8-2.4 4.2-1.8c.913.228 1.565.89 2.288 1.624c1.177 1.194 2.538 2.576 5.512 2.576q4.8 0 6-4.8q-1.8 2.4-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12"
				/></svg
			>

			<svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M11.667 2H8.333a3.333 3.333 0 1 0 0 6.667h3.334z"
					opacity="0.6"
				/><path
					fill="currentColor"
					d="M11.667 8.667H8.333a3.333 3.333 0 0 0 0 6.666h3.334z"
					opacity="0.4"
				/><path
					fill="currentColor"
					d="M18.333 12a3.333 3.333 0 1 1-6.667 0a3.333 3.333 0 0 1 6.667 0"
				/><path
					fill="currentColor"
					d="M8.333 15.334h3.334v3.333a3.333 3.333 0 1 1-3.334-3.334"
					opacity="0.2"
				/><path
					fill="currentColor"
					d="M11.666 2h3.333a3.333 3.333 0 1 1 0 6.667h-3.333z"
					opacity="0.8"
				/></svg
			>
			<svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="m20 18.69l-7.3 4.05q-.75.39-1.5 0L4 18.69L17.05 5.54l.35-.1c.3 0 .47.13.5.4zM9.35 5.74L4.8 13.29L6.7 1.34c.03-.27.2-.4.5-.4c.2 0 .33.06.4.25l2.15 3.95zM13.85 7L4.3 16.59l7.25-12.3c.1-.2.25-.29.45-.29s.33.09.4.29z"
				/></svg
			>

			<svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M7.64 10.38c0 .25.02.45.07.62c.05.12.12.28.21.46c.04.04.05.1.05.15c0 .07-.04.13-.13.2l-.42.28c-.06.04-.12.06-.17.06c-.07 0-.13-.04-.2-.1c-.09-.1-.17-.2-.24-.31c-.06-.11-.13-.24-.2-.39c-.52.61-1.17.92-1.96.92c-.56 0-1-.16-1.33-.48c-.32-.32-.49-.75-.49-1.29c0-.55.2-1 .6-1.36c.41-.34.95-.52 1.63-.52c.23 0 .44.02.71.06c.23.03.5.08.76.14v-.48c0-.51-.1-.84-.31-1.07c-.22-.21-.57-.3-1.08-.3c-.24 0-.48.03-.72.08c-.25.06-.49.13-.72.23c-.11.04-.2.07-.23.08c-.05.02-.08.02-.11.02c-.09 0-.14-.06-.14-.2v-.33c0-.1.01-.18.05-.23q.045-.075.18-.12c.24-.14.51-.24.84-.32a4 4 0 0 1 1.04-.13q1.185 0 1.74.54c.37.36.55.91.55 1.64v2.15zm-2.7 1.02c.22 0 .44-.04.68-.12s.45-.23.63-.43c.11-.13.19-.27.25-.43c0-.16.05-.35.05-.58v-.27c-.2-.07-.4-.07-.62-.12a7 7 0 0 0-.62-.04c-.45 0-.77.09-.99.27s-.32.43-.32.76c0 .32.07.56.24.71c.16.17.39.25.7.25m5.34.71a.6.6 0 0 1-.28-.06c-.03-.05-.08-.14-.12-.26L8.32 6.65c-.04-.15-.06-.22-.06-.27c0-.11.05-.17.16-.17h.65c.13 0 .22.02.26.07c.06.04.1.13.14.26l1.11 4.4l1.04-4.4c.03-.13.07-.22.13-.26c.05-.04.14-.07.25-.07h.55c.12 0 .21.02.26.07c.05.04.1.13.13.26L14 11l1.14-4.46c.04-.13.09-.22.13-.26c.06-.04.14-.07.26-.07h.62c.11 0 .17.06.17.17c0 .03-.01.07-.02.12c0 0-.02.08-.04.15l-1.61 5.14c-.04.14-.08.21-.15.26c-.04.04-.13.07-.24.07h-.57c-.13 0-.19-.02-.27-.07a.45.45 0 0 1-.12-.26L12.27 7.5l-1.03 4.28q-.045.195-.12.27a.5.5 0 0 1-.27.06zm8.55.18c-.33 0-.7-.04-1.03-.12s-.59-.17-.76-.26a.5.5 0 0 1-.21-.19a.4.4 0 0 1-.04-.18v-.34c0-.14.05-.2.15-.2h.12c.04 0 .1.05.17.08c.22.1.47.18.73.23c.27.05.54.08.79.08c.42 0 .75-.07.97-.22c.23-.17.35-.36.35-.63c0-.19-.07-.34-.18-.47c-.12-.12-.35-.24-.67-.34l-.97-.3c-.48-.16-.84-.38-1.06-.68a1.58 1.58 0 0 1-.33-.97c0-.28.06-.52.18-.73c.12-.22.28-.4.46-.55c.22-.15.44-.26.71-.34q.39-.12.84-.12q.21 0 .45.03c.14.02.28.05.42.07c.14.04.26.07.38.11s.2.08.28.12c.09.05.16.1.2.16s.06.13.06.22v.32q0 .21-.15.21c-.05 0-.14-.03-.26-.08c-.37-.17-.8-.26-1.27-.26c-.38 0-.66.06-.89.19c-.2.12-.31.32-.31.59c0 .19.07.35.2.47c.13.13.38.25.73.37l.95.3c.48.14.82.36 1.03.64q.3.405.3.93c0 .28-.06.54-.17.77c-.12.22-.28.42-.5.58c-.19.17-.44.29-.72.38s-.62.13-.95.13m1.25 3.24C17.89 17.14 14.71 18 12 18c-3.85 0-7.3-1.42-9.91-3.77c-.21-.19-.02-.44.23-.29c2.82 1.63 6.29 2.62 9.89 2.62c2.43 0 5.1-.5 7.55-1.56c.37-.15.68.26.32.53M21 14.5c-.29-.37-1.86-.18-2.57-.1c-.21.03-.24-.16-.05-.3c1.25-.87 3.31-.6 3.54-.33c.24.3-.06 2.36-1.23 3.34c-.19.15-.36.07-.28-.11c.27-.68.86-2.16.59-2.5"
				/></svg
			>

			<svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="m23.835 11.703l-1.008-.623l-.028-.294l.866-.807a.348.348 0 0 0-.116-.578l-1.106-.414a9 9 0 0 0-.087-.285l.69-.96a.346.346 0 0 0-.226-.544l-1.166-.19a9 9 0 0 0-.14-.261l.49-1.076a.34.34 0 0 0-.028-.336a.35.35 0 0 0-.3-.154l-1.185.041a7 7 0 0 0-.188-.227l.273-1.153a.347.347 0 0 0-.417-.417l-1.153.273l-.228-.188l.041-1.184a.344.344 0 0 0-.49-.328l-1.076.49l-.262-.14l-.19-1.167a.348.348 0 0 0-.545-.226l-.96.69a9 9 0 0 0-.285-.086L14.597.453a.348.348 0 0 0-.578-.116l-.807.867a9 9 0 0 0-.294-.028L12.295.168a.346.346 0 0 0-.59 0l-.623 1.008l-.294.028L9.98.337a.346.346 0 0 0-.578.116l-.414 1.106l-.285.086l-.959-.69a.348.348 0 0 0-.545.226l-.19 1.167a9 9 0 0 0-.262.14l-1.076-.49a.346.346 0 0 0-.49.328l.041 1.184a8 8 0 0 0-.228.187l-1.153-.272a.347.347 0 0 0-.417.417l.271 1.153l-.186.227l-1.184-.042a.346.346 0 0 0-.328.49l.49 1.077a9 9 0 0 0-.14.262l-1.166.19a.348.348 0 0 0-.226.544l.69.958l-.087.286l-1.106.414a.348.348 0 0 0-.116.578l.866.807a9 9 0 0 0-.028.294l-1.008.623a.344.344 0 0 0 0 .59l1.008.623q.012.147.028.294l-.866.807a.346.346 0 0 0 .116.578l1.106.415q.042.144.087.285l-.69.959a.345.345 0 0 0 .227.544l1.166.19q.069.132.14.262l-.49 1.076a.346.346 0 0 0 .328.49l1.183-.041q.093.115.187.227l-.27 1.154a.346.346 0 0 0 .416.417l1.153-.272q.113.096.228.187l-.041 1.184a.344.344 0 0 0 .49.327l1.076-.49q.13.073.262.14l.19 1.167a.348.348 0 0 0 .545.227l.959-.69a9 9 0 0 0 .285.086l.414 1.107a.345.345 0 0 0 .578.115l.808-.865l.294.03l.623 1.006a.347.347 0 0 0 .59 0l.623-1.007q.148-.013.294-.03l.807.866a.348.348 0 0 0 .578-.115l.414-1.107a9 9 0 0 0 .285-.087l.959.69a.345.345 0 0 0 .545-.226l.19-1.166l.262-.14l1.076.49a.347.347 0 0 0 .49-.328l-.041-1.184a7 7 0 0 0 .227-.187l1.153.272a.347.347 0 0 0 .417-.416l-.272-1.155q.095-.112.187-.227l1.184.041a.344.344 0 0 0 .328-.49l-.49-1.076q.072-.13.141-.262l1.166-.19a.348.348 0 0 0 .226-.544l-.69-.959l.087-.285l1.106-.414a.346.346 0 0 0 .116-.579l-.866-.807q.016-.147.028-.294l1.008-.624a.344.344 0 0 0 0-.589zm-6.742 8.355a.714.714 0 0 1 .299-1.396a.714.714 0 1 1-.3 1.396zm-.342-2.314a.65.65 0 0 0-.771.5l-.358 1.669a8.7 8.7 0 0 1-3.619.78a8.7 8.7 0 0 1-3.695-.815L7.95 18.21a.65.65 0 0 0-.772-.5l-1.473.317a9 9 0 0 1-.761-.898h7.167c.081 0 .136-.014.136-.088v-2.536c0-.074-.054-.088-.136-.088h-2.096v-1.608h2.268c.206 0 1.106.059 1.393 1.209c.09.353.288 1.504.424 1.873c.134.413.683 1.238 1.268 1.238h3.572a1 1 0 0 0 .13-.013a9 9 0 0 1-.813.952zm-9.914 2.28a.714.714 0 1 1-.3-1.396a.714.714 0 0 1 .3 1.396M4.117 8.997a.714.714 0 1 1-1.303.58a.714.714 0 0 1 1.304-.58m-.834 1.981l1.534-.682a.65.65 0 0 0 .33-.858l-.316-.715h1.244v5.602H3.567a8.8 8.8 0 0 1-.284-3.348zm6.734-.543V8.784h2.96c.153 0 1.08.177 1.08.87c0 .574-.712.78-1.296.78zm10.757 1.486q0 .329-.024.651h-.9c-.09 0-.127.059-.127.148v.413c0 .973-.548 1.184-1.03 1.238c-.457.052-.964-.191-1.027-.472c-.27-1.518-.72-1.843-1.43-2.403c.882-.56 1.799-1.386 1.799-2.492c0-1.193-.82-1.945-1.377-2.315c-.783-.516-1.65-.62-1.883-.62H5.468a8.77 8.77 0 0 1 4.907-2.77l1.098 1.152a.65.65 0 0 0 .918.02l1.227-1.173a8.78 8.78 0 0 1 6.004 4.276l-.84 1.898a.65.65 0 0 0 .33.859l1.618.718q.042.43.042.872zm-9.3-9.6a.713.713 0 1 1 .984 1.032a.714.714 0 0 1-.984-1.031m8.339 6.71a.71.71 0 0 1 .939-.362a.714.714 0 1 1-.94.364z"
				/></svg
			>

			<svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" viewBox="0 0 256 256"
				><g fill="none"
					><rect width="256" height="256" class="fill-on-secondary" rx="60" /><path
						class="fill-secondary"
						d="m128 34l95 164.853H33z"
					/></g
				></svg
			>

			<svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
				/></svg
			>

			<svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3.5em" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47c1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.23 0L10 19.65c-.08-.03-.16-.04-.21-.01c-.53.3-.63.36-1.12.51c-.12.04-.31.11.07.32l2.48 1.47q.36.21.78.21t.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39c0 1.61 1.26 2.08 3.3 2.28c2.43.24 2.62.6 2.62 1.08c0 .83-.67 1.18-2.23 1.18c-1.98 0-2.4-.49-2.55-1.47a.226.226 0 0 0-.22-.18h-.96c-.12 0-.21.09-.21.22c0 1.24.68 2.74 3.94 2.74c2.35 0 3.7-.93 3.7-2.55c0-1.61-1.08-2.03-3.37-2.34c-2.31-.3-2.54-.46-2.54-1c0-.45.2-1.05 1.91-1.05c1.5 0 2.09.33 2.32 1.36c.02.1.11.17.21.17h.97c.05 0 .11-.02.15-.07c.04-.04.07-.1.05-.16C17.56 8.82 16.38 8 14 8"
				/></svg
			>
		</div>
	</main>
</section>

<style lang="postcss">
	.section-hero {
		margin-inline: auto;
		display: flex;
		min-height: 100dvh;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		padding: theme('size.6');
		padding-top: theme('size.20');
	}

	.main-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.5rem;
		transition: grid 250ms;

		.profile,
		.biography,
		.stat,
		.technologies {
			border-radius: theme('borderRadius.3xl');
			overflow: hidden;
			height: 100%;
			width: 100%;
		}

		.profile {
			background-color: theme('colors.secondary');
			color: theme('colors.on-secondary');
			position: relative;
			grid-column: 1/3;

			.profile-content {
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: 100%;
				inset: 0;
				z-index: 10;
				padding: theme('size.6');

				@apply text-display-medium;

				figure {
					display: inline-flex;
					width: 100%;
					justify-content: flex-end;

					:global(img) {
						height: 260px;
						width: 260px;
						border-radius: 999px;
						object-fit: cover;
						backdrop-filter: blur(48px);
						@apply ring-4 ring-secondary-container;
					}
				}

				.profile-text {
					display: flex;
					width: 100%;
					align-items: center;
					justify-content: space-between;
				}

				.btn-trigger {
					display: grid;
					place-items: center;
					border-radius: 999px;
					background-color: theme('colors.on-secondary');
					padding: theme('size.6');
				}
			}

			#logoIcon {
				position: absolute;
				bottom: 0;
				right: 0;
				filter: blur(28px);
			}
		}

		.titulo {
			display: none;
			font-size: 5rem;
			grid-column: 1/3;
			font-variation-settings: 'wght' 500;
			align-self: center;
		}

		.biography {
			display: flex;
			grid-column: 1/3;
			flex-direction: column;
			text-wrap: pretty;
			gap: theme('size.4');
			padding: 1rem;

			@apply text-body-medium;
		}

		.stat {
			display: inline-flex;

			grid-column: span 1;

			@apply text-title-large ring-8 ring-inset ring-tertiary;

			div {
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 1.5rem 1rem;
			}
		}

		.technologies {
			gap: 1rem;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			grid-column: 1/3;
			padding: 1rem;
			color: theme('colors.secondary');

			@apply ring-8 ring-inset ring-secondary;
		}
	}

	.text-field {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: theme('size[0.5]');

		@apply text-label-large;

		input,
		textarea {
			outline: none;
			height: theme('size.8');
			width: 100%;
			padding: theme('size.2');
			color: theme('colors.on-secondary');
			background-color: transparent;
			border-radius: theme('borderRadius.md');
			transition: 250ms ease-in-out;
			caret-color: theme('colors.on-secondary');

			&:hover {
				background-color: theme('colors.on-secondary' / .1);
			}

			&:focus-visible {
				@apply ring-1;
			}

			&::placeholder {
				color: theme('colors.surface');
			}

			@apply ring-2 ring-secondary-container;
		}

		textarea {
			height: 100%;
			resize: true;
		}
	}

	form {
		header {
			h1 {
				@apply text-title-large;
			}

			h2 {
				@apply text-title-small
			}
		}

		main {
			display: flex;
			flex-direction: column;
			gap: theme('size.4');

			ul {
				display: flex;
				width: 100%;
				flex-direction: column;
				gap: theme('size.4');
			}
		}
	}

	.slanted {
		font-variation-settings:
			'wght' 500,
			'slnt' -5;
	}

	@media (min-width: 768px) {
		.main-grid {
			.profile {
				grid-column: 1/2;
			}

			.titulo {
				grid-column: 2/3;
			}

			.biography {
				grid-column: 2/3;
			}

			.stat {
				grid-column: span 1;

				@apply text-headline-small;
			}

			.technologies {
				grid-column: 1/3;
				gap: 0.5rem;
			}
		}
	}

	@media (min-width: 1024px) {
		.main-grid {
			grid-template-columns: repeat(6, 1fr);
			grid-template-rows: 6rem 7rem 7rem 1fr;

			.profile {
				grid-column: 1/3;
				grid-row: 1/5;
			}

			.titulo {
				display: block;
				grid-column: 3/7;
			}

			.biography {
				grid-column: 3/5;
				grid-row: 2/5;
			}

			.stat {
				grid-column: 5/7;

				@apply text-headline-large;
			}

			.technologies {
				gap: 1rem;
				grid-column: 5/7;
			}
		}
	}
</style>
