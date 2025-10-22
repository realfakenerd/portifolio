import { resolve } from "$app/paths";
import { query } from "$app/server";

export const repos = query(async () => {
    const res = await fetch(resolve('/api/git/repo'));
    const data = await res.json() as Repo[];
    return data
})