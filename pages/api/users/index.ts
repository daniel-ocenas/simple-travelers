import UserGet from 'lib/mongodb/UserGet';
import UserPost from 'lib/mongodb/UserPost';

const bcrypt = require('bcrypt');

export default async function User(req: any, res: any) {
  const httpMetod = req.method;

  switch (httpMetod) {
    case 'GET':
      try {
        const articles = await UserGet(req.body);
        res.status(200).json(articles);
      } catch (e) {
        console.error(e);
        res.status(500).json('User could not be retrieved');
      }
      break;
    case 'POST':
      try {
        const result = await UserPost(req.body);
        console.log('result', result);

        res.status(200).json(result);
      } catch (e) {
        res.status(500).json('User could not be created');
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end('Method not allowed');
      break;
  }
}
