import React, {useState} from 'react';
import Link from 'next/link';
import Loader from '../Loader';

function CardHeader(props: any) {
  const [cardHeaderState] = useState(props);

  return (
    <img
      className='card-header-img'
      src={cardHeaderState.image}
      alt={cardHeaderState.title}
    />
  );
}

function CardBody(props: any) {
  const [cardBodyState] = useState(props);
  return (
    <div className='card-body'>
      <p className='date'>{cardBodyState.date}</p>
      <h3 className='card-title'>{cardBodyState.title}</h3>
      <p className='card-category-row'>
        {cardBodyState.category &&
          cardBodyState.category.map((category: any) => {
            return <span key={cardBodyState.title + category}>{category}</span>;
          })}
      </p>
      <div className='screen-reader-text'>
        <p className='card-text'>{cardBodyState.text} </p>
      </div>
    </div>
  );
}

function Card(props: any) {
  const [cardState] = useState(props);

  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = () => {
    setIsLoading(true);
  };

  return isLoading ? (
    <Loader/>
  ) : (
    <Link
      className='article-link'
      href={cardState.url}
      key={cardState.url}
      passHref
    >
      <div className='card' onClick={toggleLoading}>
        <CardHeader {...cardState} />
        <CardBody {...cardState} />
      </div>
    </Link>
  );
}

// Card.propTypes = {
// 	orientation: PropTypes.oneOf(['horizontal', 'vertical']),

// 	title: PropTypes.string,
// 	date: PropTypes.string,
// 	text: PropTypes.string,
// 	image: PropTypes.string,
// 	url: PropTypes.string,
// 	category: PropTypes.array,
// };

export default Card;
