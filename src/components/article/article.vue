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
              to="/"
            ><i class="fas fa-arrow-alt-circle-left"></i>TOP</router-link>
          </div>
        </div>
      </transition>

    <footer-section></footer-section>

    <loading v-if="isLoading"></loading>
  </div>
</template>
<script lang="ts" src="./article.ts"></script>
<style src="./article.css" scoped></style>
