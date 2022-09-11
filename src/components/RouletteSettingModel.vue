<script setup>
import {} from 'vue';
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
</script>

<template>
  <BaseModel :showModal="props.showModel" v-bind="$attrs">
    <template #body>
      <div class="h-[calc(100%-100px)] overflow-y-scroll scrollbar">
        <ul class="w-[100%] flex flex-col justify-center p-[10px]">
          <li
            v-for="(item, idx) in props.data"
            :key="idx"
            class="flex items-center justify-between mb-[10px] border-l-[4px] border-[#4e4376] bg-[#0e171d]"
          >
            <div class="flex items-center p-[8px_16px] text-[#ebe5e5]">
              <p class="w-[50px] mr-[10px]">No. {{ idx + 1 }}</p>

              <input v-model.trim="item.price" class="border border-[#5f5244] bg-transparent p-[4px_8px] text-right outline-none" type="text" />
            </div>

            <div class="flex items-center p-[8px_16px] text-[#fff]">
              <p class="mr-[10px]">Background</p>
              <div class="relative overflow-hidden w-[60px] h-[30px] border border-[#5f5244]">
                <input
                  v-model.trim="item.background"
                  class="bg-transparent text-right outline-none absolute top-[-10px] left-[-10px] h-[80px] w-[80px]"
                  type="color"
                />
              </div>
            </div>

            <div class="flex items-center p-[8px_16px] text-[#fff]">
              <p class="mr-[10px]">Color</p>
              <div class="relative overflow-hidden w-[60px] h-[30px] border border-[#5f5244]">
                <input
                  v-model.trim="item.color"
                  class="bg-transparent text-right outline-none absolute top-[-10px] left-[-10px] h-[80px] w-[80px]"
                  type="color"
                />
              </div>
            </div>
            <div class="flex items-center p-[8px_16px] text-[#fff]">
              <button class="hover:text-[#4e4376] cursor-pointer">DELETE</button>
            </div>
          </li>
        </ul>
      </div>
      <button class="block w-[150px] h-[50px] rounded-[50px] m-[0_auto] font-bold text-[1.25rem] text-[#fff] bg-[#4e4376]" @click="clickSave">
        ADD
      </button>
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
