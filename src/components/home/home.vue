<template>
  <div class="home">
    <header>
      <div class="header--content">
        <h1>#Daily UI</h1>
        <div class="header--progress_wrap">
          <div
            class="header--progress_balloon"
            :class="{ 'active' : posts.length }"
            :style="`left: calc(${posts.length}% - 22px)`"
          >{{ posts.length }}/100</div>
          <div class="header--progress">
            <div
              class="header--progress_current"
              :style="`width: ${posts.length}%`"
            ></div>
          </div>
        </div>
        <p class="header--author">created by <a href="https://twitter.com/y8vj3" target="_blank">@y8vj3</a></p>
      </div>
    </header>

    <transition appear>
      <div class="posts">
        <template v-for="(post, index) in posts">
          <router-link
            :key="`post-${index}`"
            :to="{ name: 'article', params: { slug: post.slug }}"
            class="post"
          >
            <template v-if="post.featured_image.src">
              <div class="post--image">
                <img
                  :src="post.featured_image.src"
                  :key="`image-${index}`"
                >
              </div>
            </template>
            <div class="post--overlay">
              <p class="post--title">{{ post.title.rendered }}</p>
            </div>
          </router-link>
        </template>
      </div>
    </transition>

    <footer-section></footer-section>

    <loading v-if="isLoading"></loading>
  </div>
</template>
<script lang="ts" src="./home.ts"></script>
<style src="./home.css" scoped></style>
