<script setup>
  import { onMounted } from 'vue';
  import WidgetContainer from './WidgetContainer.vue';
  import * as messages from '../widgetAPI/messages';
  import closeURL from '../assets/close.png';


  onMounted(() => {
    console.log('INTERNAL: Widget just got mounted...');
    messages.widgetOpened();
  });

  function closeWidget() {
    console.log('INTERNAL: Closing the widget...');
    messages.widgetClosed();
  }
</script>

<template>
  <div class="widget">
    <div class="close-container">
      <img
        :src="closeURL"
        @click="closeWidget"
        class="close"
      />
    </div>
    <WidgetContainer />
  </div>
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
</style>
