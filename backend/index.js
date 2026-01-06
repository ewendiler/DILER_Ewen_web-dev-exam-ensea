import express from "express"
import recipesRouter from "./routes/recipes.js"

const app = express()
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
	res.json({
		message: "Welcome To EPITA'S Exam !",
	})
})

// Routes
app.use("/api/recipes", recipesRouter)

app.listen(PORT, () => {
	console.log(`Server running on port http://localhost:${PORT}`)
})
