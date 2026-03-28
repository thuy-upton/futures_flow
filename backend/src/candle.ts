export interface CandleInput {
  symbol: string
  timeframe: string

  open: number
  high: number
  low: number
  close: number
  volume: number

  timestamp: string
}
