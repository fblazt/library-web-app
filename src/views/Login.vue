<template>
  <div class="h-screen w-screen flex">
    <AuthLeftFlex/>
    <section class="lg:w-2/5 w-screen flex flex-col justify-between">
      <AuthHeader></AuthHeader>
      <main class="self-center md:w-3/4">
        <AuthFormTitle :formTitle="formTitle" :formDesc="formDesc"></AuthFormTitle>
        <section class="flex flex-col">
          <form id="form" class="shadow-2xl mb-5">
            <div class="flex flex-col border-gray-400 border-solid border rounded-sm p-2">
              <label for="email" class="text-gray-500">{{ emailLabel }}</label>
              <input type="text" name="email" class="text-black" v-model="email"/>
            </div>
            <div class="flex flex-col border-gray-400 border-solid border rounded-sm p-2">
              <label for="password" class="text-gray-500">{{ passwordLabel }}</label>
              <input type="password" class="text-black" name="password" v-model="password"/>
            </div>
            <div v-if="!login ? 'Data salah' : ''"></div>
          </form>
          <div class="flex justify-between mb-8">
            <label for="checkbox" class="text-gray-500">
              <input type="checkbox" name id />
              Remember Me
            </label>
            <a href>Forgot Password</a>
          </div>
          <div class="flex w-full justify-center text-center">
            <!-- <button @click="login" form="form" class="py-1 px-8 rounded bg-black text-white mr-1">Login</button>
            <router-link class="py-1 px-6 rounded bg-white text-gray-500 border border-solid border-gray-400 ml-1" to="/register">Sign Up</router-link> -->
            <button
              form="form"
              @click.once="login"
              class="h-12 w-1/2 py-1 px-8 rounded bg-black text-white mr-1 flex items-center justify-center"
            >Login</button>
            <router-link
              class="h-12 w-1/2 py-1 px-6 rounded bg-white text-gray-500 border border-solid border-gray-400 mr-1 flex items-center justify-center"
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
import axios from 'axios';

import AuthLeftFlex from "../components/modules/AuthLeftFlex";
import AuthHeader from "../components/modules/AuthHeader";
import AuthFormTitle from "../components/modules/AuthFormTitle";

export default {
  name: "Login",
  data: function() {
    return {
      formTitle: `Login`,
      formDesc: `Welcome Back, Please Login to your account`,
      emailLabel: `Email Address`,
      passwordLabel: `Password`,
      email: '',
      password: ''
    };
  },
  components: {
    AuthLeftFlex,
    AuthHeader,
    AuthFormTitle,
  },
  methods: {
    login(e) {
      e.preventDefault()
      axios
        .post("http://localhost:8000/api/v1/user/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          localStorage.token = res.data.result[0].token
          localStorage.userId = res.data.result[0].id_user
          this.$router.push('/dashboard')
          console.log(res)
        })
        .catch((err) => {

          console.log(err.res)
        })
    }
  }
};
</script>

<style scoped>
</style>