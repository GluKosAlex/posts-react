import { useState } from 'react';
import MyInput from '../ui/input/MyInput';
import MyButton from '../ui/button/MyButton';
import './PostForm.css';

export default function PostForm({ create }) {
  const [post, setPost] = useState({ title: '', body: '' });

  function submitHandler(e) {
    e.preventDefault();

    const newPost = { ...post, id: Date.now() };
    if (post.title && post.body) create(newPost);

    setPost({ title: '', body: '' });
  }

  return (
    <form onSubmit={submitHandler} className='form'>
      <MyInput
        className='form__input'
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder='post title'
      />
      <MyInput
        className='form__input'
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder='post text'
      />
      <MyButton className='self-end form__btn'>Save post</MyButton>
    </form>
  );
}
