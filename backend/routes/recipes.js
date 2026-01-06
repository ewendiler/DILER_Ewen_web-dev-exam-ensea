import { Router } from "express"
import { getRecipes } from "../controllers/recipesController.js"

const router = Router()

router.get("/", getRecipes)

export default router
