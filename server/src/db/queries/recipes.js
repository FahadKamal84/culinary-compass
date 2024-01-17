const db = require("../connection");

const findAll = async () => {
  try {
    const query = "SELECT recipes.*, cuisines.name As cuisine_name FROM recipes JOIN cuisines ON cuisines.id = recipes.cuisine_id;";
    const result = await db.query(query);
    if (result.rowCount > 0) {
      return { success: true, recipes: result.rows };
    } else {
      return { success: true, recipes: [] };
    }
  } catch (error) {
    return { success: false, message: "Authentication failed" };
  }
};

const findTopRatedRecipes = async () => {
  try {
    const query = "SELECT recipes.id, recipes.chef_name, recipes.recipe_name, recipes.budget, recipes.cook_time, cuisines.name AS cuisine_name, recipes.description, recipes.photo_link FROM ratings JOIN recipes ON recipes.id = ratings.recipe_id JOIN cuisines ON cuisines.id = recipes.cuisine_id  WHERE rating > 4 GROUP BY recipe_id, recipes.id, recipes.video_link, cuisines.name;";
    const result = await db.query(query);
    if (result.rowCount > 0) {
      return { success: true, recipes: result.rows };
    } else {
      return { success: true, recipes: [] };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};
const findTopThreeRecipes = async () => {
  try {
    const query = "SELECT recipes.id, recipes.chef_name, recipes.recipe_name, recipes.budget, recipes.cook_time, cuisines.name AS cuisine_name, recipes.description, recipes.photo_link FROM ratings JOIN recipes ON recipes.id = ratings.recipe_id JOIN cuisines ON cuisines.id = recipes.cuisine_id  WHERE rating > 4 GROUP BY recipe_id, recipes.id, recipes.video_link, cuisines.name LIMIT 3;";
    const result = await db.query(query);
    if (result.rowCount > 0) {
      console.log(result.rows);
      return { success: true, recipes: result.rows };
    } else {
      return { success: true, recipes: [] };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};

const findById = async (id) => {
  try {
    const query = "SELECT * FROM recipes WHERE id = $1";
    const result = await db.query(query, [id]);
    if (result.rowCount > 0) {
      return { success: true, recipe: result.rows[0] };
    } else {
      return { success: true, recipe: [] };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};
const deleteById = async (id) => {
  try {
    const query = "DELETE FROM recipes WHERE id = $1;";
    const result = await db.query(query, [id]);
    if (result.rowCount > 0) {
      return { success: true, recipe: result.rows[0] };
    } else {
      return { success: true, recipe: [] };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};

const findItalianRecipes = async () => {
  try {
    const query = "SELECT *, recipes.id, cuisines.name AS cuisine_name FROM recipes JOIN cuisines ON cuisines.id = recipes.cuisine_id WHERE cuisines.name = 'Italian';";
    const result = await db.query(query);
    if (result.rowCount > 0) {
      console.log(result.rows);
      return { success: true, recipes: result.rows };
    } else {
      return { success: true, recipes: [] };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};
const findJapaneseRecipes = async () => {
  try {
    const query = "SELECT *, recipes.id, cuisines.name AS cuisine_name FROM recipes JOIN cuisines ON cuisines.id = recipes.cuisine_id WHERE cuisines.name = 'Japanese';";
    const result = await db.query(query);
    if (result.rowCount > 0) {
      console.log(result.rows);
      return { success: true, recipes: result.rows };
    } else {
      return { success: true, recipes: [] };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};
const findIndianRecipes = async () => {
  try {
    const query = "SELECT *, recipes.id, cuisines.name AS cuisine_name FROM recipes JOIN cuisines ON cuisines.id = recipes.cuisine_id WHERE cuisines.name = 'Indian';";
    const result = await db.query(query);
    if (result.rowCount > 0) {
      console.log(result.rows);
      return { success: true, recipes: result.rows };
    } else {
      return { success: true, recipes: [] };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};
const findKoreanRecipes = async () => {
  try {
    const query = "SELECT *, recipes.id, cuisines.name AS cuisine_name FROM recipes JOIN cuisines ON cuisines.id = recipes.cuisine_id WHERE cuisines.name = 'Korean';";
    const result = await db.query(query);
    if (result.rowCount > 0) {
      console.log(result.rows);
      return { success: true, recipes: result.rows };
    } else {
      return { success: true, recipes: [] };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};
const findMexicanRecipes = async () => {
  try {
    const query = "SELECT *, recipes.id, cuisines.name AS cuisine_name FROM recipes JOIN cuisines ON cuisines.id = recipes.cuisine_id WHERE cuisines.name = 'Mexican';";
    const result = await db.query(query);
    if (result.rowCount > 0) {
      console.log(result.rows);
      return { success: true, recipes: result.rows };
    } else {
      return { success: true, recipes: [] };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};

module.exports = { findAll, findTopRatedRecipes, findTopThreeRecipes, findById, deleteById, findItalianRecipes, findJapaneseRecipes, findIndianRecipes, findKoreanRecipes, findMexicanRecipes };
