import PostItem from '../PostItem/PostItem';
import PostsLayout from './layout';
import { useState } from 'react';

export default function Posts({ posts, title }) {
  return (
    <PostsLayout title={title}>
      {posts.map((item, index) => {
        return <PostItem position={index + 1} key={item.id} post={item} />;
      })}
    </PostsLayout>
  );
}
