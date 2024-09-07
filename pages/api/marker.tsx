import ArticleList from 'data/ArticleList';
import MarkerList from 'data/MarkerList';

export default async function Marker(req: any, res: any) {
  const httpMetod = req.method;

  switch (httpMetod) {
    case 'GET':
      try {
        const articleList = await ArticleList('sk');
        const sortedArticleList = [...articleList.articles].sort((a: any, b: any) => {
          const start = +new Date(b.dateCreated);
          return +new Date(a.dateCreated) - start;
        });

        const markerList = await MarkerList('sk');
        const joinedList = sortedArticleList.concat(markerList.markerList);

        const response = joinedList.map(function (ele: any) {
          ele['isOpen'] = false;
          return ele;
        });

        res.status(200).json(response);
      } catch (e) {
        res.status(500).json('Markers could not be retrieved');
      }

      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end('Method not allowed');
  }
}
