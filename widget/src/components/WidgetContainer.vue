<script setup>
  import Button from './Button.vue';
  import * as messages from '../widgetAPI/messages';

  function firstEvent() {
    console.log('INTERNAL: Triggering the first event...');
    messages.widgetEvent(1);
  }

  function secondEvent() {
    console.log('INTERNAL: Triggering the second event...');
    messages.widgetEvent(2);
  }

  function thirdEvent() {
    console.log('INTERNAL: Triggering the third event...');
    messages.widgetEvent(3);
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
