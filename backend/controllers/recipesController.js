import fs from "fs"
import path from "path"

const recipesPath = path.resolve("./data/recipes.json")

// Helper to read recipes
const readRecipes = () => {
	const data = fs.readFileSync(recipesPath, "utf8")
	return JSON.parse(data)
}

// Helper to write recipes
const writeRecipes = (recipes) => {
	fs.writeFileSync(recipesPath, JSON.stringify(recipes, null, 2), "utf8")
}

// GET All recipes
export const getRecipes = (req, res) => {
	try {
		const recipes = readRecipes() // Fresh data every time
		res.json(recipes)
	} catch (error) {
		res.status(500).json({ error: "Erreur lors de la lecture des recettes" })
	}
}
