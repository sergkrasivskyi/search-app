<script setup>
import { ref, computed } from "vue";
import FlatCard from '@/components/FlatCard.vue'
import TheSearchNav from '@/components/TheSearchNav.vue'
import AppSearchButton from '@/components/UI/AppSearchButton.vue'
import { useFlatsStore } from '../stores/flats';
import { useSheetsStore } from '../stores/sheets';
const flatsStore = useFlatsStore()
const sheetsStore = useSheetsStore()
// let isSearchComplete = ref(false)
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
        <!-- навігація пошуку, у якій обирається форма запиту: Оренда - Купівля, т.п. -->
        <!-- @rent="rent"
        @buy="buy"
        @toRent="toRent"
        @toSell="toSell" -->
        <TheSearchNav 
          @toGetData="sheetsStore.getData"/>

        <div class="searcher | uppercase bg-yellow-100 px-5 py-3 rounded-lg">
          <div class="type-building | flex ">
            <!-- пошук за типом будинку - новобудова або вторинне житло -->
            <app-search-button
              class="cursor-pointer text-center basis-1/2 active border-sky-500 font-semibold text-sky-600  bg-yellow-100 px-4 py-2"
              @clickButton="$emit('new')">Новобудови</app-search-button>
            <app-search-button
              class="cursor-pointer text-center basis-1/2  border-sky-500   font-semibold text-sky-600  bg-yellow-100 px-4 py-2"
              @clickButton="$emit('using')">Вторинна</app-search-button>
          </div>
          <form class="estate-filters | flex gap-x-3 mt-4" @submit.prevent="flatsStore.getFilteredFlatList(filters)">
            <!-- фільтри для пошуку -->
          
              <fieldset class="rooms-number | flex gap-x-1 ">
                <legend class="font-medium text-sky-600  bg-yellow-100 px-4 py-2">Кількість кімнат</legend>
                <!-- фільтр за кількістю кімнат -->
                <div>
                  <input class="| relative left-4 top-5 -z-10  " type="checkbox" name="rooms" id="room-1" value="1" v-model="rooms">
                  <label class="border-solid border-sky-300 border cursor-pointer font-medium  text-sky-600  bg-yellow-100 px-4 py-2"
                    for="room-1">1</label>
                </div>
                <div>
                  <input class="| relative left-4 top-5 -z-10  " type="checkbox" name="rooms" id="room-2" value="2" v-model="rooms">
                  <label class="border-solid border-sky-300 border cursor-pointer  font-medium  text-sky-600  bg-yellow-100 px-4 py-2"
                    for="room-2">2</label>
                </div>
                <div>
                  <input class="|  relative left-4 top-5 -z-10  " type="checkbox" name="rooms" id="room-3" value="3" v-model="rooms">
                  <label class="border-solid border-sky-300 border cursor-pointer font-medium  text-sky-600  bg-yellow-100 px-4 py-2"
                    for="room-3">3</label>
                </div>
                <div>
                  <input class="| relative left-4 top-5 -z-10" type="checkbox" name="rooms" id="room-4" value="4" v-model="rooms">
                  <label class="border-solid border-sky-300 border cursor-pointer font-medium  text-sky-600  bg-yellow-100 px-4 py-2"
                    for="room-4">4+</label>
                </div>
              </fieldset>
            <fieldset class="price | flex flex-col gap-x-1">
              <!-- фільтр за вартістю -->
              <label class="font-medium  text-sky-600  bg-yellow-100 px-4 py-2" for="estate-price-start">Вартість
                об'єкту</label>
              <div class="price-enter | ">
                <!-- вказуємо початкову вартість  -->
                <input
                  class="border-solid border-sky-300 border cursor-pointer font-medium  text-sky-600  bg-yellow-100 px-4 py-2"
                  type="text" name="price" id="estate-price-start" placeholder="від" v-model="startPrice">
                <!-- вказуємо верхній поріг вартості -->
                <input
                  class="border-solid border-sky-300 border cursor-pointer font-medium  text-sky-600  bg-yellow-100 px-4 py-2"
                  type="text" name="price" id="estate-price-end" placeholder="до" v-model="endPrice">
              </div>
            </fieldset>
            <app-search-button type="submit" class="border-2 border-solid border-sky-500 rounded-lg"
              @clickButton="isSearchComplete = true">Пошук</app-search-button>
          </form>
      </div>
    </div>
  </div>
  <div class="cards-list | flex flex-wrap gap-2" v-show="!isSearchComplete">
    <flat-card v-for="flat in flatsStore.flatList" :key="flat.flatId" :flat="flat" />
  </div>
  <div v-show="isSearchComplete" class="cards-list | flex flex-wrap gap-2">
    <flat-card v-for="flat in flatsStore.filteredList" :key="flat.flatId" :flat="flat" />
  </div>
  </div>
</template>
<script>

export default {
  name: 'SearchView',
  data() {
    return {
      isSearchComplete: false,
      startPrice: '',
      endPrice: '',
      rooms: [],
      homes: [],
    }
  },
  computed: {
    filters() {
      let startPrice = 0
      this.startPrice === ''
        ? startPrice = 0
        : startPrice = this.startPrice

      let endPrice = 0
      this.endPrice === ''
        ? endPrice = 99999999
        : endPrice = this.endPrice
      
      if (!this.rooms.length) {
        this.isSearchComplete = false
      }

      return {
        priceStart: startPrice, 
        priceEnd: endPrice, 
        rooms: [...this.rooms] }
    }
  },
  methods: {

  },
  watch: {
    filters: {
      handler(state) {
        localStorage.setItem('userFilters', JSON.stringify(state))
      }
      ,
      deep: true
    }  
    
  }
}
</script>
<style scoped>
.search-form {
  background-image: url('@/assets/images/searcher-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.active {
  @apply border-b-2 border-solid;
}
input:checked + label {
  @apply bg-sky-600 text-yellow-100
}
</style>
