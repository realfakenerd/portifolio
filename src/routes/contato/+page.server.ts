import type { Actions } from './$types';

export const prerender = false;
export const actions: Actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();
		const nome = data.get('nome');
		const email = data.get('email');
		const assunto = data.get('assunto');
		const mensagem = data.get('mensagem');

		console.log('ACTION :>>',{
			nome,
			email,
			assunto,
			mensagem
		});

		const res = await fetch('/api/formsubmit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({nome,email,assunto,mensagem})
		});

        console.log('ACTION :>>',await res.json());
        
	}
};
