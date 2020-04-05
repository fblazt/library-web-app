<template>
  <div class="flex flex-col">
    <Navbar></Navbar>
    <main class="m-5 mt-20 flex flex-col">
      <h2 class="text-4xl font-semibold">All transactions</h2>
      <section class="flex lg:flex-row flex-wrap justify-evenly w-full">
        <!-- <div v-for="item in 4" :key="item.id" class="w-1/2 m-1">
          <div
            class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            :style="{ backgroundImage: 'url(' + require('@/assets/img/mollie-sivaram-_1gBVgy8gIU-unsplash.png') + ')' }"
            title="Woman holding a mug"
          ></div>
          <div
            class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
          >
            <div class="">
              <div
                class="text-gray-900 font-bold text-xl"
              >Can coffee make you a better developer?</div>
              <p
                class="text-gray-700 text-base"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
          </div>
        </div> -->
        <div 
        v-for="item in 20"
        :key="item.id"
        class="h-32 lg:h-42 w-full lg:w-1/3 flex justify-between my-2 lg:mx-2 lg:my-4 rounded-lg shadow-xl">
          <div 
          class="bg-cover w-1/4 overflow-hidden rounded-lg shadow-xl"
          :style="{ backgroundImage: 'url(' + require('@/assets/img/mollie-sivaram-_1gBVgy8gIU-unsplash.png') + ')' }"></div>
          <div class="w-2/3 flex flex-col justify-around mb-1">
            <h4 class="text-2xl font-semibold">Book Title</h4>
            <span>Borrowed | Returned | Charged: 5000</span>
            <span>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-lg mr-1">Return</button>
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-lg">Pay Fine</button>
            </span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Navbar from "../components/modules/Navbar";

export default {
  name: "BorrowBooks",
  components: {
    Navbar
  }
};
</script>

<style>
</style>