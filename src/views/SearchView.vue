<script setup>
import FlatCard from '@/components/FlatCard.vue'
import TheSearchNav from '@/components/TheSearchNav.vue'
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
        <!-- навігація пошуку, у якій обирається форма запиту: Оренда - Купівля, т.п. -->
        <TheSearchNav 
          @rent="rent"
          @buy="buy"
          @toRent="toRent"
          @toSell="toSell"
        />

        <div class="searcher | uppercase bg-yellow-100 px-5 py-3 rounded-lg">
          <div class="type-building | flex ">
            <!-- пошук за типом будинку - новобудова або вторинне житло -->
            <app-search-button class="cursor-pointer text-center basis-1/2 active border-sky-500 font-semibold text-sky-600  bg-yellow-100 px-4 py-2" @clickButton="$emit('new')">Новобудови</app-search-button>
            <app-search-button class="cursor-pointer text-center basis-1/2  border-sky-500   font-semibold text-sky-600  bg-yellow-100 px-4 py-2" @clickButton="$emit('using')">Вторинна</app-search-button>
          </div>
          <form class="estate-filters | flex gap-x-3 mt-4 ">
            <!-- фільтри для пошуку -->
            <div class="rooms | ">
              <p class="font-medium  text-sky-600  bg-yellow-100 px-4 py-2">Кількість кімнат</p>
              <div class="rooms-number | flex gap-x-1 ">
                <!-- фільтр за кількістю кімнат -->
                <input class="| hidden " type="checkbox" name="rooms" 
                id="room-1" value="1">
                <label class="border-solid border-sky-300 border cursor-pointer font-medium  text-sky-600  bg-yellow-100 px-4 py-2" 
                for="room-1">1</label>
                <input class="| hidden" type="checkbox" name="rooms" 
                id="room-2" value="2">
                <label class="border-solid border-sky-300 border cursor-pointer  font-medium  text-sky-600  bg-yellow-100 px-4 py-2" 
                for="room-1">2</label>
                <input class="| hidden" type="checkbox" name="rooms" 
                id="room-3" value="3">
                <label class="border-solid border-sky-300 border cursor-pointer font-medium  text-sky-600  bg-yellow-100 px-4 py-2" 
                for="room-1">3</label>
                <input class="| hidden" type="checkbox" name="rooms" 
                id="room-4" value="4">
                <label class="border-solid border-sky-300 border cursor-pointer font-medium  text-sky-600  bg-yellow-100 px-4 py-2" 
                for="room-1">4</label>
              </div>
            </div>
            <div class="price | flex flex-col gap-x-1">
              <!-- фільтр за вартістю -->
                <label class="font-medium  text-sky-600  bg-yellow-100 px-4 py-2"
                  for="estate-price-start">Вартість об'єкту</label>
                  <div class="price-enter | ">
                    <!-- вказуємо початкову вартість  -->
                    <input class="border-solid border-sky-300 border cursor-pointer font-medium  text-sky-600  bg-yellow-100 px-4 py-2" type="text" name="price" id="estate-price-start" v-model="startPrice">
                    <!-- вказуємо верхній поріг вартості -->
                    <input class="border-solid border-sky-300 border cursor-pointer font-medium  text-sky-600  bg-yellow-100 px-4 py-2" type="text" name="price" id="estate-price-end" v-model="endPrice">
                  </div>
            </div>
            <app-search-button type="button" class="border-2 border-solid border-sky-500 rounded-lg">Пошук</app-search-button>
          </form>
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
<script>
export default {
  name: 'SearchView',
  methods: {
    rent() {
      // this.$emit('rent')
      console.log('rent!', event.target);
    },
    buy() {
      // this.$emit('buy')
      console.log('buy!', event.target);
    },
    toRent() {
      // this.$emit('toRent')
      console.log('toRent!', event.target);
    },
    toSell() {
      // this.$emit('toSell')
      console.log('toSell!', event.target);
    },
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
