<template>
  <div class="card">
    <p>name: {{ name }}</p>
  </div>
</template>
<script lang="ts" src="./card.ts"></script>
<style lang="postcss" scoped>
  .card {
    padding: 2em;
    border: 1px solid color(black a(16%));
    border-radius: 8px;
  }
</style>
