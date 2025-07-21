export default async function handler(req: any, res: any) {
  const token = process.env.INSTAGRAM_GRAPH_TOKEN; // long-lived token
  const fields = 'id,media_type,media_url,permalink';
  const url = `https://graph.facebook.com/v17.0/me/media?fields=${fields}&access_token=${token}`;

  const r = await fetch(url);
  const data = await r.json();

  if (!r.ok) return res.status(r.status).json(data);
  res.status(200).json(data.data.slice(0, 9));
}
