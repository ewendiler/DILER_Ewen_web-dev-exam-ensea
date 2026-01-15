import { Router } from "express"
import { getRecipes } from "../controllers/recipesController.js"
import { getRecipeById } from "../controllers/recipesController.js"

const router = Router()

router.get("/", getRecipes)
router.get('/:id', getRecipeById)

export default router
