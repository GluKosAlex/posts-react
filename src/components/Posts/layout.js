import './Posts.css';

export default function PostsLayout({ children }) {
  return (
    <section className='posts'>
      <h2 className='posts__title'>Posts about programming languages</h2>
      <ul className='posts__list'>
        {children}
      </ul>
    </section>
  );
}

