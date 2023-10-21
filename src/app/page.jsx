'use client';

import { useMemo, useState } from 'react';
import Posts from '@/components/Posts/Posts';
import PostForm from '@/components/PostForm/PostForm';
import MySelect from '@/components/ui/select/MySelect';
import MyInput from '@/components/ui/input/MyInput';

export default function HomePage() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'CC 1', body: 'FF JavaScript - programming language' },
    { id: 2, title: 'AA 2', body: 'EE JavaScript - programming language' },
    { id: 3, title: 'BB 3', body: 'HH JavaScript - programming language' }
  ]);

  const [sortOption, setSortOption] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    if (sortOption) {
      return [...posts].sort((a, b) => a[sortOption].localeCompare(b[sortOption]));
    } else {
      return posts;
    }
  }, [sortOption, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, sortedPosts]);

  function createPost(post) {
    setPosts([...posts, post]);
  }

  function removePost(post) {
    setPosts(posts.filter(item => item.id !== post.id));
  }

  function sortPostsBy(option) {
    setSortOption(option);
  }

  return (
    <main className='max-w-screen-md m-auto flex flex-col'>
      <PostForm create={createPost} />
      <MyInput
        value={searchQuery}
        onChange={evt => setSearchQuery(evt.target.value)}
        placeholder='Поиск...'
      />
      <MySelect
        value={sortOption}
        onChange={sortPostsBy}
        defaultOption={'Сортировка'}
        options={[
          { text: 'По названию', value: 'title' },
          { text: 'По тексту', value: 'body' }
        ]}
      />
      {sortedAndSearchedPosts.length ? (
        <Posts remove={removePost} posts={sortedAndSearchedPosts} title='Posts about JS' />
      ) : (
        <h1 className='text-4xl font-medium mt-6'>Posts not found</h1>
      )}
    </main>
  );
}
