import InstagramTokenGet from 'lib/mongodb/InstagramTokenGet';

export default async function Config(req: any, res: any) {
  const httpMetod = req.method;

  switch (httpMetod) {
    case 'GET':
      try {
        const response = await InstagramTokenGet();
        res.status(200).json(response.config);
      } catch (e) {
        console.error(e);
        res.status(500).json('Config could not be retrieved');
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end('Method not allowed');
      break;
  }
}
