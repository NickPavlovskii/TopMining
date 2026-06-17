<template>
  <q-btn
    :class="[
      'top-mining-button',
      { 'top-mining-button--outlined': border },
    ]"
    :outline="border"
    :unelevated="!border"
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
    <template v-if="$slots.prepend" #prepend>
      <slot name="prepend" />
    </template>
    <template v-else-if="prependIcon" #prepend>
      <img
        alt=""
        class="top-mining-button__icon top-mining-button__icon--prepend"
        :src="prependIcon"
      />
    </template>

    <slot>
      <span class="top-mining-button__label">{{ title }}</span>
    </slot>

    <template v-if="$slots.append" #append>
      <slot name="append" />
    </template>
    <template v-else-if="appendIcon" #append>
      <img
        alt=""
        class="top-mining-button__icon top-mining-button__icon--append"
        :src="appendIcon"
      />
    </template>
  </q-btn>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      title?: string
      prependIcon?: string
      appendIcon?: string
      bgColor?: string
      color?: string
      borderColor?: string
      width?: string | number
      border?: boolean
      href?: string
      target?: string
      type?: 'button' | 'submit' | 'reset'
    }>(),
    {
      title: '',
      prependIcon: '',
      appendIcon: '',
      bgColor: 'white',
      color: 'black',
      borderColor: '#e7e7e7',
      width: '100%',
      border: true,
      href: '',
      target: '',
      type: 'button',
    },
  )

  const emit = defineEmits<{
    click: [ev: MouseEvent]
  }>()

  const buttonStyle = computed(() => ({
    width: typeof props.width === 'number' ? `${props.width}px` : props.width,
    background: props.bgColor,
    color: props.color,
    borderColor: props.border ? props.borderColor : 'transparent',
  }))

  function onClick(event: MouseEvent) {
    emit('click', event)
  }
</script>

<style scoped lang="scss">
  .top-mining-button {
    display: inline-flex !important;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: center !important;
    min-height: 0 !important;
    padding: 0 16px !important;
    border-radius: 10px;
    font-weight: 500;
    line-height: 1 !important;
    text-align: center;
    text-transform: none;
    color: v-bind('color') !important;

    :deep(.q-btn__content) {
      display: inline-flex !important;
      flex: 0 1 auto !important;
      align-items: center !important;
      align-self: center !important;
      justify-content: center !important;
      gap: 8px;
      min-height: 0 !important;
      padding: 0 !important;
      margin: 0 !important;
      color: inherit !important;
      line-height: 1 !important;
      text-align: center;
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

    &.q-btn--outline::before {
      border-color: v-bind('borderColor');
    }

    &.q-btn--unelevated {
      box-shadow: none;
    }

    .top-mining-button__label {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      transform: translateY(-1px);
    }

    .top-mining-button__icon {
      flex: 0 0 auto;
      width: 1em;
      height: 1em;
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
