# Niklad

Лендинг финансовой платформы Top Mining на Nuxt 3.

## Стек

- Nuxt 3 + Vue 3 + TypeScript
- Quasar (`nuxt-quasar-ui`)
- Tailwind CSS 4
- @nuxt/ui
- BEM — именование CSS-классов в компонентах
- SCSS — глобальные переменные и стили

## Структура проекта

```
niklad/
├── app.vue                     # Корневой компонент, подключает TheDefault layout
├── app.config.ts
├── nuxt.config.ts
│
├── assets/
│   ├── quasar-variables.scss   # Переменные Quasar
│   ├── scss/
│   │   ├── variables.scss      # CSS-переменные (цвета, отступы)
│   │   ├── global.css          # Базовые стили
│   │   ├── main.css            # Точка входа стилей
│   │   └── scrollbar.scss      # Кастомный скроллбар
│   └── images/
│       └── top-mining/         # Изображения лендинга
│
├── common/
│   └── modules/                # Данные и конфигурация по фичам
│       ├── constants.ts        # Re-export всех модулей
│       ├── top-mining/         # Навигация, кнопки, промо-блоки
│       ├── crypto/             # Списки монет, периоды, fallback-данные
│       └── process/            # Шаги секции «Как мы работаем»
│
├── components/
│   ├── global/                 # Переиспользуемые UI-компоненты (Vue-плагин)
│   ├── top-mining/             # Шапка, футер, секции лендинга
│   ├── crypto/                 # Блок крипторынка
│   └── process/                # Секция процесса работы
│
├── layouts/
│   └── TheDefault.vue          # Основной layout (header + content + footer)
│
├── pages/                      # Маршруты (аналог views/ в Vue SPA)
│   ├── index.vue               # Главная
│   └── privacy.vue             # Политика конфиденциальности
│
├── plugins/
│   └── global-components.ts    # Регистрация глобальных компонентов
│
├── public/                     # Статика (видео, favicon, robots.txt)
│
├── server/
│   └── api/
│       └── crypto.get.ts       # API-прокси данных крипторынка
│
├── types/                      # Общие TypeScript-типы
│   └── crypto-coin.ts
│
└── utils/                      # Чистые функции без Vue-зависимостей
    ├── cryptoPeriod.ts
    └── cryptoIcons.ts
```

## Принципы организации

### Компоненты по фичам

Компоненты лежат в подпапках по домену, а не в одной плоской директории:

| Папка | Назначение |
|-------|------------|
| `components/global/` | Кнопки, заголовки — используются по всему сайту |
| `components/top-mining/` | Header, Footer, Section, EpicBlocks, CalculatorPromo |
| `components/crypto/` | CryptoMarketSection, CryptoCoinList |
| `components/process/` | WorkProcessSection |

Nuxt автоматически импортирует компоненты из вложенных папок — имя берётся из файла (`TopMiningHeader.vue` → `<TopMiningHeader>`).

### Модули (`common/modules/`)

Константы, конфиги и статические данные вынесены в модули по фичам. Импорт:

```ts
import { TOP_MINING_BUTTON_VARIANTS } from '~/common/modules/top-mining'
import { CRYPTO_PERIODS } from '~/common/modules/crypto'
```

> Папка `common/modules/`, а не `modules/` в корне — в Nuxt корневая `modules/` зарезервирована под Nuxt-модули (`nuxt-quasar-ui`, `@nuxt/ui` и т.д.).

### Страницы и layout

- `pages/` — file-based routing Nuxt (аналог `views/` в эталонном Vue-проекте).
- `layouts/TheDefault.vue` — обёртка с шапкой и футером; подключается в `app.vue`.

### Стили

Цвета и дизайн-токены — в `assets/scss/variables.scss`. Компоненты используют CSS-переменные:

```css
color: var(--orange-color);
background: var(--bg);
```

Подключение глобальных стилей — в `nuxt.config.ts` → `css: [...]`.

## Глобальные компоненты

## Запуск

```bash
npm install
npm run dev      # dev-сервер
npm run build    # production-сборка
npm run preview  # предпросмотр сборки
```

## Куда класть новый код

| Задача | Куда |
|--------|------|
| Новая страница | `pages/<route>.vue` |
| UI-компонент фичи | `components/<feature>/` |
| Константы, конфиг фичи | `common/modules/<feature>/` |
| Переиспользуемая логика | `composables/` |
| Чистая функция | `utils/` |
| API-эндпоинт | `server/api/` |
| TypeScript-тип | `types/` |
| Глобальный стиль / переменная | `assets/scss/` |
