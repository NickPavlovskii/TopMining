import { existsSync, rmSync } from 'node:fs'
import { join } from 'node:path'

/** Nuxt резервирует корневую `modules/` — удаляем остатки после рефакторинга. */
const staleDirs = ['modules', 'constants']

for (const dir of staleDirs) {
  const path = join(process.cwd(), dir)

  if (existsSync(path)) {
    rmSync(path, { recursive: true, force: true })
    console.log(`[clean-stale] removed ${dir}/`)
  }
}
