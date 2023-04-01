import type { Handle } from '@sveltejs/kit';
 
export const handle = (async ({ event, resolve }) => {
 
    if (!event.request.headers.get("Accept")?.includes("text/html")) {
        return new Response("Please visit from a browser.", {headers: {"Content-Type": "text/html"}, status: 406});
    }
 
  return await resolve(event);
}) satisfies Handle;