export const config = { runtime: "edge" };
export default async function (req) {
  const url = new URL(req.url);
  const res = await fetch("https://discord.com" + url.pathname + url.search, {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "Mozilla/5.0"
    },
    body: req.method !== "GET" ? await req.text() : null
  });
  return new Response(await res.text(), { status: res.status });
}

