<script setup lang="ts">
import { ref, computed } from 'vue'
import {object2class, getColorType} from '../../utils/setStyles'
import { buttonProps } from './Btn'
const emit = defineEmits(['click'])
const props = defineProps(buttonProps)

const _loading = ref(false)

const handleClick = async (e : MouseEvent) => {
  if (props.disabled || _loading.value || props.loading) return
  emit('click', e)
}

const hasDefaultSlot = ref(false)

const getButtonClass = computed(() => {
  const { size, type, icon, text, color } = props
  const loading = _loading.value || props.loading
  const singleIcon = !!(!text && icon && !hasDefaultSlot.value)
  return object2class('button', {
    size,
    type,
    loading,
    singleIcon,
    color
  })
})

const getIconSize = computed(() => {
  const { size } = props
  switch (size) {
    case 'sm':
      return 12
    case 'md':
      return 14
    case 'lg':
      return 16
    default:
      return 14
  }
})

const getStyle = computed(() => {
  const { round, type, color } = props
  const styleObj: Record<string, string> = {}
   const _color = getColorType(color) || 'primary'
  switch (type) {
    case 'fill':
      styleObj.backgroundColor = `var(--color-${_color})`
      styleObj.color = 'var(--color-white)'
      break
    case 'light':
      styleObj.backgroundColor = `var(--color-${_color}-light)`
      styleObj.color = `var(--color-${_color}-dark)`
      break
    case 'ghost':
      styleObj.backgroundColor = 'transparent'
      styleObj.border = `1px solid var(--color-${_color})`
      styleObj.color = `var(--color-${_color}-dark)`
      styleObj.boxShadow = 'none'
      break
    case 'text':
      styleObj.backgroundColor = 'transparent'
      styleObj.color = `var(--color-${_color}-dark)`
      styleObj.boxShadow = 'none'
      break
    default:
      styleObj.backgroundColor = `var(--color-${_color})`
      break
  }
  styleObj.borderRadius = round ? '50px' : 'none'
  return styleObj
})
</script>

<template>
  <button
    class="button"
    :class="getButtonClass"
    :disabled="disabled"
    :style="getStyle"
    @click="handleClick"
  >
    <div
      class="loading-icon"
      :class="{
        'loading-isShow': (_loading || loading) && !disabled
      }"
    >
    loader
    </div>
    <template v-if="iconPosition === 'left'">
      icon right
    </template>
    <div v-if="$slots.default || text" class="button-content">
      <span class="button-text">
        <template v-if="$slots.default">
          <slot></slot>
        </template>
        <template v-else>
          {{ text }}
        </template>
      </span>
    </div>
    <template v-if="iconPosition === 'right'">
icon right  </template>
  </button>
</template>

<style lang="scss" scoped>
.button {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  flex-shrink: 0;
  user-select: none;
  width: auto;
  white-space: nowrap;
  box-sizing: border-box;
  transition:
    transform 0.1s,
    color 0.35s cubic-bezier(0.65, 0, 0.25, 1),
    padding 0.15s cubic-bezier(0.65, 0, 0.25, 1);
  border: none;
  cursor: pointer;
  border-radius: var(--border-radius-sm);
  box-sizing: border-box;
  overflow: hidden;
  padding: 0px 16px;

  .loading-icon {
    position: absolute;
    opacity: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 0.3s ease-in-out;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .loading-isShow {
    opacity: 1;
  }
  .button-content {
    position: relative;
    z-index: 2;
  }

  .loading-isShow {
    opacity: 1;
  }
}

.button::after {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000, $alpha: 0.2);
  transition: 0.1s all;
  opacity: 0;
  content: '';
}

.button-color-black::after {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #fff, $alpha: 0.2);
  transition: 0.1s all;
  opacity: 0;
  content: '';
}

.button-type-text.button-color-black::after {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000, $alpha: 0.2);
  transition: 0.1s all;
  opacity: 0;
  content: '';
}

.button-type-ghost::after {
  display: none;
}

.button:hover:after {
  opacity: 0.4;
}

.button:active {
  opacity: 1;
}

.button:active::after {
  opacity: 1;
}

.button-size-sm {
  min-width: 50px;
  height: var(--form-item-height-sm);
  line-height: var(--form-item-height-sm);
  font-size: var(--form-font-size-sm);
  gap: 4px;
  .loading-icon {
    left: 9px;
  }
}

.button-size-md {
  min-width: 60px;
  height: var(--form-item-height-md);
  line-height: var(--form-item-height-md);
  font-size: var(--form-font-size-md);
  gap: 6px;
  .loading-icon {
    left: 9.5px;
  }
}

.button-size-lg {
  min-width: 70px;
  height: var(--form-item-height-lg);
  line-height: var(--form-item-height-lg);
  font-size: var(--form-font-size-lg);
  gap: 8px;
  .loading-icon {
    left: 10px;
  }
}

.button-size-sm.button-singleIcon {
  min-width: auto;
  padding: 0px;
  width: var(--form-item-height-sm);
  height: var(--form-item-height-sm);
}

.button-size-md.button-singleIcon {
  min-width: auto;
  padding: 0px;
  width: var(--form-item-height-md);
  height: var(--form-item-height-md);
}

.button-size-lg.button-singleIcon {
  min-width: auto;
  padding: 0px;
  width: var(--form-item-height-lg);
  height: var(--form-item-height-lg);
}

.button.button-loading.button-singleIcon {
  padding: 0px;

  .button-text {
    display: none;
  }

  .button-icon {
    display: none;
  }
}

.button-loading {
  cursor: progress;
  padding-left: 0px;
}

.button-size-sm.button-loading {
  padding-left: 26px;
}

.button-size-md.button-loading {
  padding-left: 30px;
}

.button-size-lg.button-loading {
  padding-left: 34px;
}

.button-loading:active {
  transform: scale(1);
}

.button[disabled] {
  pointer-events: none; 
  opacity: var(--disabled-opacity);
}
.button-type-text:hover {
  background-color: var(--bgcolor-1) !important;
}
.button-type-ghost:hover {
  background-color: var(--bgcolor-2) !important;
}
.button-type-ghost:active {
  background-color: var(--color-normal-light) !important;
}
.button-text {
  text-transform: uppercase;
  font-weight: 500;
}
</style>

<style lang="scss">
.lew-dark .lew-button-color-black.lew-button-type-fill {
  color: #000 !important;
}
</style>