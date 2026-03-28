export interface BollingerBand {
  timestamp: Date
  sma: number
  upper: number
  lower: number
}

export function calculateBollingerBands(
  closes: number[],
  timestamps: Date[],
  period: number = 20,
  multiplier: number = 2
): BollingerBand[] {

  const result: BollingerBand[] = []

    for (let i = period - 1; i < closes.length; i++) {

    const slice = closes.slice(i - period + 1, i + 1)

    const mean =
        slice.reduce((sum, val) => sum + val, 0) / period

    const variance =
        slice.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / period

    const std = Math.sqrt(variance)

    const upper = mean + multiplier * std
    const lower = mean - multiplier * std

    const timestamp = timestamps[i]

    if (!timestamp) continue

    result.push({
        timestamp,
        sma: mean,
        upper,
        lower
    })
    }

  return result
}
