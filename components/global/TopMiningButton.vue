<template>
  <q-btn
    :class="buttonClasses"
    :unelevated="true"
    :flat="false"
    :dense="true"
    align="center"
    :href="href || undefined"
    :target="target || undefined"
    :type="href ? undefined : type"
    :style="buttonStyle"
    no-caps
    @click="onClick"
  >
    <span class="top-mining-button__inner">
      <span v-if="$slots.prepend" class="top-mining-button__prepend">
        <slot name="prepend" />
      </span>
      <span
        v-else-if="prependIcon"
        class="top-mining-button__icon-badge"
      >
        <img
          alt=""
          class="top-mining-button__icon top-mining-button__icon--prepend"
          :src="prependIcon"
        />
      </span>

      <slot>
        <span v-if="title" class="top-mining-button__label">{{ title }}</span>
      </slot>

      <slot v-if="$slots.append" name="append" />
      <img
        v-else-if="appendIcon"
        alt=""
        class="top-mining-button__icon top-mining-button__icon--append"
        :src="appendIcon"
      />
    </span>
  </q-btn>
</template>

<script setup lang="ts">
  import type {
    TopMiningButtonSize,
    TopMiningButtonSurface,
    TopMiningButtonVariant,
  } from '~/common/modules/top-mining/button'

  const props = withDefaults(
    defineProps<{
      title?: string
      prependIcon?: string
      appendIcon?: string
      variant?: TopMiningButtonVariant
      size?: TopMiningButtonSize
      surface?: TopMiningButtonSurface
      bgColor?: string
      color?: string
      borderColor?: string
      width?: string | number
      href?: string
      target?: string
      type?: 'button' | 'submit' | 'reset'
    }>(),
    {
      title: '',
      prependIcon: '',
      appendIcon: '',
      variant: 'primary',
      size: 'big',
      surface: 'light',
      bgColor: '',
      color: '',
      borderColor: '',
      width: '',
      href: '',
      target: '',
      type: 'button',
    },
  )

  const emit = defineEmits<{
    click: [ev: MouseEvent]
  }>()

  const buttonClasses = computed(() => [
    'top-mining-button',
    `top-mining-button--${props.variant}`,
    `top-mining-button--${props.size}`,
    `top-mining-button--surface-${props.surface}`,
  ])

  const buttonStyle = computed(() => {
    const style: Record<string, string> = {}

    if (props.width) {
      style.width =
        typeof props.width === 'number' ? `${props.width}px` : props.width
    }

    if (props.bgColor) {
      style.background = props.bgColor
    }

    if (props.color) {
      style.color = props.color
    }

    if (props.borderColor) {
      style.borderColor = props.borderColor
    }

    return style
  })

  function onClick(event: MouseEvent) {
    emit('click', event)
  }
</script>

<style scoped lang="css">
  .top-mining-button {
    --tm-btn-orange: var(--tm-orange);
    --tm-btn-text: var(--tm-text-secondary);
    --tm-btn-icon: var(--tm-icon);

    display: inline-flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: center !important;
    min-height: 0 !important;
    border: 1px solid transparent;
    border-radius: 999px;
    font-weight: 800;
    line-height: 1 !important;
    letter-spacing: 0.02em;
    text-align: center;
    text-transform: uppercase;
    box-shadow: none;
    transition:
      background-color 0.2s ease,
      color 0.2s ease,
      border-color 0.2s ease;

    :deep(.q-btn__content) {
      display: inline-flex !important;
      flex: 0 1 auto !important;
      align-items: center !important;
      align-self: center !important;
      justify-content: center !important;
      gap: 0;
      min-height: 0 !important;
      padding: 0 !important;
      margin: 0 !important;
      color: inherit !important;
      line-height: 1 !important;
      text-align: center;
    }

    .top-mining-button__inner {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    :deep(.q-btn__content .block) {
      display: inline-flex !important;
      align-items: center;
      justify-content: center;
      line-height: 1 !important;
    }

    :deep(.q-btn__content *) {
      color: inherit !important;
      line-height: 1 !important;
    }

    :deep(.q-icon) {
      color: var(--tm-btn-icon) !important;
    }

    &.q-btn--unelevated::before {
      display: none;
    }

    &--big {
      min-height: 48px;
      padding: 0 28px !important;
      font-size: 13px;
    }

    &--badge-prepend {
      justify-content: flex-start !important;

      :deep(.q-btn__content) {
        justify-content: flex-start !important;
      }

      .top-mining-button__inner {
        gap: 10px;
        justify-content: flex-start;
      }

      .top-mining-button__icon-badge {
        display: inline-flex;
        flex: 0 0 auto;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background: var(--tm-white);
        box-sizing: border-box;
      }

      .top-mining-button__icon--prepend {
        flex: 0 0 auto;
        width: 20px;
        height: 20px;
        margin: 0;
        padding: 0;
        border-radius: 0;
        background: transparent;
        box-sizing: border-box;
        filter: none !important;
        opacity: 1 !important;
        object-fit: contain;
      }

      &.top-mining-button--primary.top-mining-button--surface-light,
      &.top-mining-button--primary.top-mining-button--surface-dark,
      &.top-mining-button--secondary.top-mining-button--surface-light,
      &.top-mining-button--secondary.top-mining-button--surface-dark {
        .top-mining-button__icon--prepend {
          filter: none !important;
          opacity: 1 !important;
        }

        &:hover,
        &:focus-visible {
          .top-mining-button__icon--prepend {
            filter: none !important;
            opacity: 1 !important;
          }
        }
      }
    }

    &--consulting {
      width: max-content !important;
      min-width: max-content !important;
      max-width: none !important;
      height: 42px;
      min-height: 42px !important;
      padding: 0 22px !important;
      border: 0 !important;
      background: var(--tm-orange) !important;
      box-shadow: none;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.02em;
      white-space: nowrap;
      justify-content: center !important;

      :deep(.q-btn__content) {
        flex: 0 0 auto !important;
        justify-content: center !important;
        white-space: nowrap !important;
      }

      .top-mining-button__inner {
        justify-content: center;
      }

      .top-mining-button__consulting-label {
        display: inline-block;
        line-height: 1;
        text-align: center;
        text-transform: uppercase;
        white-space: nowrap;
      }
    }

    &--consulting.top-mining-button--primary.top-mining-button--surface-dark {
      background: var(--tm-orange) !important;
      border-color: var(--tm-orange) !important;

      &:hover,
      &:focus-visible {
        background: var(--tm-orange-dark) !important;
        border-color: var(--tm-orange-dark) !important;
        color: var(--tm-white) !important;
        box-shadow: none;

        :deep(.q-focus-helper) {
          background: transparent !important;
          opacity: 0 !important;
        }
      }
    }

    &--small {
      min-height: 40px;
      padding: 0 18px !important;
      font-size: 11px;
    }

    &--primary.top-mining-button--surface-light {
      background: var(--tm-btn-orange) !important;
      border-color: var(--tm-btn-orange);
      color: var(--tm-white) !important;

      .top-mining-button__icon {
        filter: brightness(0) invert(1);
      }

      &:hover,
      &:focus-visible {
        background: var(--tm-white) !important;
        border-color: var(--tm-btn-orange);
        color: var(--tm-btn-text) !important;

        .top-mining-button__icon {
          filter: none;
          opacity: 0.55;
        }

        :deep(.q-icon) {
          color: var(--tm-btn-icon) !important;
        }
      }
    }

    &--primary.top-mining-button--surface-dark {
      background: var(--tm-btn-orange) !important;
      border-color: var(--tm-btn-orange);
      color: var(--tm-white) !important;

      .top-mining-button__icon:not(.top-mining-button__icon--prepend) {
        filter: brightness(0) invert(1);
        opacity: 1;
      }

      &.top-mining-button--badge-prepend .top-mining-button__icon--prepend {
        filter: none !important;
        opacity: 1 !important;
      }

      &:hover,
      &:focus-visible {
        background: transparent !important;
        border-color: var(--tm-btn-orange) !important;
        color: var(--tm-white) !important;
        box-shadow: none;

        .top-mining-button__icon:not(.top-mining-button__icon--prepend) {
          filter: brightness(0) invert(1);
          opacity: 1;
        }

        &.top-mining-button--badge-prepend .top-mining-button__icon--prepend {
          filter: none !important;
          opacity: 1 !important;
        }

        :deep(.q-focus-helper) {
          background: transparent !important;
          opacity: 0 !important;
        }

        :deep(.q-icon) {
          color: var(--tm-white) !important;
        }
      }
    }

    &--secondary.top-mining-button--surface-light {
      background: var(--tm-white) !important;
      border-color: var(--tm-btn-orange);
      color: var(--tm-btn-text) !important;

      .top-mining-button__icon {
        opacity: 0.55;
      }

      &:hover,
      &:focus-visible {
        background: var(--tm-btn-orange) !important;
        border-color: var(--tm-btn-orange);
        color: var(--tm-white) !important;

        .top-mining-button__icon {
          filter: brightness(0) invert(1);
          opacity: 1;
        }

        :deep(.q-icon) {
          color: var(--tm-white) !important;
        }
      }
    }

    &--secondary.top-mining-button--surface-dark {
      background: transparent !important;
      border-color: var(--tm-btn-orange);
      color: var(--tm-white) !important;

      .top-mining-button__icon {
        filter: brightness(0) invert(1);
        opacity: 1;
      }

      &:hover,
      &:focus-visible {
        background: var(--tm-btn-orange) !important;
        border-color: var(--tm-btn-orange);
        color: var(--tm-white) !important;

        .top-mining-button__icon {
          filter: brightness(0) invert(1);
          opacity: 1;
        }

        :deep(.q-icon) {
          color: var(--tm-white) !important;
        }
      }
    }

    &--tertiary {
      background: transparent !important;
      border-color: transparent;
      color: var(--tm-btn-text) !important;

      .top-mining-button__icon {
        opacity: 0.55;
      }

      &:hover,
      &:focus-visible {
        background: transparent !important;
        border-color: transparent;
        color: var(--tm-btn-orange) !important;

        :deep(.q-icon) {
          color: var(--tm-btn-icon) !important;
        }
      }
    }

    &.top-mining-button--contact:hover,
    &.top-mining-button--contact:focus-visible {
      background: transparent !important;
      border-color: var(--tm-btn-orange) !important;
      color: var(--tm-btn-text) !important;
      box-shadow: none;

      :deep(.q-focus-helper) {
        background: transparent !important;
        opacity: 0 !important;
      }
    }

    .top-mining-button__label {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
    }

    .top-mining-button__icon {
      flex: 0 0 auto;
      width: 1.15em;
      height: 1.15em;
      object-fit: contain;

      &--prepend {
        margin-right: 2px;
      }

      &--append {
        margin-left: 2px;
      }
    }
  }
</style>
