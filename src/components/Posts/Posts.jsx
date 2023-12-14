import PostItem from '../PostItem/PostItem';
import PostsLayout from './layout';

export default function Posts({ posts, title, remove }) {
  if (!posts.length) {
    title = 'Posts not found';
  }

  return (
    <PostsLayout title={title}>
      {posts.map((item, index) => {
        return <PostItem position={index + 1} key={item.id} post={item} removePost={remove} />;
      })}
    </PostsLayout>
  );
}
