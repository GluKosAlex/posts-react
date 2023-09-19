import { useState } from 'react';
import Input from '../ui/input/Input';
import Button from '../ui/button/Button';

export default function PostForm({ create }) {
  const [post, setPost] = useState({ title: '', body: '' });

  function submitHandler(e) {
    e.preventDefault();

    const newPost = { ...post, id: Date.now() };
    if (post.title && post.body) create(newPost);

    setPost({ title: '', body: '' });
  }

  return (
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
  );
}
