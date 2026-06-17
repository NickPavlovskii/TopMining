interface CoinGeckoMarketCoin {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  total_volume: number
  price_change_percentage_24h_in_currency?: number
  price_change_percentage_7d_in_currency?: number
  sparkline_in_7d?: {
    price: number[]
  }
}

interface CryptoCoin {
  id: string
  symbol: string
  name: string
  image: string
  price: number
  volume: number
  change24h: number
  change7d: number
  sparkline: number[]
}

interface BitcoinUsd {
  price: number
  change7d: number
  sparkline: number[]
  image: string
}

const coinIds = [
  'binancecoin',
  'bitcoin',
  'ethereum',
  'pax-gold',
  'binaryx',
  'as-roma-fan-token',
  'solana',
]

const fallbackCoins: CryptoCoin[] = [
  {
    id: 'binancecoin',
    symbol: 'bnb',
    name: 'BNB',
    image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png',
    price: 48810,
    volume: 83500000000,
    change24h: -6.9,
    change7d: -4.2,
    sparkline: [],
  },
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
    price: 5710000,
    volume: 2540000000000,
    change24h: 4.43,
    change7d: -1.59,
    sparkline: [],
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
    price: 269440,
    volume: 1390000000000,
    change24h: -7.17,
    change7d: -7.17,
    sparkline: [],
  },
  {
    id: 'pax-gold',
    symbol: 'paxg',
    name: 'PAX Gold',
    image: 'https://assets.coingecko.com/coins/images/9519/large/paxgold.png',
    price: 248690,
    volume: 18000000000,
    change24h: 15.98,
    change7d: 12.2,
    sparkline: [],
  },
  {
    id: 'binaryx',
    symbol: 'bnx',
    name: 'BinaryX',
    image: 'https://assets.coingecko.com/coins/images/18095/large/BinaryX-RGB-01_%282%29.png',
    price: 58.71,
    volume: 7400000000,
    change24h: 6.71,
    change7d: 8.4,
    sparkline: [],
  },
  {
    id: 'as-roma-fan-token',
    symbol: 'asr',
    name: 'AS Roma Fan Token',
    image: 'https://assets.coingecko.com/coins/images/11688/large/as-roma-fan-token.png',
    price: 394.88,
    volume: 1300000000,
    change24h: 2.63,
    change7d: 1.8,
    sparkline: [],
  },
  {
    id: 'solana',
    symbol: 'sol',
    name: 'Solana',
    image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
    price: 11790,
    volume: 610000000000,
    change24h: -15.74,
    change7d: -9.5,
    sparkline: [],
  },
]

const fallbackBitcoinUsd: BitcoinUsd = {
  price: 26159,
  change7d: -1.59,
  sparkline: [
    24800, 25100, 24900, 25300, 25000, 25500, 25400, 25700, 26000, 25800,
    26200, 26500, 26300, 26600, 26400, 26550, 26800, 26650, 26900, 26159,
  ],
  image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
}

function normalizeCoin(coin: CoinGeckoMarketCoin): CryptoCoin {
  return {
    id: coin.id,
    symbol: coin.symbol,
    name: coin.name,
    image: coin.image,
    price: coin.current_price,
    volume: coin.total_volume,
    change24h: coin.price_change_percentage_24h_in_currency ?? 0,
    change7d: coin.price_change_percentage_7d_in_currency ?? 0,
    sparkline: coin.sparkline_in_7d?.price ?? [],
  }
}

function normalizeBitcoinUsd(coin: CoinGeckoMarketCoin): BitcoinUsd {
  return {
    price: coin.current_price,
    change7d: coin.price_change_percentage_7d_in_currency ?? 0,
    sparkline: coin.sparkline_in_7d?.price ?? [],
    image: coin.image,
  }
}

async function fetchRubCoins() {
  return $fetch<CoinGeckoMarketCoin[]>(
    'https://api.coingecko.com/api/v3/coins/markets',
    {
      query: {
        vs_currency: 'rub',
        ids: coinIds.join(','),
        order: 'market_cap_desc',
        per_page: coinIds.length,
        page: 1,
        sparkline: true,
        price_change_percentage: '24h,7d',
        locale: 'ru',
      },
      headers: { accept: 'application/json' },
    },
  )
}

async function fetchBitcoinUsd() {
  const coins = await $fetch<CoinGeckoMarketCoin[]>(
    'https://api.coingecko.com/api/v3/coins/markets',
    {
      query: {
        vs_currency: 'usd',
        ids: 'bitcoin',
        sparkline: true,
        price_change_percentage: '7d',
      },
      headers: { accept: 'application/json' },
    },
  )

  return normalizeBitcoinUsd(coins[0])
}

export default defineEventHandler(async () => {
  try {
    const [rubCoins, bitcoinUsd] = await Promise.all([
      fetchRubCoins(),
      fetchBitcoinUsd(),
    ])

    return {
      source: 'coingecko',
      currency: 'rub',
      updatedAt: new Date().toISOString(),
      coins: rubCoins.map(normalizeCoin),
      bitcoinUsd,
    }
  } catch {
    return {
      source: 'fallback',
      currency: 'rub',
      updatedAt: new Date().toISOString(),
      coins: fallbackCoins,
      bitcoinUsd: fallbackBitcoinUsd,
    }
  }
})
