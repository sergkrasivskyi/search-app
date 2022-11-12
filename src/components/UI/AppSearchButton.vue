<template>
  <button class="app-button | font-semibold   px-8 py-2 text-xl text-sky-600 hover:bg-yellow-200  bg-yellow-200 rounded-lg"
    type="button"
    v-bind="$attrs"
    @click="$emit('clickButton')">
      <slot></slot>
  </button>
</template>

<script>
  export default {
  name: 'AppSearchButton'
  }
</script>