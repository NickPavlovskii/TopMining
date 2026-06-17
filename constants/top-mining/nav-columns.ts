export interface TopMiningNavColumn {
  title: string
  icon: string
  mobileVisible: number
  items: string[]
}

export const TOP_MINING_NAV_COLUMNS: TopMiningNavColumn[] = [
  {
    title: 'Каталог организаций',
    icon: 'mdi:office-building-outline',
    mobileVisible: 2,
    items: [
      'Майнинг-пулы',
      'Сервисные центры',
      'Продажа оборудования',
      'Калькуляторы доходности',
      'Майнинг-отели',
      'Криптокошельки',
      'Криптобиржи',
      'Производители асиков',
    ],
  },
  {
    title: 'Рейтинги в майнинге',
    icon: 'mdi:trophy-outline',
    mobileVisible: 2,
    items: [
      'Техника и оборудование',
      'Продажи и услуги',
      'Инструменты и сервисы',
      'Криптовалюты и токены',
    ],
  },
  {
    title: 'Майнинг-калькулятор',
    icon: 'mdi:calculator-variant-outline',
    mobileVisible: 4,
    items: ['ASIC-майнеры', 'GPU', 'CPU', 'Калькулятор в Telegram'],
  },
  {
    title: 'Статьи',
    icon: 'mdi:file-document-outline',
    mobileVisible: 3,
    items: [
      'Новости',
      'Майнинг',
      'Криптовалюты',
      'Инструменты и сервисы',
      'Инвестиции',
      'Новичкам',
      'Разное',
    ],
  },
]
