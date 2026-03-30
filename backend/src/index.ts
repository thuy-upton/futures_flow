import express from "express"
import candleRoutes from "./routes/candleRoutes";
import indicatorRoutes from "./routes/indicatorRoutes"

const app = express()

const PORT = 4000

app.use(express.json())



app.use("/api/indicators", indicatorRoutes)
app.use("/api/candles", candleRoutes);

app.get("/", (req, res) => {
  res.send("Future Flows API running")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
