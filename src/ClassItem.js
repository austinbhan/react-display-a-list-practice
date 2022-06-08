import React from 'react';

export default function ClassItem({
  name,
  about // How to call nested elements again? 
}) {
  return <div>
    <p>{name}</p>
    <p>{about.age}</p>
    <p>{about.grade}</p>
  </div>;
}