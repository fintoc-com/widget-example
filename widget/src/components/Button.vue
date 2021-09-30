<script setup>
  const emit = defineEmits(['on-click']);
  const props = defineProps({
    text: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <div
    class="button"
    @click="emit('on-click')"
  >
    {{ props.text }}
  </div>
</template>

<style scoped>
.button {
  border: 1px black solid;
  padding: 5px 10px;
  border-radius: 5px;
  user-select: none;
}

.button:hover {
  cursor: pointer;
}
</style>
