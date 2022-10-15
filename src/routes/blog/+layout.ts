import type { AllPosts } from '$lib/types';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }) => {
    const base = 'https://api.buttercms.com/v2/'
    const apitoken='1c03d4ec998c5609c847a1198e4b6f338e1461fc'
    const url = `
        ${base}posts/?auth_token=${apitoken}
    `
    const res = await fetch(url);
    
    
    const svelteData = await res.json() as AllPosts;
    return {
        posts: svelteData.data,
        meta: svelteData.meta
    }
};