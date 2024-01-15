import React from 'react';
import RecipeList from '../components/RecipeList';
import { Link } from 'react-router-dom';
import useFavoriteRecipes from "../hooks/useFavoriteRecipes";


function FavoriteRecipes({ favorite, handleFavorite }) {
  const { favoriteRecipes } = useFavoriteRecipes();
  const email = localStorage.getItem("email");
  if (!email) {
    return (
      <>
        <Link to="/" />
      </>
    )
  }

  return (
    <div className="recipe">
      <h1 className="title">My Favorite Recipes</h1>
      <RecipeList recipes={favoriteRecipes} favorite={favorite} handleFavorite={handleFavorite} />
    </div>
  );
}

export default FavoriteRecipes;