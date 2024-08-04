<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon'
import {iconProps} from './Icon'

const props = defineProps(iconProps)

</script>
<template>
    <svg-icon
        type="mdi"
        :path="props.iconName"
    />
</template>