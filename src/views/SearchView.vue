<script setup>
import { ref, computed } from "vue";
import FlatCard from '@/components/FlatCard.vue'
import TheSearchNav from '@/components/TheSearchNav.vue'
import AppSearchButton from '@/components/UI/AppSearchButton.vue'
import { useFlatsStore } from '../stores/flats';
const flatsStore = useFlatsStore()
let isSearchComplete = ref(false)
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
        />

        <div class="searcher | uppercase bg-yellow-100 px-5 py-3 rounded-lg">
          <div class="type-building | flex ">
            <!-- пошук за типом будинку - новобудова або вторинне житло -->
            <app-search-button class="cursor-pointer text-center basis-1/2 active border-sky-500 font-semibold text-sky-600  bg-yellow-100 px-4 py-2" @clickButton="$emit('new')">Новобудови</app-search-button>
            <app-search-button class="cursor-pointer text-center basis-1/2  border-sky-500   font-semibold text-sky-600  bg-yellow-100 px-4 py-2" @clickButton="$emit('using')">Вторинна</app-search-button>
          </div>
          <form class="estate-filters | flex gap-x-3 mt-4"
            @submit.prevent="flatsStore.getFilteredFlatList(filters)"
            >
            <!-- фільтри для пошуку -->
            <div class="rooms | ">
              <p class="font-medium text-sky-600  bg-yellow-100 px-4 py-2">Кількість кімнат</p>
              <div class="rooms-number | flex gap-x-1 ">
                <!-- фільтр за кількістю кімнат -->
                <input class="|  " type="checkbox" name="rooms" 
                id="room-1" value="1"
                v-model="rooms">
                <label class="border-solid border-sky-300 border cursor-pointer font-medium  text-sky-600  bg-yellow-100 px-4 py-2" 
                for="room-1">1</label>
                <input class="| " type="checkbox" name="rooms" 
                id="room-2" value="2"
                v-model="rooms">
                <label class="border-solid border-sky-300 border cursor-pointer  font-medium  text-sky-600  bg-yellow-100 px-4 py-2" 
                for="room-2">2</label>
                <input class="|  " type="checkbox" name="rooms" 
                id="room-3" value="3"
                v-model="rooms">
                <label class="border-solid border-sky-300 border cursor-pointer font-medium  text-sky-600  bg-yellow-100 px-4 py-2" 
                for="room-3">3</label>
                <input class="| " type="checkbox" name="rooms" 
                id="room-4" value="4" 
                v-model="rooms">
                <label class="border-solid border-sky-300 border cursor-pointer font-medium  text-sky-600  bg-yellow-100 px-4 py-2" 
                for="room-4">4</label>
              </div>
            </div>
            <div class="price | flex flex-col gap-x-1">
              <!-- фільтр за вартістю -->
                <label class="font-medium  text-sky-600  bg-yellow-100 px-4 py-2"
                  for="estate-price-start">Вартість об'єкту</label>
                  <div class="price-enter | ">
                    <!-- вказуємо початкову вартість  -->
                    <input class="border-solid border-sky-300 border cursor-pointer font-medium  text-sky-600  bg-yellow-100 px-4 py-2" type="text" name="price" id="estate-price-start"
                    placeholder="від"
                    v-model="startPrice">
                    <!-- вказуємо верхній поріг вартості -->
                    <input class="border-solid border-sky-300 border cursor-pointer font-medium  text-sky-600  bg-yellow-100 px-4 py-2" type="text" name="price" id="estate-price-end" 
                    placeholder="до"
                    v-model="endPrice">
                  </div>
            </div>
            <app-search-button type="submit" class="border-2 border-solid border-sky-500 rounded-lg"
              @clickButton="isSearchComplete = true"
            >Пошук</app-search-button>
          </form>
        </div>
      </div>
    </div>
    <div class="cards-list | flex flex-wrap gap-2"
      v-show="!isSearchComplete">
      <flat-card v-for="flat in flatsStore.flatList" 
      :key="flat.flatId" 
      :flat="flat" />
    </div>
    <div v-show="isSearchComplete" class="cards-list | flex flex-wrap gap-2">
      <flat-card v-for="flat in flatsStore.filteredList" 
      :key="flat.flatId" 
      :flat="flat" />
    </div>
  </div>
</template>
<script>

export default {
  name: 'SearchView',
  data() {
    return {
      startPrice: '',
      endPrice: '',
      rooms: [],
      homes: [],
    }
  },
  computed: {
    filters() {
      return { priceStart: this.startPrice, priceEnd: this.endPrice, rooms: [...this.rooms] }
    }
  },
  methods: {
    
  },
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
</style>
