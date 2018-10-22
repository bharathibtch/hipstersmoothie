import React from 'react';
import Head from 'next/head';
import BlogIndex from 'next-blog/dist/components/list';

import posts from '../posts';

posts.forEach(async post => {
  post.file = import('../pages' + post.filePath.replace('pages', ''));
});

export default () => (
  <div className="blog-index">
    <Head>
      <title>Blog Posts</title>
    </Head>

    <BlogIndex posts={posts} />
  </div>
);
