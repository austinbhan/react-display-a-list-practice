import React from 'react';
import RecipesItem from './RecipesItem';

export default function RecipesList({ recipes }) {
  return (
    <div>
      {
        recipes.map((recipe, i) => <RecipesItem {...recipe} key={recipe.name + i} />)
      }
    </div>);
}