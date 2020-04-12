<template>
  <div class="flex flex-col">
    <Navbar></Navbar>
    <main class="m-5 mt-20">
      <section class="flex flex-col">
        <div class="h-64 w-full my-5 flex justify-around items-center">
          <div v-for="item in data[Math.floor(Math.random() * data.length)]" :key="item.id" class=" hidden md:flex h-56 w-1/4 rounded-lg bg-gray-400 shadow-xl flex-col justify-end">
            <div class="h-1/2 bg-gray-500 p-5 text-white rounded-b-lg">
              <h2 class="text-2xl font-bold">{{item.title}}</h2>
              <p class="text-xl font-semibold">{{item.author}}</p>
            </div>
          </div>
          <div class="h-64 w-full md:w-4/12 rounded-lg bg-gray-400 shadow-xl flex flex-col justify-end">
            <div class="h-1/2 bg-gray-500 p-5 text-white rounded-b-lg">
              <h2 class="text-4xl font-bold">Book title</h2>
              <p class="text-2xl font-semibold">Author</p>
            </div>
          </div>
          <div class="hidden md:flex h-56 w-1/4 rounded-lg bg-gray-400 shadow-xl flex-col justify-end">
            <div class="h-1/2 bg-gray-500 p-5 text-white rounded-b-lg">
              <h2 class="text-2xl font-bold">Book title</h2>
              <p class="text-xl font-semibold">Author</p>
            </div>
          </div>
        </div>
        <div>
          <h1 class="text-4xl font-semibold">List Book</h1>
        </div>
        <div class="mt-5">
          <section>
            <article class="flex flex-wrap w-full justify-around md:justify-center">
              <router-link
                v-for="item in dataRange"
                :key="item.id_book"
                :to="'/detail-book/' + item.id_book"
                class="w-32 md:w-56 rounded-lg overflow-hidden shadow-2xl m-2"
              >
                <img class="w-full" :src="item.image" alt="Book cover" />
                <div class="px-2 py-1 md:px-6 md:py-4">
                  <div class="font-bold text-sm md:text-xl text-center mb-2 truncate">{{ item.title }}</div>
                  <p class="text-gray-700 text-xs md:text-base truncate" id="desc">{{ item.description }}</p>
                </div>
              </router-link>
            </article>
          </section>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from "../components/modules/Navbar";

export default {
  name: "Dashboard",
  data() {
    return {
      data: [],
      randomData: []
    };
  },
  components: {
    Navbar,
  },
  computed: {
    dataRange() {
      return this.data.slice(0, 12);
    },
    // dataRandom() {
    //   // const random = Math.floor(Math.random() * this.data.length);
    //   // return this.randomData = this.data[random];
    // },
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/v1/book")
      .then(response => (this.data = response.data.result));
  },
};
</script>

<style>
</style>