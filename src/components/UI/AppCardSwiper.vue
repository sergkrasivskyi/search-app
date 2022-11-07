<template>
  <swiper 
    :modules="modules" 
    :slides-per-view="1" 
    :space-between="1" 
    navigation 
    :loop="true"
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }" 
    @swiper="onSwiper"
    @slideChange="onSlideChange">

    <swiper-slide v-for="image in imageList"
      :key="image.id"
      tag="img"
      :zoom='true'
      :src='image.image'
      class="rounded"
      >
    
      <!-- <div class="image-place">
        <img :src='image.image' alt="image">
      </div> -->
    </swiper-slide>
    <!-- <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide> -->
    ...
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Parallax } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    imageList: { type: Array, default:  [{id: 0, image: 'src/assets/images/0/0.jpg'}
    , {id: 1, image: 'src/assets/images/0/1.jpg'}
    , {id: 2, image: 'src/assets/images/0/2.jpg'}
    , {id: 3, image: 'src/assets/images/0/3.jpg'}
    , {id: 4, image: 'src/assets/images/0/4.jpg'}
    , {id: 5, image: 'src/assets/images/0/5.jpg'}
    , {id: 6, image: 'src/assets/images/0/6.jpg'}
  ]}
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Mousewheel, Parallax],
    };
  },
};
</script>
<style scoped>
.image-place {
  
}
</style>