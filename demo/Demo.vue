<template>
    <div
        class="antialiased w-full min-h-screen
         duration-300 transition text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
    >
        <Icon />
        <Btn
            size="md"
            type="fill"
            color="error"
            round
            :icon="mdiAccount"
        >
            button
        </Btn>
    </div>
</template>
<script setup lang="ts">
import {Btn, Icon} from '../src/'
import { mdiAccount } from '@mdi/js'
</script>