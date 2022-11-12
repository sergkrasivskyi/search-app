<script setup>
import FlatCard from '@/components/FlatCard.vue'
import { useFlatsStore } from '../stores/flats';
const flatsStore = useFlatsStore()
</script>

<template>
  <div class="cards-list | flex flex-wrap gap-2">
    <FlatCard v-for="flat in flatsStore.flatList" 
    :key="flat.flatId"
    :flat="flat"/>
  </div>
</template>
