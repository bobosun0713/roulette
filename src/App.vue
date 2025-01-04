<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

import RouletteBar from "@/components/RouletteBar.vue";
import RouletteSettingModal from "@/components/RouletteSettingModel.vue";
import RouletteWrap from "@/components/RouletteWrap.vue";

const isOpenSetting = ref(false);
const rouletteItems = ref([
  {
    id: "1",
    price: "200",
    deg: 0,
    background: "#517fa4",
    color: "#ffffff"
  },
  {
    id: "2",
    price: "250",
    deg: 0,
    background: "#2a5298",
    color: "#ffffff"
  },
  {
    id: "3",
    price: "300",
    deg: 0,
    background: "#04befe",
    color: "#ffffff"
  }
]);

const calcRotateDeg = (): void => {
  rouletteItems.value.forEach((item, idx) => {
    item.deg = (360 / rouletteItems.value.length) * (rouletteItems.value.length - idx);
  });
};

watch(rouletteItems, () => {
  calcRotateDeg();
});

onMounted(() => {
  calcRotateDeg();
});
</script>

<template>
  <RouletteBar v-model="isOpenSetting"></RouletteBar>
  <RouletteWrap :items="rouletteItems"></RouletteWrap>
  <RouletteSettingModal v-model="isOpenSetting" v-model:items="rouletteItems"></RouletteSettingModal>
</template>
