export const calculateBollingerBands = (
  candles: any[],
  period = 20,
  multiplier = 2
) => {
  const result = [];

  const closes = candles.map(c => c.close);

  for (let i = 0; i < closes.length; i++) {
    if (i < period - 1) continue;

    const slice = closes.slice(i - period + 1, i + 1);

    const mean =
      slice.reduce((sum, val) => sum + val, 0) / period;

    const variance =
      slice.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / period;

    const stdDev = Math.sqrt(variance);

    result.push({
      timestamp: candles[i].timestamp,
      middle: mean,
      upper: mean + multiplier * stdDev,
      lower: mean - multiplier * stdDev,
    });
  }

  return result;
};
