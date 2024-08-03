import type { PropType, ExtractPropTypes } from 'vue'

export type ButtonColor =
  | 'primary'
  | 'primary--dark'
  | 'primary--light'
  | 'secondary'
  | 'secondary--light'
  | 'secondary--dark'
  | 'black'
  | 'white'
  | 'gray--light'
  | 'gray--dark'
  | 'success'
  | 'error'

export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonType = 'fill' | 'light' | 'ghost' | 'text'

export const buttonProps = {
  color: {
    type: String as PropType<ButtonColor>,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<ButtonType>,
    default: 'fill',
  },
  icon: {
    type: String,
    default: '',
  },
  iconPosition: {
    type: String,
    default: 'left',
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'md',
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>