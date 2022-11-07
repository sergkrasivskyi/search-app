import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useFlatsStore = defineStore("flats", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  const flatsList = ref([
    { id: 0, image: "src/assets/images/0/0.jpg" },
    { id: 1, image: "src/assets/images/0/1.jpg" },
    { id: 2, image: "src/assets/images/0/2.jpg" },
    { id: 3, image: "src/assets/images/0/3.jpg" },
    { id: 4, image: "src/assets/images/0/4.jpg" },
    { id: 5, image: "src/assets/images/0/5.jpg" },
    { id: 6, image: "src/assets/images/0/6.jpg" },
  ]);
  function addFlat(flat) {
    let item = { id: Date.now(), ...flat}
    flatsList.value.push(...item);
  }
  function increment() {
    count.value++;
  }

  return { flatsList, addFlat };
});
