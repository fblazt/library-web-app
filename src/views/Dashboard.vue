<template>
  <div class="flex flex-col">
    <Navbar></Navbar>
    <main class="m-5 mt-20 flex flex-col justify-center items-center">
      <section class="flex flex-col">
        <div class="h-64 w-full my-5 flex justify-around items-center">
          <div v-for="item in headerBooks" :key="item.id" :style="{ backgroundImage: `url('${item.image}')` }" class=" hidden md:flex h-56 w-1/4 rounded-lg bg-gray-400 shadow-xl flex-col justify-end bg-cover">
            <div style="background-color:rgba(0, 0, 0, 0.5);" class="h-1/2 bg-gray-900 p-5 text-white rounded-b-lg">
              <h2 class="text-2xl font-bold">{{ item.title }}</h2>
              <p class="text-xl font-semibold">{{ item.author }}</p>
            </div>
          </div>
          <!-- <div class="h-64 w-full md:w-4/12 rounded-lg bg-gray-400 shadow-xl flex flex-col justify-end">
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
          </div> -->
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
      <div class="w-1/4 mt-20">
        <ul class="flex justify-between list-reset bg-gray-300 border border-grey-light rounded w-auto font-sans">
          <li><a class="block hover:text-yellow-500 hover:bg-blue text-blue border-r border-grey-light px-3 py-2" href="#">Previous</a></li>
          <li><a class="block hover:text-white hover:bg-blue text-blue border-r border-grey-light px-3 py-2" href="#">1</a></li>
          <li><a class="block hover:text-white hover:bg-blue text-blue border-r border-grey-light px-3 py-2" href="#">2</a></li>
          <li><a class="block text-white bg-blue border-r border-blue px-3 py-2" href="#">3</a></li>
          <li><a class="block hover:text-white hover:bg-blue text-blue px-3 py-2" href="#">Next</a></li>
        </ul>
      </div>
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
    headerBooks() {
      return this.data.slice(0, 3)
    }
  },
  mounted() {
    axios
      .get(`${process.env.VUE_APP_API_URL}book`)
      .then(response => (this.data = response.data.result));
  },
};
</script>

<style>
</style>