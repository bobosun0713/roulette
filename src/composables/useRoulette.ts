import { readonly, type Ref, ref } from "vue";

interface UseRoulette {
  degree: Readonly<Ref<number>>;
  start: Readonly<Ref<boolean>>;
  updateStartState: () => void;
  updateDegree: (value: number) => void;
}

const degree = ref(0);
const start = ref(false);

const updateStartState = (): void => {
  start.value = !start.value;
};

const updateDegree = (value: number): void => {
  degree.value += value;
};

export default (): UseRoulette => ({
  degree: readonly(degree),
  start: readonly(start),
  updateStartState,
  updateDegree
});
