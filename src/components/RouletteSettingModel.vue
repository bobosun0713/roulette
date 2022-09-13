<script setup>
import { computed, inject } from 'vue';
import BaseModel from '@/components/BaseModel.vue';

const props = defineProps({
  showModel: {
    type: Boolean,
    default: false
  },
  data: {
    type: Array,
    default: () => []
  }
});
const emit = defineEmits(['update:data']);
const { start } = inject('rouletteStore');

const canDelete = computed(() => props.data.length <= 3);
const addHandler = () => {
  const addData = {
    id: props.data.length + 1,
    price: null,
    background: '#75485e',
    color: '#ffffff'
  };
  const updateOrigin = [...props.data].concat(addData);
  emit('update:data', updateOrigin);
};
const deleteHandler = idx => {
  const deleteOrigin = [...props.data];
  deleteOrigin.splice(idx, 1);
  emit('update:data', deleteOrigin);
};
</script>

<template>
  <BaseModel :showModal="props.showModel" v-bind="$attrs">
    <template #body>
      <div class="h-[100%] flex flex-col">
        <div class="text-[1.25rem] text-center text-[#fff] tracking-[1px] p-[4px_0] bg-[#4e4376]">Settings</div>
        <div class="grow h-[calc(100%-100px)] overflow-y-scroll scrollbar">
          <ul class="w-[100%] flex flex-col justify-center p-[10px]">
            <li
              v-for="(item, idx) in props.data"
              :key="idx"
              class="flex md:flex-row xxxs:flex-col flex-wrap md:items-center justify-between mb-[10px] border-l-[4px] border-[#4e4376] bg-[#0e171d]"
            >
              <div class="flex items-center p-[8px_16px] text-[#ebe5e5]">
                <p class="md:w-[50px] xxxs:w-[120px] mr-[10px]">No. {{ idx + 1 }}</p>

                <input
                  v-model.trim="item.price"
                  class="md:w-auto xxxs:w-[calc(100%-120px)] border border-[#5f5244] bg-transparent p-[4px_8px] text-right outline-none"
                  type="text"
                />
              </div>

              <div class="flex items-center p-[8px_16px] text-[#fff]">
                <p class="md:w-auto xxxs:w-[120px] mr-[10px]">Background</p>
                <div class="relative overflow-hidden md:w-[60px] xxxs:w-[calc(100%-120px)] h-[30px] border border-[#5f5244]">
                  <input
                    v-model.trim="item.background"
                    class="bg-transparent text-right outline-none absolute top-[-10px] md:left-[-10px] xxx:left-[0] h-[80px] md:w-[80px] xxxs:w-[100%]"
                    type="color"
                  />
                </div>
              </div>

              <div class="flex items-center p-[8px_16px] text-[#fff]">
                <p class="md:w-auto xxxs:w-[120px] mr-[10px]">Color</p>
                <div class="relative overflow-hidden md:w-[60px] xxxs:w-[calc(100%-120px)] h-[30px] border border-[#5f5244]">
                  <input
                    v-model.trim="item.color"
                    class="bg-transparent text-right outline-none absolute top-[-10px] md:left-[-10px] xxx:left-[0] h-[80px] md:w-[80px] xxxs:w-[100%]"
                    type="color"
                  />
                </div>
              </div>
              <div class="flex items-center md:self-auto xxxs:self-center p-[8px_16px] text-[#e24242] font-bold" @click="deleteHandler(idx)">
                <button
                  class="hover:text-[#4e4376] cursor-pointer"
                  :class="{ 'invisible ': canDelete, ' cursor-not-allowed': start }"
                  :disabled="start"
                >
                  DELETE
                </button>
              </div>
            </li>
          </ul>
        </div>
        <button
          class="block w-[150px] h-[50px] rounded-[50px] m-[16px_auto] font-bold text-[1.25rem] text-[#fff] bg-[#4e4376]"
          :class="{ 'bg-[#333] cursor-not-allowed': start }"
          :disabled="start"
          @click="addHandler"
        >
          ADD
        </button>
      </div>
    </template>
  </BaseModel>
</template>

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 8px;
  height: 50px;
}

.scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}
</style>
