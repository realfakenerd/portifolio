import { beforeNavigate } from "$app/navigation";
import { navigating } from "$app/stores";
import { onDestroy } from "svelte";

function getNavigationStore() {
    const callbacks: ((val?: any) => void)[] = [];

    const navigation = {
        ...navigating,
        complete: async () => {
            await new Promise((res, _) => {
                callbacks.push(res);
            });
        }
    };

    const unsubscribe = navigating.subscribe((n) => {
        if (n === null) {
            while (callbacks.length > 0) {
                const res = callbacks.pop();
                res?.();
            }
        }
    });

    onDestroy(() => {
        unsubscribe();
    });

    return navigation;
}

export function preparePageTransition() {
    const navigation = getNavigationStore();

    beforeNavigate(() => {
        if (!(document as any).createDocumentTransition) return;

        try {
            const transition = (document as any).createDocumentTransition();
            const navigationComplete = navigation.complete();
            transition.start(async () => {
                await navigationComplete;
            });
        } catch (e) {
            console.error(e);

        }
    });
}