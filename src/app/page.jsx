'use client';
import React from 'react';

import { useState } from 'react';
import Posts from '../components/Posts/Posts';
import Input from '../components/ui/input/Input';
import Button from '../components/ui/button/Button';

export default function HomePage() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 1', body: 'JavaScript - programming language' },
    { id: 2, title: 'JavaScript 2', body: 'JavaScript - programming language' },
    { id: 3, title: 'JavaScript 3', body: 'JavaScript - programming language' }
  ]);

  const [post, setPost] = useState({ title: '', body: '' });

  function submitHandler(e) {
    e.preventDefault();

    if (post.title && post.body) {
      setPosts([...posts, { ...post, id: Date.now() }]);
    }

    setPost({ title: '', body: '' });
  }

  return (
    <main className='max-w-screen-md m-auto flex flex-col'>
      <form onSubmit={submitHandler} className='flex flex-col gap-2 my-4'>
        <Input
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
          placeholder='post title'
        />
        <Input
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
          placeholder='post text'
        />
        <Button className='self-end'>Save post</Button>
      </form>
      <Posts posts={posts} title='Posts about JS' />
    </main>
  );
}
