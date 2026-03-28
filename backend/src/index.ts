import express from "express"
import indicatorRoutes from "./routes/indicatorRoutes"

const app = express()

const PORT = 4000

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Future Flows API running")
})

app.use("/api/indicators", indicatorRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
