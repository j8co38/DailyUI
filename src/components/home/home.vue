<template>
  <div class="home">
    <header>
      <div class="header--content">
        <h1>#Daily UI</h1>
        <p class="header--author">created by <a href="https://twitter.com/y8vj3" target="_blank">@y8vj3</a></p>
      </div>
    </header>
    <div class="posts">
      <template v-for="(post, index) in posts">
        <a
          :key="`post-${index}`"
          :href="`/#/article/${post.id}`"
          class="post"
        >
          <template v-if="post._embedded['wp:featuredmedia']">
            <div class="post--image">
              <img
                :src="post._embedded['wp:featuredmedia'][0].source_url"
                :key="`image-${index}`"
              >
            </div>
          </template>
          <div class="post--overlay">
            <p class="post--title">{{ post.title.rendered }}</p>
          </div>
        </a>
      </template>
    </div>

    <footer-section></footer-section>
  </div>
</template>
<script lang="ts" src="./home.ts"></script>
<style src="./home.css" scoped></style>
