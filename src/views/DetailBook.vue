<template>
  <div class="flex flex-col">
    <Navbar></Navbar>
    <div class="flex flex-col" v-for="item in data" :key="item.id">
      <header class="h-64 pt-56 mt-16 bg-cover" :style="image">
        <div class="flex justify-end -mt-48 px-1 md:mr-10">
          <!-- <a href="" class="modal-button text-white text-2xl font-thin mx-1">Edit</a> -->
          <button class="modal-button text-white text-2xl font-normal mr-3">Edit</button>
          <button href class="text-white text-2xl font-normal">Delete</button>
        </div>
      </header>
      <div id="thumbnail" class="flex items-center justify-center md:justify-end md:mr-10">
        <img :src="item.image" alt class="bg-blue-200 w-48 h-64 -mt-32 rounded-lg shadow-lg" />
      </div>
      <main class="px-4 my-5 md:mx-10 md:-mt-32">
        <div class="md:w-3/4">
          <div class="flex items-center justify-between">
            <a
              href
              class="rounded-full bg-yellow-400 px-2 py-1 text-xs font-normal mr-3 text-white"
            >Category</a>
            <p class="text-green-500 text-4xl font-semibold">Available</p>
          </div>
          <h2 class="text-4xl font-bold">{{item.title}}</h2>
          <p class="text-2xl mb-3">17 Agustus 1945</p>
          <p>{{item.description}}</p>
        </div>
        <div class="flex justify-end mt-3 md:float-right md:w-1/5">
          <button
            type="submit"
            class="rounded bg-yellow-500 py-3 text-2xl text-white w-4/5 mx-1 shadow-lg md:w-3/5"
          >Add to cart</button>
          <router-link
            to="/user/borrow-books"
            class="rounded bg-yellow-500 py-3 w-1/5 mx-1 flex items-center justify-center shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="fill-current text-white"
              width="24"
              height="24"
            >
              <path
                class="heroicon-ui"
                d="M17 16a3 3 0 11-2.83 2H9.83a3 3 0 11-5.62-.1A3 3 0 015 12V4H3a1 1 0 110-2h3a1 1 0 011 1v1h14a1 1 0 01.9 1.45l-4 8a1 1 0 01-.9.55H5a1 1 0 000 2h12zM7 12h9.38l3-6H7v6zm0 8a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
              />
            </svg>
          </router-link>
          <!-- <button type="submit" class="rounded bg-yellow-500 py-3 w-1/5 mx-1 flex justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white" width="24" height="24">
              <path class="heroicon-ui" d="M17 16a3 3 0 11-2.83 2H9.83a3 3 0 11-5.62-.1A3 3 0 015 12V4H3a1 1 0 110-2h3a1 1 0 011 1v1h14a1 1 0 01.9 1.45l-4 8a1 1 0 01-.9.55H5a1 1 0 000 2h12zM7 12h9.38l3-6H7v6zm0 8a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"/>
            </svg>
          </button>-->
        </div>
      </main>
    </div>
    <div id="modal" class="fixed h-full w-full opacity-75 w-1/2">
      <form class="w-3/4 mx-auto bg-blue-700 mt-24">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >First Name</label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >Last Name</label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >Password</label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
            />
            <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >City</label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
            />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >State</label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >Zip</label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="90210"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../components/modules/Navbar";

export default {
  name: "DetailBook",
  props: ["id"],
  data() {
    return {
      data: [0]
    };
  },
  components: {
    Navbar
  },
  mounted() {
    axios
      .get(`http://localhost:8000/book/${this.id}`)
      .then(response => (this.data = response.data.result));
  },
  computed: {
    image() {
      return {
        backgroundImage: `url(${this.data[0].image})`
      };
    }
  }
};
</script>

<style>
</style>