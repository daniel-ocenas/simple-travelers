import parse from 'html-react-parser';
import React from 'react';

const ArticleHeader = (props: any) => {
  return (
    <h2 className={props.class} style={{ textAlign: 'center' }}>
      {parse(props.text)}
    </h2>
  );
};

export default ArticleHeader;
