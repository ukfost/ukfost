import { kv } from "@vercel/kv";

export async function post({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");

  await kv.lpush("emails", email);

  return new Response(null, {
    status: 302,
    headers: { Location: "/volunteer" },
  });
}
