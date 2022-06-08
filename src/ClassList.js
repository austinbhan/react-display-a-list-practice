import React from 'react';
import ClassItem from './ClassItem';

export default function ClassList({ classroom }) {
  return <div>
    {
      classroom.map((item, i) => <ClassItem {...item} key={item.name + i} />)
    }
  </div>;
}
