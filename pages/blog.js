import React from 'react';
import Head from 'next/head';
import BlogIndex from 'next-mdx-blog/dist/components/list';

import postsData from '../posts';

postsData.forEach(async post => {
  post.file = import('../pages' + post.filePath.replace('pages', ''));
});

const blogPage = ({ posts }) => (
  <div className="blog-index">
    <Head>
      <title>Blog Posts</title>
    </Head>

    <BlogIndex posts={posts} stubClassName="content" />
  </div>
);

blogPage.getInitialProps = async () => {
  console.log('getInitialProps');
  await Promise.all(
    postsData.map(async post => {
      post.BlogPost = (await post.file).default;

      return post;
    })
  );

  console.log(postsData);
  return { posts: [...postsData] };
};

export default blogPage;
