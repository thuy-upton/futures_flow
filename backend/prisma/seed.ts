import prisma from "../src/config/prisma";

type Candle = {
  timestamp: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

function generateCandles(count: number): Candle[] {
  const candles: Candle[] = [];

  let price = 18000; // starting NQ price
  let timestamp = new Date();

  for (let i = 0; i < count; i++) {
    const open = price;

    // simulate movement
    const change = (Math.random() - 0.5) * 20;
    const close = open + change;

    const high = Math.max(open, close) + Math.random() * 5;
    const low = Math.min(open, close) - Math.random() * 5;

    const volume = Math.random() * 1000 + 100;

    candles.push({
      timestamp: new Date(timestamp),
      open,
      high,
      low,
      close,
      volume,
    });

    price = close;
    timestamp = new Date(timestamp.getTime() + 60000); // +1 minute
  }

  return candles;
}

async function main() {
  console.log("🌱 Seeding candles...");

  const candles = generateCandles(500);

  await prisma.candle.createMany({
    data: candles.map(c => ({
      ...c,
      symbol: "NQ",
      timeframe: "1m",
    })),
  });

  console.log("✅ Seed complete");
}

main()
  .catch(e => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
