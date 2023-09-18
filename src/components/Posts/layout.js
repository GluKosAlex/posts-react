import './Posts.css';

export default function PostsLayout({ children, title }) {
  return (
    <section className='posts'>
      <h2 className='posts__title'>{title}</h2>
      <ul className='posts__list'>
        {children}
      </ul>
    </section>
  );
}

