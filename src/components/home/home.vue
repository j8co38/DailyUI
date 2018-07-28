<template>
  <div class="home">
    <template v-for="(post, index) in posts">
      <a
        :key="`post-${index}`"
        :href="`/#/article/${post.id}`"
      >
        <template v-if="post._embedded['wp:featuredmedia']">
          <img
            :src="post._embedded['wp:featuredmedia'][0].source_url"
            :key="`image-${index}`"
          >
        </template>
        <p>{{ post.title.rendered }}</p>
      </a>
    </template>
  </div>
</template>
<script lang="ts" src="./home.ts"></script>
<style src="./home.css" scoped></style>
