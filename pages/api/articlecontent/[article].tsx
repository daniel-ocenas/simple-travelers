import ArticleContentGet from '../../../data/ArticleContentGet';

export default async function handler(req: any, res: any) {
  const httpMetod = req.method;

  switch (httpMetod) {
    case 'GET':
      const { article } = req.query;
      const response = await ArticleContentGet('sk', article);
      res.status(200).json(response.article);
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end('Method not allowed');
      break;
  }
}
