import type { App } from 'vue'

import RoundIconButton from './RoundIconButton.vue'
import TopMiningBrandTitle from './TopMiningBrandTitle.vue'
import TopMiningButton from './TopMiningButton.vue'

const components = [
  { name: 'round-icon-button', component: RoundIconButton },
  { name: 'top-mining-brand-title', component: TopMiningBrandTitle },
  { name: 'top-mining-button', component: TopMiningButton },
]

export default {
  install(app: App) {
    components.forEach(({ name, component }) => {
      app.component(name, component)
    })
  },
}
