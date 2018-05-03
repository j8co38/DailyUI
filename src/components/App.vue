<template>
  <div class="app">
    <card
      :name="displayData.name"
    ></card>
    <form-area
    	:on-change="handleOnChange"
    	:on-click="handleButtonClick"
    >
  	</form-area>
  </div>
</template>
<script lang="ts" src="./app.ts"></script>
<style lang="postcss" scoped>
  .app {
    width: 90%;
    margin: 0 auto;
  }
</style>
