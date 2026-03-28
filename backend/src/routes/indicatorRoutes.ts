import express from "express"
import { fetchBollingerBands } from "../controllers/indicatorController"

const router = express.Router()

router.get("/bollinger", fetchBollingerBands)

export default router
