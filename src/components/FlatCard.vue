<template>
  <div
    class="card |  flex flex-col gap-y-1 min-w-[12rem] bg-[var(--card-bg-cl)] bg-clip-border rounded border border-solid border-sky-300 max-w-xs px-2 py-1 ">
    <div class="card-slider | max-w-xs w-full ">
        <AppCardSwiper
        :imageList="flatsStore.getImageListByFlatId(flat.flatId)"
        :flatId="flat.flatId"/>
    </div>
    <div class="card-body | flex flex-col flex-auto gap-y-6 min-h-[1px]">
      <div class="card-body-top | flex justify-between">
        <div class="card-price | flex gap-x-1 text-[#4bbcc5] text-base font-bold cursor-pointer">
          <span> {{ flat.price }}</span> <span>$</span>
        </div>
        <div class="card-favorite-views | flex items-center gap-x-3">
          <div class="card-favorite-icon | text-[#4bbcc5] cursor-pointer">
            <Icon v-show="!flat.isFavorite" icon="mdi:heart-outline" />
            <Icon v-show="flat.isFavorite" icon="mdi:heart" />
          </div>
          <div class="card-views | flex gap-x-1 items-center text-[#bbb]">
            <Icon icon="mdi:eye-outline" />
            <span>{{ flat.views }}</span>
          </div>
        </div>
      </div>
      <div class="card-body-main | flex flex-col gap-y-2 justify-start">
        <div class="card-title | text-[var(--card-title-cl)] text-sm font-semibold ">
          {{ flat.title }}
        </div>
        <div class="flat-crm-number">
          <span class="text-xs px-2 py-1 text-[var(--card-title-cl)] bg-[var(--card-number-bg-cl)]"> {{ flat.crmNumber }} </span>
        </div>
        <div class="card-description | text-sm font-semibold text-[var(--card-description-text-cl)]">
          {{ flat.square }} | {{ flat.rooms }} | {{ flat.district }}
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {mapStores} from 'pinia'
import { useFlatsStore } from '@/stores/flats'

import { Icon } from '@iconify/vue';
import AppCardSwiper from '@/components/UI/AppCardSwiper.vue'
export default {
  name: 'FlatCard',
  components: {
    Icon, AppCardSwiper
  },
  props: {
    flat: {
      Object, default: {
        flatId: 0,
        price: 0,
        isFavorite: false,
        views: 0,
        title: 'Flat for sale',
        crmNumber: 'SL-12345',
        square: 33,
        rooms: 1,
        district: 'Kharkiv'
      }
    }
  },
  computed: {
    ...mapStores(useFlatsStore)

  },

}
</script>

<style lang="css" scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:regular,500,600,700,800,900);
@import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);
.card {
  font-family: Roboto;
  /* position: relative; */
  /* display: flex;
  flex-direction: column;
  min-width: 0; */
  /* word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, .125);
  border-radius: 3px; */
  /* } */

  /* .card .card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem; */
}
/* .card-title {
  color: var(--card-title-color);
} */
.card .card-body-top {
  /* width: 320px; */
  /* display: flex; */
  /* justify-content: space-between; */
}

.card .favorite-views {
  /* display: flex; */
}
</style>