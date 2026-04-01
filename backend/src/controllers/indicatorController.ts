import { Request, Response } from "express";
import { getAggregatedCandles } from "../services/candleService";
import { calculateBollingerBands } from "../utils/indicators";

export const getBollingerBands = async (req: Request, res: Response) => {
  try {
    const { symbol = "NQ", timeframe = "1m" } = req.query;

    const candles = await getAggregatedCandles(
      symbol as string,
      timeframe as string
    );

    const bands = calculateBollingerBands(candles);

    res.json(bands);
  } catch (error) {
    console.error("Error fetching Bollinger Bands:", error);
    res.status(500).json({ error: "Failed to fetch Bollinger Bands" });
  }
};
