import { Request, Response } from "express"
import { getBollingerBands } from "../services/candleService"

export const fetchBollingerBands = async (req: Request, res: Response) => {

  const { symbol, timeframe } = req.query

  if (!symbol || !timeframe) {
    return res.status(400).json({
      error: "symbol and timeframe required"
    })
  }

  const bands = await getBollingerBands(
    symbol as string,
    timeframe as string
  )

  res.json({
    success: true,
    data: bands
  })
}
