<template>
    <div class="search-form-buttons | flex flex-nowrap gap-x-2">
      <!-- ці кнопки змінюватимуть форму пошуку у залежності від типу запиту -->
      <app-search-button class="basis-1/4 rounded-lg"
        @clickButton="$emit('rent')"
      >Орендувати</app-search-button>
      <app-search-button class="basis-1/4 rounded-lg"
        @clickButton="$emit('buy')"
        >Купити</app-search-button>
        <app-search-button class="basis-1/4 rounded-lg"
        @clickButton="$emit('toRent')"
        >Здати</app-search-button>
        <app-search-button class="basis-1/4 rounded-lg"
        @clickButton="$emit('toSell')"
      >Продати</app-search-button>
        <app-search-button class="basis-1/4 rounded-lg"
        @clickButton="$emit('toGetData')"
        >Отримати дані</app-search-button>
    </div>
</template>

<script>
import AppSearchButton from '@/components/UI/AppSearchButton.vue'
export default {
  name: 'TheSearchNav',
  components: { AppSearchButton },
  // methods: {
  //   rent() {
  //     this.$emit('rent')
  //     // console.log('rent!', event.target);
  //   },
  //   buy() {
  //     this.$emit('buy')
  //     // console.log('buy!', event.target);
  //   },
  //   toRent() {
  //     this.$emit('toRent')
  //     // console.log('toRent!', event.target);
  //   },
  //   toSell() {
  //     this.$emit('toSell')
  //     // console.log('toSell!', event.target);
  //   },
  // },
}
</script>

<style scoped>

</style>