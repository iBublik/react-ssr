import React from 'react';

import BlogList from '../ui/BlogList';

const items = [
  {
    image: {
      src: 'https://facebook.github.io/react/img/logo.svg',
      width: 100, height: 100
    }, text: 'Hello from React'
  }, {
    image: {
      src: 'http://nyc.phoenix.camp/images/logo.png',
      width: 100, height: 100
    }, text: 'Hello from Phoenix'
  }
];

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items };
  }

  render() {
    const { items } = this.state;
    return (
      <div className="blog-page">
        <BlogList items={items}/>
      </div>
    );
  }
}

export default BlogPage;
