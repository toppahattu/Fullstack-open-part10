import React from 'react';
import Text from "./Text";

const SubHeading = ({ style, ...props }) => {  
  return <Text fontSize='subheading' fontWeight={'bold'} style={style} {...props} />;
};

export default SubHeading;