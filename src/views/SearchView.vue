<script setup>
import FlatCard from '@/components/FlatCard.vue'
import AppSearchButton from '@/components/UI/AppSearchButton.vue'
import { useFlatsStore } from '../stores/flats';
const flatsStore = useFlatsStore()
const isSearchComplete = true
</script>

<template>
  <div class="search-container | px-2">
    <div class="search-form | flex flex-col bg-transparent  rounded-lg gap-y-7 py-4 ">
      <h2 class="search-form-title | font-bold text-4xl text-sky-600  text-center ">Real Estate Agency Grad-Invest</h2>
      <div class="search-form-buttons | flex flex-nowrap gap-x-2 justify-around">
        <app-search-button>Rent</app-search-button>
        <app-search-button>Buy</app-search-button>
        <app-search-button>To Rent</app-search-button>
        <app-search-button>To Sell</app-search-button>
      </div>
      <div class="searcher | uppercase  flex gap-x-6 px-5 py-3 ">
        <input class="hidden" type="radio" name="estate" id="new-estate" value="new">
        <label class=" font-semibold text-sky-600  bg-yellow-200 px-4 py-2" for="new-estate">New Building</label>
        <input class="hidden" type="radio" name="estate" id="using-estate" value="using">
        <label class="font-semibold text-sky-600  bg-yellow-200 px-4 py-2"  for="new-estate">Using Building</label>
      </div>
    </div>
    <div v-show="isSearchComplete" class="cards-list | flex flex-wrap gap-2">
      <flat-card v-for="flat in flatsStore.flatList" 
      :key="flat.flatId" 
      :flat="flat" />
    </div>

  </div>
</template>
<style scoped>
.search-form {
  background-image: url('@/assets/images/searcher-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
