<template>
  <div class="form-area">

    <label for="name">name</label>
    <input
    	type=""
    	name="name"
    	@change="onChange"
    >
    <button
    	@click="onClick"
    >submit</button>

  </div>
</template>
<script lang="ts" src="./form-area.ts"></script>
<style lang="postcss" scoped>
  .form-area {
    input {
      border: 1px solid color(black a(16%));
    }
  }
</style>

