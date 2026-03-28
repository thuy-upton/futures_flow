-- CreateIndex
CREATE INDEX "Candle_symbol_timeframe_timestamp_idx" ON "Candle"("symbol", "timeframe", "timestamp");
