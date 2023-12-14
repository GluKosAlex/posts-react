import React from 'react';
import './PostFilter.css';
import MyInput from '../ui/input/MyInput';
import MySelect from '../ui/select/MySelect';

export default function PostFilter({ filter, setFilter }) {
  return (
    <div className='posts-filters'>
      <MyInput
        value={setFilter.query}
        onChange={(evt) => setFilter({ ...filter, query: evt.target.value })}
        placeholder='Поиск...'
      />
      <MySelect
        value={filter.sort}
        onChange={(sortOption) => setFilter({ ...filter, sort: sortOption })}
        defaultOption={'Sort'}
        options={[
          { text: 'by title', value: 'title' },
          { text: 'by text', value: 'body' },
        ]}
      />
    </div>
  );
}
