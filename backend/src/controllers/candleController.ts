import { Request, Response } from "express";
import { getAggregatedCandles } from "../services/candleService";

export const getCandles = async (req: Request, res: Response) => {
  try {
    const { symbol = "NQ", timeframe = "1m" } = req.query;

    const candles = await getAggregatedCandles(
      symbol as string,
      timeframe as string
    );

    res.json(candles);
  } catch (error) {
    console.error("Error fetching candles:", error);
    res.status(500).json({ error: "Failed to fetch candles" });
  }
};
