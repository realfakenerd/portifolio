import type { Actions } from './$types';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');
    const name = data.get('name');
    const subject = data.get('subject');
    const message = data.get('message');

    const resolution = {
      email, name, subject, message
    }

    console.log(resolution)
  }
} satisfies Actions;
