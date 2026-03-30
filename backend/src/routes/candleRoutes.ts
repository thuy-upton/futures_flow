import { Router } from "express";
import { getCandles } from "../controllers/candleController";

const router = Router();

router.get("/", getCandles);

export default router;
