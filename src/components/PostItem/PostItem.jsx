import React from 'react'
import Button from '../ui/button/Button'
import './PostItem.css'

export default function PostItem({ post }) {
  return (
    <li className='post'>
      <div className='post__content'>
        <h3 className='post__title'>{post.id}. {post.title}</h3>
        <p className='post__description'>{post.body}</p>
      </div>
      <Button className='post__btn'>Удалить</Button>
    </li>
  );
}
