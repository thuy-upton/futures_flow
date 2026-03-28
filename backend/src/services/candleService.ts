import prisma from "../config/prisma"
import { aggregateCandles } from "../utils/candleAggregator"
import { calculateBollingerBands } from "../utils/indicators"

export const getAggregatedCandles = async (
  symbol: string,
  timeframe: string
) => {

  const candles = await prisma.candle.findMany({
    where: {
      symbol,
      timeframe: "1m"
    },
    orderBy: {
      timestamp: "asc"
    }
  })

  if (timeframe === "5m") return aggregateCandles(candles, 5)
  if (timeframe === "15m") return aggregateCandles(candles, 15)
  if (timeframe === "1h") return aggregateCandles(candles, 60)

  return candles
}


export const getBollingerBands = async (
  symbol: string,
  timeframe: string
) => {

  const candles = await getAggregatedCandles(symbol, timeframe)

  const closes = candles.map(c => c.close)
  const timestamps = candles.map(c => c.timestamp)

  const bands = calculateBollingerBands(closes, timestamps)

  return bands
}
