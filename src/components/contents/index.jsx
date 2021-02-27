import React from 'react';


//import { Container } from 'reactstrap';



const Content = ({ tag: Tag, className, ...restProps }) => {
  const classes = "content";
  return <Tag className={classes} {...restProps} />;
};

Content.defaultProps = {
  tag: "div",
};

export default Content;