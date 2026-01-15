import { Router } from "express"
import { getRecipes } from "../controllers/recipesController.js"
import { getRecipeById } from "../controllers/recipesController.js"
import { createRecipe } from "../controllers/recipesController.js"
import { updateRecipe } from "../controllers/recipesController.js"


const router = Router()

router.get("/", getRecipes)
router.get('/:id', getRecipeById)
router.post('/', createRecipe)
router.put('/:id', updateRecipe)

export default router
