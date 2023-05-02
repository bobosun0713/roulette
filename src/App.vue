<script setup lang="ts">
import { RouletteStoreKey } from '@/symbols';
import { ref, onMounted, watch, provide } from 'vue';
import RouletteBar from '@/components/RouletteBar.vue';
import RouletteWrap from '@/components/RouletteWrap.vue';
import RouletteSettingModal from '@/components/RouletteSettingModel.vue';
import RouletteStore from '@/composition/rouletteStore';

provide(RouletteStoreKey, RouletteStore);

const isOpenSetting = ref(false);
const rouletteData = ref([
  {
    id: '1',
    price: '200',
    deg: 0,
    background: '#517fa4',
    color: '#ffffff'
  },
  {
    id: '2',
    price: '250',
    deg: 0,
    background: '#2a5298',
    color: '#ffffff'
  },
  {
    id: '3',
    price: '300',
    deg: 0,
    background: '#04befe',
    color: '#ffffff'
  }
]);


watch(
  () => rouletteData.value,
  () => {
    transformRouletteDeg();
  }
);
onMounted(() => {
  transformRouletteDeg();
});

const transformRouletteDeg = () => {
  rouletteData.value.forEach((item, idx) => {
    item.deg = (360 / rouletteData.value.length) * (rouletteData.value.length - idx);
  });
};
const toggleModel = (val:boolean) => (isOpenSetting.value = val);
</script>

<template>
  <RouletteBar v-model="isOpenSetting"></RouletteBar>
  <RouletteWrap :data="rouletteData"></RouletteWrap>
  <RouletteSettingModal v-model:data="rouletteData" :showModel="isOpenSetting" @on-close="toggleModel"></RouletteSettingModal>
</template>
