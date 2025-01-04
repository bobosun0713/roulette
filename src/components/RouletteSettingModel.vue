<script setup lang="ts">
import { computed } from "vue";

import BaseModel from "@/components/BaseModel.vue";
import useRoulette from "@/composables/useRoulette";

import type { RouletteItem } from "./types";

const modelValue = defineModel<boolean>({ default: false });
const itemsValue = defineModel<RouletteItem[]>("items", { default: () => [] });

const { start } = useRoulette();

const defaultBgColors = ["#517fa4", "#2a5298", "#04befe", "#5239ac"];

const canDelete = computed(() => itemsValue.value.length <= 2);

const handleAdd = (): void => {
  const addData: RouletteItem = {
    id: `${itemsValue.value.length + 1}`,
    price: "0",
    deg: 0,
    background: defaultBgColors[(itemsValue.value.length + 1) % defaultBgColors.length],
    color: "#ffffff"
  };

  itemsValue.value.push(addData);
};

const handleDelete = (idx: number): void => {
  if (itemsValue.value.length <= 2) return;
  itemsValue.value.splice(idx, 1);
};
</script>

<template>
  <BaseModel v-model="modelValue">
    <template #header>
      <div class="roulette-modal-header bg-[#4e4376] p-[4px_0] text-center text-[1.25rem] tracking-[1px] text-[#fff]">
        Settings
      </div>
    </template>

    <template #body>
      <TransitionGroup name="list" tag="ul" mode="in-out" class="roulette-modal-list">
        <li v-for="(item, idx) in itemsValue" :key="item.id" class="roulette-modal-item">
          <div class="roulette-modal-item__content">
            <label :for="`no-${idx}`"> No. {{ idx + 1 }} </label>
            <input :id="`no-${idx}`" v-model.trim="item.price" type="text" />
          </div>

          <div class="roulette-modal-item__content">
            <label :for="`bg-${idx}`"> Background </label>
            <input :id="`bg-${idx}`" v-model.trim="item.background" type="color" />
          </div>

          <div class="roulette-modal-item__content">
            <label :for="`text-${idx}`"> Color </label>
            <input :id="`text-${idx}`" v-model.trim="item.color" type="color" />
          </div>

          <div class="roulette-modal-item__content">
            <button
              type="button"
              class="roulette-modal-item__delete"
              :disabled="canDelete || start"
              @click="handleDelete(idx)"
            >
              Delete
            </button>
          </div>
        </li>
      </TransitionGroup>
    </template>

    <template #footer>
      <button type="button" class="roulette-modal-add" :disabled="start" @click="handleAdd">ADD</button>
    </template>
  </BaseModel>
</template>

<style lang="scss" scoped>
.roulette-modal-header {
  padding: 4px 0;
  font-size: 20px;
  text-align: center;
  background-color: #4e4376;
}

.roulette-modal-list {
  padding: 10px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 50px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
}

.roulette-modal-item {
  display: flex;
  justify-content: space-between;
  border-left: 4px solid #4e4376;
  background-color: $dark;
  font-size: 16px;
  transition: all 0.5s ease;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &__content {
    display: flex;
    align-items: center;
    padding: 8px 16px;
  }

  label {
    margin-right: 10px;
    white-space: nowrap;
  }

  input {
    background-color: transparent;
    border: 1px solid $secondary;
    padding: 4px 8px;
    text-align: right;
    outline: none;
    color: $light;
  }

  &__content:nth-child(1) label {
    width: 50px;
  }

  &__content:nth-child(2) input,
  &__content:nth-child(3) input {
    padding: 0;
    border: none;
  }

  &__delete {
    border: 0;
    background-color: transparent;
    color: $error;

    &:hover {
      color: $tertiary;
    }

    &:disabled {
      color: $primary;
      cursor: not-allowed;
    }
  }
}

.roulette-modal-add {
  margin: 16px auto;
  display: block;
  height: 50px;
  width: 150px;
  border: none;
  border-radius: 50px;
  background-color: $primary-dark;
  font-size: 20px;
  font-weight: bold;
  color: $light;

  &:disabled {
    color: $dark;
    cursor: not-allowed;
  }
}

.list-enter-active,
.list-leave-active {
  transform: translateX(0);
  opacity: 1;
}

.list-enter-from,
.list-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.list-leave-active {
  position: absolute;
  display: none;
}
</style>
