<template>
  <div class="flex flex-col">
    <Navbar></Navbar>
    <div class="flex flex-col" v-for="item in data" :key="item.id">
      <header class="h-64 pt-56 mt-16 bg-cover" :style="image">
        <div class="flex justify-end -mt-48 px-1 md:mr-10">
          <!-- <a href="" class="modal-button text-white text-2xl font-thin mx-1">Edit</a> -->
          <p class="modal-button text-white text-2xl font-thin mx-1">Edit</p>
          <a href="" class="text-white text-2xl font-thin mx-1">Delete</a>
        </div>
        <div class="modal opacity-0 pointer-events-none absolute w-full h-full top-0 left-0 flex items-center justify-center">
          <div class="modal-overlay absolute w-full h-full bg-black opacity-25 top-0 left-0 cursor-pointer"></div>
          <div class="absolute w-1/2 h-32 bg-white rounded-sm shadow-lg flex items-center justify-center text-2xl">
            🚀
          </div>
        </div>
      </header>
      <div id="thumbnail" class="flex items-center justify-center md:justify-end md:mr-10">
        <img :src="item.image" alt="" class="bg-blue-200 w-48 h-64 -mt-32 rounded-lg shadow-lg">
      </div>
      <main class="px-4 my-5 md:mx-10 md:-mt-32">
        <div class="md:w-3/4">
          <div class="flex items-center justify-between">
            <a href="" class="rounded-full bg-yellow-400 px-2 py-1 text-xs font-normal mr-3 text-white">Category</a>
            <p class="text-green-500 text-4xl">Status</p>
          </div>
          <h2 class="text-4xl font-bold">{{item.title}}</h2>
          <p class="text-2xl mb-3">{{item.created_at}}</p>
          <p>{{item.description}}</p>
        </div>
        <div class="flex justify-end mt-3 md:float-right md:w-1/5">
          <button type="submit" class="rounded bg-yellow-500 py-3 text-2xl text-white w-4/5 mx-1 shadow-lg md:w-3/5">Add to cart</button>
          <router-link to="/user/borrow-books" class="rounded bg-yellow-500 py-3 w-1/5 mx-1 flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white" width="24" height="24">
              <path class="heroicon-ui" d="M17 16a3 3 0 11-2.83 2H9.83a3 3 0 11-5.62-.1A3 3 0 015 12V4H3a1 1 0 110-2h3a1 1 0 011 1v1h14a1 1 0 01.9 1.45l-4 8a1 1 0 01-.9.55H5a1 1 0 000 2h12zM7 12h9.38l3-6H7v6zm0 8a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"/>
            </svg>
          </router-link>
          <!-- <button type="submit" class="rounded bg-yellow-500 py-3 w-1/5 mx-1 flex justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white" width="24" height="24">
              <path class="heroicon-ui" d="M17 16a3 3 0 11-2.83 2H9.83a3 3 0 11-5.62-.1A3 3 0 015 12V4H3a1 1 0 110-2h3a1 1 0 011 1v1h14a1 1 0 01.9 1.45l-4 8a1 1 0 01-.9.55H5a1 1 0 000 2h12zM7 12h9.38l3-6H7v6zm0 8a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"/>
            </svg>
          </button> -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/modules/Navbar";

export default {
  name: 'DetailBook',
  data() {
    return {
      data: [0]
    }
  },
  components: {
    Navbar,
  },
  mounted() {
    axios
      .get(`http://localhost:1202/book/4`)
      .then(response => (this.data = response.data.result));
  },
  computed: {
    image() {
      return {
        backgroundImage : `url(${this.data.image})`,
      }
    }
  }
}
</script>

<style>

</style>