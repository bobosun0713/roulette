<script setup lang="ts">
import { reactive, computed, inject } from "vue";
import { RouletteStoreKey } from "@/symbols";
import BaseModel from "@/components/BaseModel.vue";

interface RouletteDataInfo {
  id: string;
  price: string;
  deg?: number;
  background: string;
  color: string;
}
const props = withDefaults(defineProps<{ showModel: boolean; data: Array<RouletteDataInfo> }>(), {
  showModel: false,
  data: () => []
});


const emit = defineEmits(["update:data"]);
const { start } = inject(RouletteStoreKey)!;

const defaultBackgroundColors = reactive<string[]>(["#517fa4", "#2a5298", "#04befe", "#5239ac"]);

const canDelete = computed(() => props.data.length <= 2);

const addHandler = () => {
  const addData: RouletteDataInfo = {
    id: `${props.data.length + 1}`,
    price: '0',
    background: defaultBackgroundColors[(props.data.length + 1) % defaultBackgroundColors.length],
    color: "#ffffff"
  };
  const updateOrigin = [...props.data].concat(addData);
  emit("update:data", updateOrigin);
};

const deleteHandler = (idx: number) => {
  const deleteOrigin = [...props.data];
  deleteOrigin.splice(idx, 1);
  emit("update:data", deleteOrigin);
};
</script>

<template>
  <BaseModel :showModal="props.showModel" v-bind="$attrs">
    <template #body>
      <div class="h-[100%] flex flex-col">
        <div class="text-[1.25rem] text-center text-[#fff] tracking-[1px] p-[4px_0] bg-[#4e4376]">Settings</div>
        <div class="grow h-[calc(100%-100px)] overflow-y-scroll scrollbar">
          <transition-group
            name="list"
            tag="ul"
            mode="out-in"
            class="w-[100%] flex flex-col justify-center p-[10px] overflow-hidden"
          >
            <li
              v-for="(item, idx) in props.data"
              :key="item.id"
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
                <div
                  class="relative overflow-hidden md:w-[60px] xxxs:w-[calc(100%-120px)] h-[30px] border border-[#5f5244]"
                >
                  <input
                    v-model.trim="item.background"
                    class="bg-transparent text-right outline-none absolute top-[-10px] md:left-[-10px] xxxs:left-[-5px] h-[80px] md:w-[80px] xxxs:w-[110%]"
                    type="color"
                  />
                </div>
              </div>

              <div class="flex items-center p-[8px_16px] text-[#fff]">
                <p class="md:w-auto xxxs:w-[120px] mr-[10px]">Color</p>
                <div
                  class="relative overflow-hidden md:w-[60px] xxxs:w-[calc(100%-120px)] h-[30px] border border-[#5f5244]"
                >
                  <input
                    v-model.trim="item.color"
                    class="bg-transparent text-right outline-none absolute top-[-10px] md:left-[-10px] xxxs:left-[-5px] h-[80px] md:w-[80px] xxxs:w-[110%]"
                    type="color"
                  />
                </div>
              </div>

              <div class="flex items-center md:self-auto xxxs:self-center p-[8px_16px] text-[#e24242] font-bold">
                <button
                  class="hover:text-[#4e4376] cursor-pointer"
                  :class="{ ' cursor-not-allowed': canDelete }"
                  :disabled="canDelete"
                  @click="deleteHandler(idx)"
                >
                  DELETE
                </button>
              </div>
            </li>
          </transition-group>
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

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>
