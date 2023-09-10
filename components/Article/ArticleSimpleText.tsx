import React from 'react'
import parse from 'html-react-parser'

const ArticleSimpleText = (props: any) => {
  return <>{parse(props.text)}</>
}

export default ArticleSimpleText
