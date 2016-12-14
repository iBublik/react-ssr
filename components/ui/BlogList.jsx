import React from 'react';

import BlogItem from './BlogItem';

const BlogList = ({ items }) => {
  const blogItems = items.map((item, index) => (
    <div key={index}>
      <BlogItem {...item}/>
    </div>
  ));
  return <div className="blog-list">{blogItems}</div>;
};

export default BlogList;
