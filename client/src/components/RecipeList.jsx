import React from 'react';
import RecipeListItem from './RecipeListItem';


const RecipeList = (props) => {

  const { recipes, handleFavorite, favoriteRecipesIds } = props;


  const recipeListArray = recipes.map((recipe, index) =>
    <li key={index}>
      <RecipeListItem

        id={recipe.id}
        recipe_name={recipe.recipe_name}
        chef_name={recipe.chef_name}
        budget={recipe.budget}
        time={recipe.cook_time}
        cuisine={recipe.cuisine_name}
        description={recipe.description}
        photo_link={recipe.photo_link}
        handleFavorite={handleFavorite}
        favoriteRecipesIds={favoriteRecipesIds}
      />
    </li>
  );
  return (
    <ul>
      {recipeListArray}
    </ul>
  );
};

export default RecipeList;