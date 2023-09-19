import React from 'react';
import Button from '../ui/button/Button';
import './PostItem.css';

export default function PostItem({ post, position, removePost }) {
  return (
    <li className='post'>
      <div className='post__content'>
        <h3 className='post__title'>
          {position}. {post.title}
        </h3>
        <p className='post__description'>{post.body}</p>
      </div>
      <Button onClick={() => {removePost(post)}} className='post__btn'>
        Delete
      </Button>
    </li>
  );
}
