interface Candle {
  open: number
  high: number
  low: number
  close: number
  volume: number
  timestamp: Date
}

export function aggregateCandles(
  candles: Candle[],
  interval: number
) {

  const result: Candle[] = []

  for (let i = 0; i < candles.length; i += interval) {

    const group = candles.slice(i, i + interval)

    if (group.length === 0) continue

    const first = group[0]
    const last = group[group.length - 1]

    if (!first || !last) continue

    const open = first.open
    const close = last.close

    const high = Math.max(...group.map(c => c.high))
    const low = Math.min(...group.map(c => c.low))

    const volume = group.reduce((sum, c) => sum + c.volume, 0)

    result.push({
      open,
      high,
      low,
      close,
      volume,
      timestamp: first.timestamp
    })
  }

  return result
}
