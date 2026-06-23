import { TOP_MINING_COLORS, TOP_MINING_ORANGE_GRADIENT } from './colors'

export type TopMiningButtonVariant = 'primary' | 'secondary' | 'tertiary'

export type TopMiningButtonSize = 'big' | 'small'

export type TopMiningButtonSurface = 'light' | 'dark'

export const TOP_MINING_BUTTON_COLORS = {
  orange: TOP_MINING_COLORS.orange,
  orangeDark: TOP_MINING_COLORS.orangeDark,
  white: TOP_MINING_COLORS.white,
  text: TOP_MINING_COLORS.textSecondary,
  textDark: TOP_MINING_COLORS.black,
  icon: TOP_MINING_COLORS.icon,
} as const

export const TOP_MINING_BUTTON_WIDTH = {
  contact: '220px',
  catalog: '280px',
  card: '170px',
  telegram: '220px',
} as const

export const TOP_MINING_BUTTON_BG = TOP_MINING_ORANGE_GRADIENT

export const TOP_MINING_BUTTON_PROPS = {
  bgColor: TOP_MINING_BUTTON_BG,
  color: TOP_MINING_BUTTON_COLORS.white,
  variant: 'primary',
  size: 'big',
  surface: 'dark',
} as const satisfies {
  bgColor: string
  color: string
  variant: TopMiningButtonVariant
  size: TopMiningButtonSize
  surface: TopMiningButtonSurface
}

export const TOP_MINING_BUTTON_LABELS = {
  writeInTelegram: 'Написать в Telegram',
} as const
