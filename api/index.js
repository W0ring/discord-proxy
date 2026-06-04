export default async function handler(req, res) {
    const r = await fetch("https://discord.com" + req.url, {
        method: req.method,
        headers: { "Content-Type": "application/json" },
        body: req.method !== "GET" ? JSON.stringify(req.body) : null
    });
    res.status(r.status).end();
}
