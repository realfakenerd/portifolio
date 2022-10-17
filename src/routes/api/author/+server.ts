import { BUTTER_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch }) => {
	try {
		const res = await fetch('https://api.buttercms.com/v2/authors/?auth_token=' + BUTTER_API_KEY);
		const { data } = await res.json();
		const details = data[0];

		return json({
			first_name: details.first_name,
			last_name: details.last_name,
			email: details.email,
			bio: details.bio,
			title: details.title,
			linkedin_url: details.linkedin_url,
			twitter_handle: details.twitter_handle,
			profile_image: details.profile_image		
        });
	} catch (error: any) {
		throw new Error(error);
	}
};
