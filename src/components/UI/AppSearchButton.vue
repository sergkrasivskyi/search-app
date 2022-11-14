<template>
  <button class="button search-button | text-sky-600 bg-yellow-100" 
  type="button" 
  v-bind="$attrs" 
  @click="$emit('clickButton')">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'AppSearchButton'
}
</script>

<style>
.button {
  @apply font-semibold px-8 py-2 text-xl;

}
.search-button:hover {
  @apply text-sky-400 bg-yellow-200;
}
</style>
