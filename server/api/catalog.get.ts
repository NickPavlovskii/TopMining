import { CATALOG_FALLBACK } from '~/common/modules/catalog'
import type { CatalogCategory, CatalogResponse } from '~/types/catalog'

const CATEGORY_HREFS: Record<string, string> = {
  'asic-sales': '/sale_miners/',
  'mining-hotels': '/mining-hotels/',
  'equipment-manufacturers': '/repair_miners/',
  'mining-pools': '/mining-pools/',
}

const CATALOG_QUERY = `
  query Catalog {
    catalog {
      meta {
        totalReviews
        subtitle
      }
      categories {
        id
        name
        slug
        organizations {
          id
          name
          logoUrl
          rating
          reviewCount
        }
      }
    }
  }
`

interface GraphQLCatalogResponse {
  data?: {
    catalog: Omit<CatalogResponse, 'source' | 'updatedAt'>
  }
  errors?: Array<{ message: string }>
}

function normalizeCatalog(
  catalog: Omit<CatalogResponse, 'source' | 'updatedAt'>,
): Omit<CatalogResponse, 'source' | 'updatedAt'> {
  return {
    ...catalog,
    categories: catalog.categories.map((category) => ({
      ...category,
      href:
        (category as CatalogCategory).href ||
        CATEGORY_HREFS[category.slug] ||
        '#',
      organizations: category.organizations.map((organization) => ({
        ...organization,
        href: organization.href || '#',
      })),
    })),
  }
}

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const graphqlUrl =
    config.catalogGraphqlUrl || 'http://localhost:8080/graphql'

  try {
    const response = await $fetch<GraphQLCatalogResponse>(graphqlUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: {
        query: CATALOG_QUERY,
      },
    })

    if (response.errors?.length || !response.data?.catalog) {
      throw new Error(response.errors?.[0]?.message || 'Empty GraphQL response')
    }

    return {
      source: 'graphql',
      updatedAt: new Date().toISOString(),
      ...normalizeCatalog(response.data.catalog),
    } satisfies CatalogResponse
  } catch {
    return {
      ...CATALOG_FALLBACK,
      updatedAt: new Date().toISOString(),
    } satisfies CatalogResponse
  }
})
