import type { PropType, ExtractPropTypes } from 'vue'
export const iconProps = {
    iconName: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: ''
      }
}
export type iconProps = ExtractPropTypes<typeof iconProps>