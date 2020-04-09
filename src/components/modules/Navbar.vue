<template>
  <header class="fixed flex flex-col-reverse lg:flex-col w-full bg-white shadow-xl ">
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
        <img src="@/assets/img/account.png" alt="Profile image" class="w-1/2 mx-auto"/>
        <p class="mt-5 text-center text-2xl font-bold">Default user</p>
      </div>
      <div class="flex flex-col ml-5 my-5">
        <a  href="" class="mt-2 text-xl font-bold">Explore</a>
        <a  href="" class="mt-2 text-xl font-bold">History</a>
        <a  href="" class="mt-2 text-xl font-bold">Add Book</a>
        <a  href="" class="mt-2 text-xl font-bold">Log out</a>
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
          <div :class="dropdownOne ? 'absolute bg-gray-100 border-none w-full' : 'hidden'" class="flex flex-col">
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
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isOpen: false,
      dropdownOne: false,
      dropdownTwo: false,
    };
  }
};
</script>

<style>
#search {
  font-family: FontAwesome, "Montserrat";
}
</style>