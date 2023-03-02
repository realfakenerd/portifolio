import type { Articles } from '$lib/fromAPI';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }) => {
    const res = await fetch("/api/posts");
    
    const data = await res.json() as Articles[];
    return {
        articles: data
    }
};
