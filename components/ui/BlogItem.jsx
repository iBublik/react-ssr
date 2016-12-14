import React from 'react';

import Image from './Image';
import TextBox from './TextBox';

const BlogItem = ({ image, text }) => (
  <div className="blog-item">
    <Image {...image}/>
    <TextBox content={text}/>
  </div>
);

export default BlogItem;
