'use client';

import { useState } from 'react';
import Posts from '../components/Posts/Posts';
import PostForm from './../components/PostForm/PostForm';

export default function HomePage() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 1', body: 'JavaScript - programming language' },
    { id: 2, title: 'JavaScript 2', body: 'JavaScript - programming language' },
    { id: 3, title: 'JavaScript 3', body: 'JavaScript - programming language' }
  ]);

  function createPost(post) {
    setPosts([...posts, post]);
  };

  function removePost(post) {
    setPosts(posts.filter(item => item.id !== post.id))
  }

  return (
    <main className='max-w-screen-md m-auto flex flex-col'>
      <PostForm create={createPost} />
      <Posts remove={removePost} posts={posts} title='Posts about JS' />
    </main>
  );
}
