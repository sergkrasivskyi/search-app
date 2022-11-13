import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useFlatsStore = defineStore("flats", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  const flatList = ref([
    {
      flatId: 0,
      price: 10000,
      isFavorite: false,
      views: 4,
      title: "1-room Flat for sale",
      crmNumber: "SL-12345",
      square: 33,
      rooms: 1,
      district: "Kharkiv, Slobidsky",
    },
    {
      flatId: 1,
      price: 20000,
      isFavorite: true,
      views: 3,
      title: "2-room Flat for sale",
      crmNumber: "SL-12346",
      square: 60,
      rooms: 2,
      district: "Kharkiv, Osnoviansy",
    },
    {
      flatId: 2,
      price: 30000,
      isFavorite: false,
      views: 8,
      title: "3-room Flat for sale",
      crmNumber: "SL-12347",
      square: 90,
      rooms: 3,
      district: "Kharkiv, Shevchenkivsky",
    },
    {
      flatId: 3,
      price: 40000,
      isFavorite: false,
      views: 10,
      title: "4-room Flat for sale",
      crmNumber: "SL-12348",
      square: 190,
      rooms: 4,
      district: "Kharkiv, Shevchenkivsky",
    },
  ]);
  const flatImages = ref([
    { id: 0, image: "src/assets/images/0/0.jpg" },
    { id: 1, image: "src/assets/images/0/1.jpg" },
    { id: 2, image: "src/assets/images/0/2.jpg" },
    // { id: 3, image: "src/assets/images/0/3.jpg" },
    { id: 4, image: "src/assets/images/0/4.jpg" },
    { id: 5, image: "src/assets/images/0/5.jpg" },
    { id: 6, image: "src/assets/images/0/6.jpg" },
    { id: 6, image: `src/assets/images/0/6.jpg` },
  ]);
  const flatImageList = ref([
    { flatId: 0, id: 0, image: `src/assets/images/0/0.jpg` },
    { flatId: 0, id: 1, image: "src/assets/images/0/1.jpg" },
    { flatId: 0, id: 2, image: "src/assets/images/0/2.jpg" },
    { flatId: 0, id: 3, image: "src/assets/images/0/3.jpg" },
    { flatId: 1, id: 4, image: "src/assets/images/1/0.jpg" },
    { flatId: 1, id: 5, image: "src/assets/images/1/1.jpg" },
    { flatId: 1, id: 6, image: "src/assets/images/1/2.jpg" },
    { flatId: 1, id: 0, image: `src/assets/images/1/3.jpg` },
    { flatId: 2, id: 1, image: "src/assets/images/2/0.jpg" },
    { flatId: 2, id: 2, image: "src/assets/images/2/1.jpg" },
    { flatId: 2, id: 3, image: "src/assets/images/2/2.jpg" },
    { flatId: 2, id: 4, image: "src/assets/images/2/3.jpg" },
    { flatId: 2, id: 5, image: "src/assets/images/2/4.jpg" },
    { flatId: 3, id: 6, image: "src/assets/images/3/0.jpg" },
    { flatId: 3, id: 6, image: "src/assets/images/3/1.jpg" },
    { flatId: 3, id: 6, image: "src/assets/images/3/2.jpg" },
    { flatId: 3, id: 6, image: "src/assets/images/3/3.jpg" },
  ]);

  function getImageListByFlatId(flatId) {
    return flatImageList.value.filter((elem) => elem.flatId === flatId);
  }
  function addFlat(flat) {
    let item = { id: Date.now(), ...flat };
    flatList.value.push(...item);
  }
  function getFilteredFlatList(filters) {
    return flatList.value.filter(
      (element) =>
        filters.rooms.includes(element.rooms) &&
        element.price > filters.priceStart &&
        element.price < filters.priceEnd
    );
    
  }

  return {
    flatList,
    flatImages,
    flatImageList,
    addFlat,
    getImageListByFlatId,
    getFilteredFlatList,
  };
});
