import { Router } from "express";
import { getBollingerBands } from "../controllers/indicatorController";

const router = Router();

router.get("/bollinger", getBollingerBands);

export default router;
