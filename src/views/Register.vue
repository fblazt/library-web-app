<template>
  <div class="h-screen w-screen flex">
    <AuthLeftFlex></AuthLeftFlex>
    <section class="lg:w-2/5 w-screen flex flex-col justify-between">
      <AuthHeader></AuthHeader>
      <main class="self-center md:w-3/4">
        <AuthFormTitle :formTitle="formTitle" :formDesc="formDesc"></AuthFormTitle>
        <section class="flex flex-col">
          <form id="form" class="shadow-2xl mb-5">
            <div class="flex flex-col border-gray-400 border-solid border rounded-sm p-2">
              <label for="username" class="text-gray-500">{{ usernameLabel }}</label>
              <input type="text" placeholder class="text-black" v-model="username" />
            </div>
            <div class="flex flex-col border-gray-400 border-solid border rounded-sm p-2">
              <label for="fullname" class="text-gray-500">{{ nameLabel }}</label>
              <input type="text" placeholder class="text-black" v-model="fullname" />
            </div>
            <div class="flex flex-col border-gray-400 border-solid border rounded-sm p-2">
              <label for="email" class="text-gray-500">{{ emailLabel }}</label>
              <input type="text" placeholder class="text-black" v-model="email" />
            </div>
            <div class="flex flex-col border-gray-400 border-solid border rounded-sm p-2">
              <label for="password" class="text-gray-500">{{ passwordLabel }}</label>
              <input type="password" placeholder class="text-black" v-model="password" />
            </div>
          </form>
          <div>
            <input type="submit" value="Login" class="py-1 px-8 rounded bg-black text-white mr-1" />
            <router-link
              class="py-1 px-6 rounded bg-white text-gray-500 border border-solid border-gray-400 ml-1"
              to="/register"
            >Sign Up</router-link>
          </div>
        </section>
      </main>
      <footer class="self-center flex flex-col m-3">
        <span class="text-gray-500">By signing up, you agree to Book's</span>
        <span>
          <a href>Terms and Conditions</a>
          <span class="text-gray-500">&</span>
          <a href>Privacy Policy</a>
        </span>
      </footer>
    </section>
  </div>
</template>

<script>
// import axios from 'axios';

import AuthLeftFlex from "../components/modules/AuthLeftFlex";
import AuthHeader from "../components/modules/AuthHeader";
import AuthFormTitle from "../components/modules/AuthFormTitle";

export default {
  name: "Register",
  data: function() {
    return {
      formTitle: `Register`,
      formDesc: `Welcome Back, Please Register to create account`,
      usernameLabel: `Username`,
      nameLabel: `Name`,
      emailLabel: `Email Address`,
      passwordLabel: `Password`
    };
  },
  components: {
    AuthLeftFlex,
    AuthHeader,
    AuthFormTitle,
  },
  // mounted() {
  //   axios
  //     .post("")
  // }
};
</script>

<style scoped>
</style>