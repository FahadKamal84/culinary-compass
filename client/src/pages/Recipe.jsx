import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import "../../public/css/recipeDetails.css"
import useRecipe from "../hooks/useRecipe";
import ImageWithFavoriteIcon from "../components/ImageWithFavoriteIcon";

function Recipe() {
  const { id } = useParams();
  const { recipe } = useRecipe(id);

  return (
    <section className="recipe-detail">
      <div className="recipe-name" htmlFor="recipe-name">
        {recipe.recipe_name}

      </div>
      <div className="chef-name" htmlFor="chef-name">By Chef: {recipe.chef_name}</div>

      <iframe src={recipe.video_link} title={recipe.recipe_name} allowFullScreen></iframe>
      <div className="ingredients" htmlFor="ingredients"><b>Ingredients</b>: <br></br>&emsp;{recipe.ingredients}</div>

      <div className="description" htmlFor="description"><b>Description</b>: {recipe.description}</div>
      <div className="instructions" htmlFor="instructions"><b>Instructions</b>: {recipe.cooking_instructions}</div>
      <div className="description" htmlFor="description"><b>Description</b>: {recipe.description}</div>
      <div className="instructions" htmlFor="instructions"><b>Instructions</b>: {recipe.cooking_instructions}</div>
      <div className="description" htmlFor="description"><b>Description</b>: {recipe.description}</div>
      <div className="instructions" htmlFor="instructions"><b>Instructions</b>: {recipe.cooking_instructions}</div>


    </section>
  );
};

export default Recipe;