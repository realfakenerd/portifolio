import type { Post } from '$lib/types';
import type {PageLoadEvent} from './$types'

export async function load({fetch,params}:PageLoadEvent) {
    const res = await fetch(`https://api.buttercms.com/v2/posts/${params.articleId}/?auth_token=1c03d4ec998c5609c847a1198e4b6f338e1461fc`)

    return {
        block: await res.json()
    }
}