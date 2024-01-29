const db = require("../connection");

const getAllCuisines = async () => {
  try {
    const query = "SELECT * FROM cuisines";
    const result = await db.query(query);
    if (result.rowCount > 0) {
      return { success: true, cuisines: result.rows };
    } else {
      return { success: true, cuisines: [] };
    }
  } catch (error) {
    return { success: false, message: "Authentication failed" };
  }
};

const findCuisines = async (cuisine) => {
  try {
    const query =
      "SELECT *, recipes.id, cuisines.name AS cuisine_name FROM recipes JOIN cuisines ON cuisines.id = recipes.cuisine_id WHERE cuisines.name = $1;";
    const result = await db.query(query, [cuisine]);
    if (result.rowCount > 0) {

      return { success: true, recipes: result.rows };
    } else {
      return { success: true, recipes: [] };
    }
  } catch (error) {
    return { success: false, message: error };
  }
};
module.exports = { getAllCuisines, findCuisines };
