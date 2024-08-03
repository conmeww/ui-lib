<template>
    <div
        class="antialiased w-full min-h-screen
         duration-300 transition text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
    >
        <Btn
            size="md"
            type="fill"
            color="error"
            round
        >
            button
        </Btn>
    </div>
</template>
<script setup lang="ts">
import {Btn} from '../src/'
</script>