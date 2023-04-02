import { building } from '$app/environment';
import type { Handle } from '@sveltejs/kit';
 
export const handle = (async ({ event, resolve }) => {
 
  //!building is a gross hack; idially adapter-cloudflare should have Accept: text/html
  if (!event.request.headers.get("Accept")?.includes("text/html") && !building) {
    return new Response("Please visit from a browser.", {headers: {"Content-Type": "text/html"}, status: 406});
  }

  return await resolve(event);
}) satisfies Handle;