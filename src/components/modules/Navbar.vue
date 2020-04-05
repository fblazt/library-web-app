<template>
  <nav class="flex justify-between items-center shadow-xl p-2 fixed w-full bg-white">
    <div>
      <svg class="w-12 h-12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          class="heroicon-ui"
          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
        />
      </svg>
    </div>
    <div class="hidden lg:flex font-bold">
      <span class="mx-2">
        <div>All Categories <i class="fas fa-caret-down"></i></div>
        <div class="hidden">
          <a href="">Komik</a>
          <a href="">Novel</a>
          <a href="">Pendidikan</a>
        </div>
      </span>
      <span class="mx-2">
        <div>All Time <i class="fas fa-caret-down"></i></div>
        <div class="hidden">
          <a href="">Masa lalu</a>
          <a href="">Masa depan</a>
          <a href="">Masa masa indahku denganmu</a>
        </div>
      </span>
    </div>
    <div class="hidden lg:block">
      <input id="search" type="text" placeholder="Search book" class="border border-solid border-gray-400 pl-5 pr-24 py-2 rounded-full text-sm focus:outline-none focus:border-gray-600">
    </div>
    <div>
      <router-link to="/dashboard" class="flex items-center">
        <img src="@/assets/img/bookshelf.png" alt="Home Icon" class="w-12 h-12" />
        <p class="hidden md:block text-4xl font-semibold">Library</p>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style>
  #search {
    font-family: FontAwesome, 'Montserrat';
  }
</style>