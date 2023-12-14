'use client';

import { useMemo, useState } from 'react';
import Posts from '@/components/Posts/Posts';
import PostForm from '@/components/PostForm/PostForm';
import PostFilter from './../components/PostFilter/PostFilter';

export default function HomePage() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'CC 1', body: 'FF JavaScript - programming language' },
    { id: 2, title: 'AA 2', body: 'EE JavaScript - programming language' },
    { id: 3, title: 'BB 3', body: 'HH JavaScript - programming language' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    } else {
      return posts;
    }
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((item) => item.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedPosts]);

  function createPost(post) {
    setPosts([...posts, post]);
  }

  function removePost(post) {
    setPosts(posts.filter((item) => item.id !== post.id));
  }

  return (
    <main className='max-w-screen-md m-auto flex flex-col'>
      <PostForm create={createPost} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <Posts remove={removePost} posts={sortedAndSearchedPosts} title='Posts about JS' />
    </main>
  );
}
