export const config = { runtime: "edge" };

export default async function handler(req) {
  const url = new URL(req.url);
  const discordUrl = "https://discord.com" + url.pathname + url.search;

  const res = await fetch(discordUrl, {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
    },
    body: req.method !== "GET" && req.method !== "HEAD" ? await req.text() : null
  });

  return new Response(await res.text(), {
    status: res.status,
    headers: { "Content-Type": "application/json" }
  });
}
