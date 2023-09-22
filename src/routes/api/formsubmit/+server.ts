import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

interface Body {
    nome: string;
    email: string;
    assunto: string;
    mensagem: string;
}

export const POST = (async ({ request }) => {
	const body = await request.json() as Body;
    console.log(body);
    
	const res = await fetch('https://formsubmit.co/ajax/realfakenerd@gmail.com', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({
			name: body.nome,
            _subject: body.assunto,
            email: body.email,
			message: body.mensagem,
		})
	});

	return json(await res.json());
}) satisfies RequestHandler;
