<template>
  <header class="fixed flex flex-col-reverse lg:flex-col w-full bg-white shadow-xl">
    <aside
      :class="isOpen ? 'block lg:fixed h-full lg:w-1/5 bg-white shadow-xl' : 'hidden'"
      class="transition-transform duration-500 ease-in-out"
    >
      <div class="hidden lg:flex justify-end lg:m-3">
        <button @click="isOpen = !isOpen" class="focus:outline-none hover:text-gray-400">
          <svg
            class="w-12 h-12 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              v-if="isOpen"
              class="heroicon-ui"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
          </svg>
        </button>
      </div>
      <div class="my-5">
        <img src="@/assets/img/account.png" alt="Profile image" class="w-1/2 mx-auto" />
        <p class="mt-5 text-center text-2xl font-bold">Default user</p>
      </div>
      <div class="flex flex-col ml-5 my-5">
        <a href class="mt-2 text-xl font-bold">Explore</a>
        <a href class="mt-2 text-xl font-bold">History</a>
        <button @click="modal = !modal" class="mt-2 text-xl font-bold">Add Book</button>
        <router-link to="/login" class="mt-2 text-xl font-bold">Log out</router-link>
      </div>
    </aside>
    <nav class="flex justify-between items-center lg:shadow-xl p-2">
      <button
        @click="isOpen = !isOpen"
        type="button"
        class="focus:outline-none hover:text-gray-400 transition duration-300"
      >
        <svg class="w-12 h-12 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            v-if="isOpen"
            class="heroicon-ui"
            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
          />
          <path
            v-if="!isOpen"
            class="heroicon-ui"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        </svg>
      </button>
      <div class="hidden lg:flex">
        <span class="relative mx-2 font-semibold">
          <button class="font-bold focus:outline-none" @click="dropdownOne = !dropdownOne">
            All Categories
            <i class="fas fa-caret-down"></i>
          </button>
          <div
            :class="dropdownOne ? 'absolute bg-gray-100 border-none w-full' : 'hidden'"
            class="flex flex-col"
          >
            <a href class="px-2 py-1 hover:bg-white">Komik</a>
            <a href class="px-2 py-1 hover:bg-white">Novel</a>
            <a href class="px-2 py-1 hover:bg-white">Pendidikan</a>
          </div>
        </span>
        <span class="mx-2">
          <button class="font-bold focus:outline-none">
            All Time
            <i class="fas fa-caret-down"></i>
          </button>
          <div class="hidden">
            <a href>Masa lalu</a>
            <a href>Masa depan</a>
            <a href>Masa masa indahku denganmu</a>
          </div>
        </span>
      </div>
      <div class="hidden lg:block">
        <input
          id="search"
          type="text"
          placeholder="Search book"
          class="border border-solid border-gray-400 pl-5 pr-24 py-2 rounded-full text-sm focus:outline-none focus:border-gray-600"
        />
      </div>
      <div>
        <router-link to="/dashboard" class="flex items-center">
          <img src="@/assets/img/bookshelf.png" alt="Home Icon" class="w-12 h-12" />
          <p class="hidden md:block text-4xl font-semibold">Library</p>
        </router-link>
      </div>
    </nav>

    <!-- Modal -->
    <div
      id="modal"
      :class="modal ? 'fixed h-full w-full w-1/2' : 'hidden'"
      class="overflow-y-auto"
    >
      <form
        id="update"
        class="abosolute w-1/2 mx-auto bg-white my-24 flex flex-col justify-center items-center p-10 rounded-lg shadow-2xl"
      >
        <div class="flex flex-col mb-5 w-full">
          <div class="flex flex-row justify-between">
            <p class="text-4xl">Add book</p>
            <button @click="modal = !modal">
              <svg
                class="w-12 h-12 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  v-if="modal"
                  class="heroicon-ui"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="flex flex-col mb-5 w-3/5">
          <div class="flex flex-row justify-between">
            <label for="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              class="h-10 w-64 px-2 rounded-lg border border-black border-solid"
              v-model="book.title"
            />
          </div>
        </div>
        <div class="flex flex-col my-5 w-3/5">
          <div class="flex flex-row justify-between">
            <label for="author">Author</label>
            <input
              type="text"
              name="author"
              id="author"
              class="h-10 w-64 px-2 rounded-lg border border-black border-solid"
              v-model="book.author"
            />
          </div>
        </div>
        <div class="flex flex-col my-5 w-3/5">
          <div class="flex flex-row justify-between">
            <label for="image">Image</label>
            <input
              type="file"
              name="image"
              id="file"
              ref="file"
              class="h-10 w-64 px-2 rounded-lg border border-black border-solid"
            />
          </div>
        </div>
        <div class="flex flex-col my-5 w-3/5">
          <div class="flex flex-row justify-between">
            <label for="category">Category</label>
            <input
              type="text"
              name="category"
              id="category"
              class="h-10 w-64 px-2 rounded-lg border border-black border-solid"
              v-model="book.id_category"
            />
          </div>
        </div>
        <div class="flex flex-col my-5 w-3/5">
          <div class="flex flex-row justify-between">
            <label for="description">Description</label>
            <textarea
              name="description"
              id="description"
              rows="5"
              class="w-64 px-2 rounded-lg border border-black border-solid"
              v-model="book.description"
            ></textarea>
          </div>
        </div>
        <div class="flex flex-row justify-end mt-5 w-3/4">
          <button
            form="update"
            @click="submitBook"
            class="rounded-lg px-10 py-2 text-white bg-yellow-500 text-2xl"
          >Save</button>
        </div>
      </form>
    </div>
  </header>
</template>

<script>
import axios from 'axios';

export default {
  name: "Navbar",
  data() {
    return {
      modal: false,
      isOpen: false,
      dropdownOne: false,
      dropdownTwo: false,
      book: {
        title: '',
        description: '',
        author: '',
        status: '',
        id_category: '',
      },
    };
  },
  methods: {
    submitBook(e) {
      e.preventDefault()
      const bookData = new FormData();
      bookData.append('title', this.book.title);
      bookData.append('description', this.book.description);
      bookData.append('author', this.book.author);
      bookData.append('image', this.$refs.file.files[0]);
      bookData.append('id_category', this.book.category);  
      axios
        .post("http://localhost:8000/api/v1/book", bookData)
        .then ((res) => {
          console.log(res)
          this.$router.push('/dashboard')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
};
</script>

<style>
</style>