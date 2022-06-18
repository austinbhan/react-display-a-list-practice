import React from 'react';

export default function RecipesItem({ 
  name,
  ingredients
}) {
  return (
    <div className='recipes'>
      <p>Recipe: { name }</p>
      <p>Ingredients: { ingredients [0] }</p>
      <p>Ingredients: { ingredients [1] }</p>
    </div>
  );
}