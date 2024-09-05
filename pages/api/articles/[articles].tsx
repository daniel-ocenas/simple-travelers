import ArticleGet from 'data/ArticleGet';

export default async function handler(req: any, res: any) {
  const httpMetod = req.method;

  switch (httpMetod) {
    case 'GET':
      try {
        const articleUrl = req.query.articles;
        const result = await ArticleGet('sk', articleUrl);
        res.status(200).json(result.article);
      } catch (e) {
        res.status(500).json('Article could not be retrieved');
      }

      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end('Method not allowed');
  }
}
