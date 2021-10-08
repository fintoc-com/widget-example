<script setup>
  import { computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  import WidgetContainer from './WidgetContainer.vue';
  import * as widgetAPI from '../utils/widgetApi';
  import closeURL from '../assets/close.png';

  const $store = useStore();

  const loading = computed(() => $store.state.widgetData.loading);
  const title = computed(() => $store.state.widgetData.title);

  onMounted(() => {
    console.log('WIDGET: Just got mounted...');
    widgetAPI.widgetOpened();
  });

  function closeWidget() {
    console.log('WIDGET: Closing the widget...');
    widgetAPI.widgetClosed();
  }
</script>

<template>
  <template v-if="loading">
    Loading...
  </template>
  <template v-else>
    <div class="widget">
      <div class="close-container">
        <img
          :src="closeURL"
          @click="closeWidget"
          class="close"
        />
      </div>
      <div class="title">
        {{ title }}
      </div>
      <WidgetContainer />
    </div>
  </template>
</template>

<style scoped>
.widget {
  z-index: 10;
  width: 360px;
  height: 680px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.close-container {
  display: flex;
  justify-content: flex-end;
  margin: 15px;
}

.close {
  width: 20px;
}

.close:hover {
  cursor: pointer;
}

.title {
  display: flex;
  justify-content: center;
}
</style>
