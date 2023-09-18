import PostItem from '../PostItem/PostItem';
import PostsLayout from './layout';
import { useState } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 1', body: 'JavaScript - язык программирования' },
    { id: 2, title: 'JavaScript 2', body: 'JavaScript - язык программирования' },
    { id: 3, title: 'JavaScript 3', body: 'JavaScript - язык программирования' }
  ]);
  return (
    <PostsLayout>
      {posts.map(item => {
        return <PostItem key={item.id} post={item} />;
      })}
    </PostsLayout>
  );
}
