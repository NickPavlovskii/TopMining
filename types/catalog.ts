export interface CatalogOrganization {
  id: number
  name: string
  logoUrl: string
  rating: number
  reviewCount: number
  href?: string
}

export interface CatalogCategory {
  id: number
  name: string
  slug: string
  href: string
  organizations: CatalogOrganization[]
}

export interface CatalogMeta {
  totalReviews: number
  subtitle: string
}

export interface CatalogResponse {
  source: 'graphql' | 'fallback'
  updatedAt: string
  meta: CatalogMeta
  categories: CatalogCategory[]
}
