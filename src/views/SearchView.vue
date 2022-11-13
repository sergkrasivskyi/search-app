<script setup>
import FlatCard from '@/components/FlatCard.vue'
import AppSearchButton from '@/components/UI/AppSearchButton.vue'
import { useFlatsStore } from '../stores/flats';
const flatsStore = useFlatsStore()
const isSearchComplete = true
</script>

<template>
  <div class="search-container | px-2">
    <div class="search-form | flex flex-col items-center bg-transparent rounded-lg gap-y-7 py-4 ">
      <div class="title">
        <h2
          class="search-form-title | rounded-lg px-7 py-2 font-bold text-4xl text-sky-600 bg-yellow-100 text-center inline-block">
          Агенція Нерухомості Град-Інвест</h2>
      </div>
      <div class="search-form-main | flex flex-col gap-y-2 px-8 py-4 bg-transparent rounded-lg">
        <div class="search-form-buttons | flex flex-nowrap gap-x-2">
          <app-search-button class="basis-1/4">Орендувати</app-search-button>
          <app-search-button class="basis-1/4">Купити</app-search-button>
          <app-search-button class="basis-1/4">Здати</app-search-button>
          <app-search-button class="basis-1/4">Продати</app-search-button>
        </div>
        <div class="searcher | uppercase bg-yellow-100 px-5 py-3 rounded-lg">
          <div class="type-building | flex ">
            <input class="hidden" type="radio" name="estate" id="new-estate" value="new">
            <label class="text-center basis-1/2 border-b-2 border-solid border-sky-500   font-semibold text-sky-600  bg-yellow-100 px-4 py-2"
              for="new-estate">Новобудови</label>
            <input class="hidden" type="radio" name="estate" id="using-estate" value="using">
            <label class="text-center basis-1/2 border-b rounded-lg font-semibold text-sky-600  bg-yellow-100 px-4 py-2" for="new-estate">Вторинна</label>
          </div>
          <div class="estate-filters | flex gap-x-3 mt-4 ">
            <div class="rooms | ">
              <p class="font-medium  text-sky-600  bg-yellow-100 px-4 py-2">Кількість кімнат</p>
              <div class="rooms-number | flex gap-x-1 ">
                <input class="| hidden" type="checkbox" name="rooms" id="room-1" value="1">
                <label class="border-solid border-sky-300 border cursor-pointer font-medium  text-sky-600  bg-yellow-100 px-4 py-2" for="room-1">1</label>
                <input class="| hidden" type="checkbox" name="rooms" id="room-2" value="2">
                <label class="border-solid border-sky-300 border cursor-pointer  font-medium  text-sky-600  bg-yellow-100 px-4 py-2" for="room-1">2</label>
                <input class="| hidden" type="checkbox" name="rooms" id="room-3" value="3">
                <label class="border-solid border-sky-300 border cursor-pointer font-medium  text-sky-600  bg-yellow-100 px-4 py-2" for="room-1">3</label>
                <input class="| hidden" type="checkbox" name="rooms" id="room-4" value="4">
                <label class="border-solid border-sky-300 border cursor-pointer font-medium  text-sky-600  bg-yellow-100 px-4 py-2" for="room-1">4</label>
              </div>
            </div>
            <div class="price | flex flex-col gap-x-1">
                <label class="font-medium  text-sky-600  bg-yellow-100 px-4 py-2"
                  for="estate-price-start">Вартість об'єкту</label>
                  <div class="price-enter | ">
                    <input class="border-solid border-sky-300 border cursor-pointer font-medium  text-sky-600  bg-yellow-100 px-4 py-2" type="text" name="price" id="estate-price-start" v-model="startPrice">
                    <input class="border-solid border-sky-300 border cursor-pointer font-medium  text-sky-600  bg-yellow-100 px-4 py-2" type="text" name="price" id="estate-price-end" v-model="endPrice">
                  </div>
            </div>
          </div>
        </div>
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
