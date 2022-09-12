import { ref, readonly } from 'vue';
const degree = ref(0);
const updateDegreeHandler = value => (degree.value += value);
const resetDegreeHandler = () => (degree.value = 0);

export default {
  degree: readonly(degree),
  updateDegreeHandler,
  resetDegreeHandler
};
