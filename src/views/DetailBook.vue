<template>
  <div class="flex flex-col">
    <Navbar></Navbar>
    <div class="flex flex-col" v-for="item in data" :key="item.id">
      <header class="h-64 pt-56 mt-16 bg-cover" :style="image">
        <div class="flex justify-end -mt-48 px-1 md:mr-10">
          <button @click="isOpen = !isOpen" class="modal-button text-2xl font-normal mr-3 bg-white rounded-sm px-2 hover:text-white hover:bg-yellow-500">Edit</button>
          <button @click="deleteBook" class="text-2xl font-normal bg-white rounded-sm px-2 hover:text-white hover:bg-yellow-500">Delete</button>
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
            >{{item.name_category}}</a>
            <p class="text-4xl font-semibold" :class="item.status == 'Available' ? 'text-green-500' : 'text-red-500'">{{item.status}}</p>
          </div>
          <h2 class="text-4xl font-bold">{{item.title}}</h2>
          <p class="text-2xl mb-3">2020-03-26</p>
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
        </div>
      </main>
    </div>

    <!-- Modal -->
    <div id="modal" :class="isOpen ? 'fixed h-full w-full w-1/2' : 'hidden'" class=" overflow-y-auto">
      <form id="update" class="w-1/2 mx-auto bg-white my-24 flex flex-col justify-center items-center p-10 rounded-lg shadow-2xl" v-for="input in data" :key="input.id">
        <div class="flex flex-col mb-5 w-full">
          <div class="flex flex-row justify-between">
            <p class="text-4xl">Edit book</p>
            <button @click="isOpen = !isOpen">
              <svg
            class="w-12 h-12 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              v-if="isOpen"
              class="heroicon-ui"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            /></svg>
            </button>
          </div>
        </div>
        <div class="flex flex-col mb-5 w-3/5">
          <div class="flex flex-row justify-between">
            <label for="title">Title</label>
            <input type="text" name="title" id="title" class="h-10 w-64 px-2 rounded-lg border border-black border-solid" v-model="input.title">
          </div>
        </div>
        <div class="flex flex-col my-5 w-3/5">
          <div class="flex flex-row justify-between">
            <label for="author">Author</label>
            <input type="text" name="author" id="author" class="h-10 w-64 px-2 rounded-lg border border-black border-solid" v-model="input.author">
          </div>
        </div>
        <div class="flex flex-col my-5 w-3/5">
          <div class="flex flex-row justify-between">
            <label for="image">Image</label>
            <input type="text" name="image" id="image" class="h-10 w-64 px-2 rounded-lg border border-black border-solid" v-model="input.image">
          </div>
        </div>
        <div class="flex flex-col my-5 w-3/5">
          <div class="flex flex-row justify-between">
            <label for="status">Status</label>
            <input type="text" name="status" id="status" class="h-10 w-64 px-2 rounded-lg border border-black border-solid" v-model="input.status">
          </div>
        </div>
        <div class="flex flex-col my-5 w-3/5">
          <div class="flex flex-row justify-between">
            <label for="category">Category</label>
            <input type="text" name="category" id="category" class="h-10 w-64 px-2 rounded-lg border border-black border-solid" v-model="input.id_category">
          </div>
        </div>
        <div class="flex flex-col my-5 w-3/5">
          <div class="flex flex-row justify-between">
            <label for="description">Description</label>
            <textarea name="description" id="description" rows="5" class="w-64 px-2 rounded-lg border border-black border-solid" v-model="input.description"></textarea>
          </div>
        </div>
        <div class="flex flex-row justify-end mt-5 w-3/4">
          <button form="update" @click="updateBook" class="rounded-lg px-10 py-2 text-white bg-yellow-500 text-2xl">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

// import { required } from "vuelidate/lib/validators";

import Navbar from "../components/modules/Navbar";

export default {
  name: "DetailBook",
  props: ["id"],
  data() {
    return {
      data: {},
      isOpen: false,
    };
  },
  // validations: {
  //   title: { required },
  //   author: { required },
  //   description: { required },
  //   image: { required },
  //   id_category: { required },
  // },
  components: {
    Navbar
  },
  mounted() {
    
    axios
      .get(`${process.env.VUE_APP_API_URL}book/${this.id}`)
      .then(response => (this.data = response.data.result));
      // .then(res => console.log(res.data.result[0].image))    
      
  },
  methods: {
    updateBook(e) {
      e.preventDefault()
      axios
        .patch(`${process.env.VUE_APP_API_URL}book/${this.id}`, {
        title: this.data.title,
        description: this.data.description,
        image: this.data.image,
        author: this.data.author,
        id_category: this.data.id_category,
        })
        .then(res => {
          this.$router.push(`detail-book/${this.id}`)
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteBook() {
      axios
        .delete(`${process.env.VUE_APP_API_URL}book/${this.id}`)
        .then(res => {
          this.$router.push('/dashboard')
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
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