import { ObjectId } from 'bson';
import { ArticleProps } from 'components/ArticleEditor/CreateArticle/ComponentSelector/Article.types';
import ArticleList from 'lib/mongodb/ArticleList';
import { connectToDatabase } from 'lib/mongodb/mongodb';

async function articleCreate(lang: string, article: ArticleProps) {
  article.date = new Date(Date.parse(article.dateCreated ?? '')).toLocaleDateString('sk', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  article.dateCreated = article.dateCreated ?? new Date().toLocaleDateString('sk');
  const { db } = await connectToDatabase();

  const _id = new ObjectId(article._id);
  const newArticle = {
    ...article,
    _id,
  };

  const query = { _id };
  const update = { $set: newArticle };
  const options = { upsert: true };
  return await db.collection('articles-' + lang).updateOne(query, update, options);
}

export default async function Articles(req: any, res: any) {
  const httpMetod = req.method;

  switch (httpMetod) {
    case 'GET':
      try {
        const articles = await ArticleList('sk');
        res.status(200).json(articles);
      } catch (e) {
        console.error(e);
        res.status(500).json('Article could not be retrieved');
      }

      // CORS
      // return new NextResponse('Hello, Next.js!', {
      //   status: 200,
      //   headers: {
      //     'Access-Control-Allow-Origin': '*',
      //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      //     'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      //   },
      // });

      break;

    case 'POST':
      try {
        const result = await articleCreate('sk', req.body);
        res.status(200).json(result);
      } catch (e) {
        res.status(500).json('Acrticle could not be created');
      }

      break;
    default:
      res.setHeader('Allow', ['GET' /*, 'POST' */]);
      res.status(405).end('Method not allowed');
      break;
  }
}
