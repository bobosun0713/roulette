import type { Ref } from 'vue';

export interface RouletteStoreInfo {
  degree: Readonly<Ref<number>>,
  start: Readonly<Ref<boolean>>,
  updateStartState: () => boolean;
  updateDegree: (degree: number) => number;
}

