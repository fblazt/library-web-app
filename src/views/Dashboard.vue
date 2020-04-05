<template>
  <div class="flex flex-col">
    <Navbar></Navbar>
    <main class="m-5 mt-20">
      <section class="flex flex-col">
        <div>
          <h1 class="text-4xl font-semibold">List Book</h1>
        </div>
        <div class="mt-5">
          <section>
            <article class="flex flex-wrap w-full justify-center">
              <router-link
                :to="'/detail-book/' + item.id"
                v-for="item in dataRange"
                :key="item.id"
                class="w-56 rounded-lg overflow-hidden shadow-2xl m-2"
              >
                <img class="w-full" :src="item.image" alt="Book cover" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl text-center mb-2 truncate">{{ item.title }}</div>
                  <p class="text-gray-700 text-base truncate" id="desc">{{ item.description }}</p>
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
    };
  },
  components: {
    Navbar,
  },
  computed: {
    dataRange() {
      return this.data.slice(0, 10);
    },
  },
  mounted() {
    axios
      .get("http://localhost:1202/book")
      .then(response => (this.data = response.data.result));
  },
};
</script>

<style>
</style>