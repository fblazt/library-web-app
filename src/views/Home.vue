<template>
  <div class="w-full container mx-auto p-6">
    <nav class="mx-5">
      <div class="flex items-center justify-center md:justify-between">
        <div>
          <img src="@/assets/img/bookshelf.png" alt class="w-16 h-16 sm:self-center" />
        </div>
        <div>
          <router-link
            to="/login"
            class="hidden md:inline x-2 text-2xl border border-solid border-2 border-black bg-black text-white p-2 hover:bg-white hover:text-black hover:border-0"
          >Login</router-link>
          <router-link
            to="/register"
            class="hidden md:inline mx-2 text-2xl border border-solid border-2 border-black bg-black text-white p-2 hover:bg-white hover:text-black hover:border-0"
          >Register</router-link>
        </div>
      </div>
    </nav>
    <main class="pt-10 px-6 mx-auto flex flex-col md:flex-row justify-between">
      <section
        class="flex flex-col w-full xl:w-1/2 justify-center lg:items-start overflow-y-hidden"
      >
        <h1 class="text-6xl font-bold">Library</h1>
        <img src="@/assets/img/18330.jpg" alt class="md:hidden w-64 h-64 mx-auto" />
        <p class="text-l font-medium">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam error alias harum veritatis, enim, eaque
          laboriosam nam quis ducimus velit et ex expedita? Ea accusantium deserunt dolore tenetur quos molestiae.
        </p>
        <div class="mt-10 mx-auto">
          <router-link
            to="/login"
            class="md:hidden mx-2 text-xl border border-solid border-2 border-black bg-black text-white p-2"
          >Login</router-link>
          <router-link
            to="/register"
            class="md:hidden mx-2 text-xl border border-solid border-2 border-black bg-black text-white p-2"
          >Register</router-link>
        </div>
      </section>
      <section class="hidden lg:flex items-center justify-end xl:w-1/2">
        <img src="@/assets/img/18330.jpg" alt="Book collection" class="" />
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
</style>