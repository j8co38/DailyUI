<template>
  <div class="article">
    <header>
      <p class="header--title">#Daily UI</p>
    </header>

      <transition appear>
        <div>
          <div
            v-html="post"
            class="article--content"
          >{{ post }}</div>

          <div class="article--navigation">
            <router-link
              v-if="Number(slug) > 1"
              :to="`/article/${prevPost}`"
              class="prev"
            ><i class="fas fa-arrow-alt-circle-left"></i>prev</router-link>
            <router-link
              to="/"
              class="top"
            ><i class="fas fa-th"></i></router-link>
            <router-link
              v-if="!isLatest"
              :to="`/article/${nextPost}`"
              class="next"
            >next<i class="fas fa-arrow-alt-circle-right"></i></router-link>
          </div>
        </div>
      </transition>

    <footer-section></footer-section>

    <loading v-if="isLoading"></loading>
  </div>
</template>
<script lang="ts" src="./article.ts"></script>
<style src="./article.css" scoped></style>
