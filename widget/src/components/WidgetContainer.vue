<script setup>
  import Button from './Button.vue';
  import * as widgetAPI from '../utils/widgetApi';

  function firstEvent() {
    console.log('WIDGET: Triggering the first event...');
    widgetAPI.widgetEvent(1);
  }

  function secondEvent() {
    console.log('WIDGET: Triggering the second event...');
    widgetAPI.widgetEvent(2);
  }

  function thirdEvent() {
    console.log('WIDGET: Triggering the third event...');
    widgetAPI.widgetEvent(3);
  }
</script>

<template>
  <div class="container">
    <Button
      text="Trigger first event"
      @on-click="firstEvent"
    />

    <Button
      text="Trigger second event"
      @on-click="secondEvent"
    />

    <Button
      text="Trigger third event"
      @on-click="thirdEvent"
    />
  </div>
</template>

<style scoped>
.container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
</style>
