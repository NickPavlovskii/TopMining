<template>
  <div class="catalog-comp-wrap">
    <div class="catalog-comp-wrap__header">
      <a :href="category.href" class="title-catalog">
        {{ category.name }}
        <span class="title-catalog__arrow" aria-hidden="true">
          <img
            alt=""
            class="title-catalog__arrow-icon"
            :src="catalogArrowRight"
          />
        </span>
      </a>

      <div class="catalog-comp-wrap__nav" aria-hidden="false">
        <button
          type="button"
          aria-label="Прокрутить влево"
          :class="navBtnClass('prev', !canScrollLeft)"
          @click="scroll(-1)"
        >
          <img
            alt=""
            aria-hidden="true"
            class="catalog-comp-wrap__nav-icon catalog-comp-wrap__nav-icon--prev"
            
            :src="catalogArrowRight"
          />
        </button>
        <button
          type="button"
          aria-label="Прокрутить вправо"
          :class="navBtnClass('next', !canScrollRight)"
          @click="scroll(1)"
        >
          <img
            alt=""
            aria-hidden="true"
            class="catalog-comp-wrap__nav-icon"
            :src="catalogArrowRight"
          />
        </button>
      </div>
    </div>

    <div class="catalog-comp-row">
      <div
        ref="trackRef"
        class="catalog-comp-line"
        @scroll="updateScrollState"
      >
        <a
          v-for="organization in organizations"
          :key="organization.id"
          :href="organization.href || '#'"
          class="cwcoo_item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="cwoi_inner">
            <div class="cwo_img">
              <img
                v-if="organization.logoUrl"
                loading="lazy"
                :src="organization.logoUrl"
                :alt="organization.name"
                @load="onAssetReady"
              />
              <span v-else class="cwo_img__fallback">
                {{ getInitials(organization.name) }}
              </span>
            </div>

            <div class="top-card-wrap">
              <div class="name">{{ organization.name }}</div>
            </div>

            <div class="cwo_rating">
              <span class="cwo_rating__star" aria-hidden="true">★</span>
              <span class="cwo_rating__value">{{ formatRating(organization.rating) }}</span>
              <span class="cwo_rating__reviews">
                Отзывов: {{ organization.reviewCount }}
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { CatalogCategory } from '~/types/catalog'
  import catalogArrowRight from '~/assets/images/catalog/arrow-right.png'

  const props = defineProps<{
    category: CatalogCategory
  }>()

  const trackRef = ref<HTMLElement | null>(null)
  const canScrollLeft = ref(false)
  const canScrollRight = ref(true)
  const hasOverflow = ref(true)

  const organizations = computed(() => props.category.organizations)

  function navBtnClass(variant: 'prev' | 'next', inactive: boolean) {
    return [
      'catalog-comp-wrap__nav-btn',
      `catalog-comp-wrap__nav-btn--${variant}`,
      { 'catalog-comp-wrap__nav-btn--inactive': inactive },
    ]
  }

  function formatRating(value: number) {
    if (value <= 0) {
      return '0'
    }

    return Number.isInteger(value) ? String(value) : value.toFixed(1)
  }

  function getInitials(name: string) {
    return name
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? '')
      .join('')
  }

  function updateScrollState() {
    const track = trackRef.value

    if (!track) {
      canScrollLeft.value = false
      canScrollRight.value = false
      hasOverflow.value = false
      return
    }

    const maxScroll = track.scrollWidth - track.clientWidth
    const overflow = maxScroll > 4

    hasOverflow.value = overflow
    canScrollLeft.value = overflow && track.scrollLeft > 4
    canScrollRight.value = overflow && track.scrollLeft < maxScroll - 4
  }

  function scroll(direction: -1 | 1) {
    const track = trackRef.value

    if (!track) {
      return
    }

    if (direction < 0 && !canScrollLeft.value) {
      return
    }

    if (direction > 0 && !canScrollRight.value) {
      return
    }

    const card = track.querySelector<HTMLElement>('.cwcoo_item')
    const gap = 16
    const step = card ? card.offsetWidth + gap : Math.max(track.clientWidth * 0.8, 280)

    track.scrollBy({
      left: direction * step,
      behavior: 'smooth',
    })
  }

  function onAssetReady() {
    updateScrollState()
  }

  function scheduleScrollStateUpdate() {
    requestAnimationFrame(() => {
      updateScrollState()
      requestAnimationFrame(updateScrollState)
    })
  }

  watch(organizations, async () => {
    await nextTick()
    scheduleScrollStateUpdate()
  })

  let resizeObserver: ResizeObserver | null = null

  onMounted(() => {
    scheduleScrollStateUpdate()
    window.addEventListener('load', scheduleScrollStateUpdate)

    const track = trackRef.value

    if (track && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => updateScrollState())
      resizeObserver.observe(track)

      for (const child of track.children) {
        resizeObserver.observe(child)
      }
    }

    window.addEventListener('resize', updateScrollState)
  })

  onBeforeUnmount(() => {
    resizeObserver?.disconnect()
    window.removeEventListener('resize', updateScrollState)
    window.removeEventListener('load', scheduleScrollStateUpdate)
  })
</script>

<style scoped>
  .catalog-comp-wrap {
    position: relative;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }

  .catalog-comp-wrap__header {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: 16px;
    margin-bottom: clamp(16px, 2vw, 24px);
    max-width: 100%;
  }

  .title-catalog {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    color: #141414;
    font-family: 'Unbounded', 'Segoe UI', system-ui, sans-serif;
    font-size: clamp(22px, 2.4vw, 32px);
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.03em;
    text-decoration: none;
  }

  .title-catalog__arrow {
    display: inline-flex;
    flex-shrink: 0;
    color: var(--tm-orange);
  }

  .title-catalog__arrow-icon {
    display: block;
    width: 12px;
    height: auto;
    filter: brightness(0) saturate(100%) invert(47%) sepia(98%) saturate(1450%)
      hue-rotate(1deg) brightness(101%) contrast(104%);
  }

  .catalog-comp-wrap__nav {
    display: flex;
    gap: 10px;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
  }

  .catalog-comp-wrap__nav-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      var(--tm-orange-accent-deep) 0%,
      var(--tm-orange-accent-light) 100%
    );
    color: #fff;
    cursor: pointer;
    transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
  }

  .catalog-comp-wrap__nav-btn--inactive {
    opacity: 0.42;
    cursor: default;
  }

  .catalog-comp-wrap__nav-btn:not(.catalog-comp-wrap__nav-btn--inactive):hover {
    filter: brightness(1.06);
    transform: translateY(-1px);
  }

  .catalog-comp-wrap__nav-icon {
    display: block;
    width: 10px;
    height: auto;
  }

  .catalog-comp-wrap__nav-icon--prev {
    transform: scaleX(-1);
  }

  .catalog-comp-row {
    position: relative;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
  }

  .catalog-comp-line {
    display: flex;
    align-items: stretch;
    gap: 16px;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 4px;
    scroll-snap-type: x proximity;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }

  .catalog-comp-line::-webkit-scrollbar {
    display: none;
  }

  .cwcoo_item {
    flex: 0 0 clamp(220px, 17vw, 260px);
    display: flex;
    align-self: stretch;
    color: inherit;
    text-decoration: none;
    scroll-snap-align: start;
  }

  .cwoi_inner {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    min-height: 168px;
    padding: 24px;
    border-radius: 32px;
    background: #fff;
    box-sizing: border-box;
    transition: transform 0.2s ease;
  }

  .cwcoo_item:hover .cwoi_inner {
    transform: translateY(-2px);
  }

  .cwo_img {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    margin-bottom: 16px;
    padding: 6px;
    border-radius: 14px;
    background: #f3f3f3;
    overflow: hidden;
    box-sizing: border-box;
  }

  .cwo_img img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  .cwo_img__fallback {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: #ececec;
    color: #666;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.04em;
  }

  .top-card-wrap {
    flex: 1;
    width: 100%;
    min-height: calc(16px * 1.25 * 2);
    margin-bottom: 20px;
  }

  .name {
    margin: 0;
    color: #141414;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.25;
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .cwo_rating {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px 8px;
    margin-top: auto;
    flex-shrink: 0;
    width: 100%;
    color: #141414;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;
  }

  .cwo_rating__star {
    color: #f5b301;
    font-size: 15px;
    line-height: 1;
  }

  .cwo_rating__value {
    font-weight: 600;
  }

  .cwo_rating__reviews {
    font-weight: 500;
  }
  @media (max-width: 560px) {
    .catalog-comp-wrap__nav {
      gap: 8px;
    }
  }
</style>
