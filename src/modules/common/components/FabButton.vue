<template>
  <button @click="$emit('click')" :class="['btn btn-circle btn-secondary fixed', positionClasses]">

    <slot />

  </button>
</template>


<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const props = withDefaults(defineProps<Props>(), {
  position: 'bottom-left'
});

defineEmits(['click']);

const positionClasses = computed(() => {
  switch (props.position) {
    case 'top-left':
      return 'top-10 left-10';
    case 'top-right':
      return 'top-10 right-10';
    case 'bottom-left':
      return 'bottom-10 left-10';
    case 'bottom-right':
      return 'bottom-10 right-10';
    default:
      return 'bottom-10 left-10';
  }
});
</script>
