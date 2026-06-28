import type { CatalogResponse } from '~/types/catalog'

export const CATALOG_FALLBACK: CatalogResponse = {
  source: 'fallback',
  updatedAt: new Date().toISOString(),
  meta: {
    totalReviews: 4569,
    subtitle:
      'Помогаем найти подходящую вам компанию и проанализировать конкурентов',
  },
  categories: [
    {
      id: 1,
      name: 'Продажа ASIC',
      slug: 'asic-sales',
      href: '/sale_miners/',
      organizations: [
        {
          id: 1,
          name: 'TTM Mining',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2026/05/firmennyj-znak-czvetnoj.png',
          rating: 0,
          reviewCount: 0,
          href: 'https://top-mining.ru/sale_asic/ttm-mining/',
        },
        {
          id: 2,
          name: 'Geometria',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2025/09/frame-2043682635.png',
          rating: 0,
          reviewCount: 0,
          href: 'https://top-mining.ru/sale_asic/geometria/',
        },
        {
          id: 3,
          name: 'Mining center',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2025/08/mining-center-1.png',
          rating: 0,
          reviewCount: 0,
          href: 'https://top-mining.ru/sale_asic/mining-center/',
        },
        {
          id: 4,
          name: 'Algoritm',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2025/07/algoritm-1.png',
          rating: 0,
          reviewCount: 0,
          href: 'https://top-mining.ru/sale_asic/algoritm/',
        },
        {
          id: 5,
          name: 'r7miner',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2024/08/r7miner-1.png',
          rating: 4.9,
          reviewCount: 113,
          href: 'https://top-mining.ru/sale_asic/r7miner/',
        },
        {
          id: 6,
          name: 'IBMM',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2024/08/ibmm-90x90-1.png',
          rating: 4.8,
          reviewCount: 485,
          href: 'https://top-mining.ru/sale_asic/ibmm/',
        },
        {
          id: 7,
          name: 'GIS Mining',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2024/07/gis-mining-90x90-1.png',
          rating: 4.8,
          reviewCount: 145,
          href: 'https://top-mining.ru/sale_asic/gis-mining/',
        },
        {
          id: 8,
          name: 'Pushminer',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2024/09/pushminer-2.png',
          rating: 4.5,
          reviewCount: 265,
          href: 'https://top-mining.ru/sale_asic/pushminer/',
        },
      ],
    },
    {
      id: 2,
      name: 'Майнинг-отели',
      slug: 'mining-hotels',
      href: '/mining-hotels/',
      organizations: [
        {
          id: 9,
          name: 'RusHash',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2026/02/image-6345356.png',
          rating: 0,
          reviewCount: 0,
          href: 'https://top-mining.ru/Mining-hotel/rushash/',
        },
        {
          id: 10,
          name: 'Майнинг отель «Терешково»',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2025/12/generated-image-5-1.jpg',
          rating: 0,
          reviewCount: 0,
          href: 'https://top-mining.ru/Mining-hotel/majning-otel-gtes-tereshkovo-moskva/',
        },
        {
          id: 11,
          name: '1-MINING',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2025/07/1-mining-1.png',
          rating: 0,
          reviewCount: 0,
          href: 'https://top-mining.ru/Mining-hotel/1-mining/',
        },
        {
          id: 12,
          name: 'Weltall Energy',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2025/05/weltall-energy.png',
          rating: 5,
          reviewCount: 4,
          href: 'https://top-mining.ru/Mining-hotel/weltall-energy/',
        },
        {
          id: 13,
          name: 'DataCheap',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2024/09/datacheap-1.png',
          rating: 2.5,
          reviewCount: 203,
          href: 'https://top-mining.ru/Mining-hotel/datacheap/',
        },
        {
          id: 14,
          name: 'AFM Hotel',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2024/09/afm-hotel-1-1.png',
          rating: 0,
          reviewCount: 0,
          href: 'https://top-mining.ru/Mining-hotel/afm-hotel/',
        },
        {
          id: 15,
          name: 'BitBird',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2024/09/bitbird-1-1.png',
          rating: 0,
          reviewCount: 5,
          href: 'https://top-mining.ru/Mining-hotel/bitbird/',
        },
        {
          id: 16,
          name: 'WATT MANOR',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2024/09/watt-manor-1.png',
          rating: 0,
          reviewCount: 14,
          href: 'https://top-mining.ru/Mining-hotel/watt-manor/',
        },
      ],
    },
    {
      id: 3,
      name: 'Производители оборудования',
      slug: 'equipment-manufacturers',
      href: '/repair_miners/',
      organizations: [
        {
          id: 17,
          name: 'SealMiner',
          logoUrl: 'https://top-mining.ru/wp-content/uploads/2025/11/1.png',
          rating: 0,
          reviewCount: 0,
          href: 'https://top-mining.ru/asic-manufacturer/sealminer/',
        },
        {
          id: 18,
          name: 'BITMAIN',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2024/08/bitmain-1.png',
          rating: 0,
          reviewCount: 0,
          href: 'https://top-mining.ru/asic-manufacturer/bitmain-corporation/',
        },
        {
          id: 19,
          name: 'MicroBT',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2024/08/microbt-1.png',
          rating: 0,
          reviewCount: 0,
          href: 'https://top-mining.ru/asic-manufacturer/microbt-corporation/',
        },
        {
          id: 20,
          name: 'Canaan',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2024/08/canaan-1.png',
          rating: 0,
          reviewCount: 0,
          href: 'https://top-mining.ru/asic-manufacturer/canaan-corporation/',
        },
        {
          id: 21,
          name: 'IceRiver',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2024/08/iceriver-1-1.png',
          rating: 0,
          reviewCount: 0,
          href: 'https://top-mining.ru/asic-manufacturer/iceriver-corporation/',
        },
        {
          id: 22,
          name: 'Innosilicon',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2024/08/innosilicon-90x90-1.png',
          rating: 0,
          reviewCount: 0,
          href: 'https://top-mining.ru/asic-manufacturer/corporation-innosilicon/',
        },
        {
          id: 23,
          name: 'Goldshell',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2024/08/goldshell-1.png',
          rating: 0,
          reviewCount: 0,
          href: 'https://top-mining.ru/asic-manufacturer/corporation-goldshell/',
        },
        {
          id: 24,
          name: 'Jasminer',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2024/08/jasminer-1.png',
          rating: 0,
          reviewCount: 0,
          href: 'https://top-mining.ru/asic-manufacturer/corporation-jasminer/',
        },
      ],
    },
    {
      id: 4,
      name: 'Майнинг-пулы',
      slug: 'mining-pools',
      href: '/mining-pools/',
      organizations: [
        {
          id: 25,
          name: 'K8X',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2026/03/avatar.jpg',
          rating: 5,
          reviewCount: 5,
          href: 'https://top-mining.ru/mining-pool/k8x/',
        },
        {
          id: 26,
          name: 'Masspool.io',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2026/02/avatar-only-symbol.jpg',
          rating: 5,
          reviewCount: 7,
          href: 'https://top-mining.ru/mining-pool/masspool/',
        },
        {
          id: 27,
          name: 'ViaBTC',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2024/05/viabtc.png',
          rating: 3.3,
          reviewCount: 18,
          href: 'https://top-mining.ru/mining-pool/viabtc/',
        },
        {
          id: 28,
          name: 'EMCD pool',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2024/08/emcd-pool.png',
          rating: 4.7,
          reviewCount: 66,
          href: 'https://top-mining.ru/mining-pool/emcd/',
        },
        {
          id: 29,
          name: 'F2Pool',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2024/08/f2pool-1.png',
          rating: 4.5,
          reviewCount: 4,
          href: 'https://top-mining.ru/mining-pool/f2pool/',
        },
        {
          id: 30,
          name: 'Antpool',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2024/05/antpool.png',
          rating: 3.6,
          reviewCount: 5,
          href: 'https://top-mining.ru/mining-pool/antpool/',
        },
        {
          id: 31,
          name: 'Neopool',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2025/12/logo-neopul.png',
          rating: 5,
          reviewCount: 1,
          href: 'https://top-mining.ru/mining-pool/neopool/',
        },
        {
          id: 32,
          name: 'Poolin',
          logoUrl:
            'https://top-mining.ru/wp-content/uploads/2024/06/poolin.png',
          rating: 3.8,
          reviewCount: 4,
          href: 'https://top-mining.ru/mining-pool/poolin/',
        },
      ],
    },
  ],
}
