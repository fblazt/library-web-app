<template>
  <div class="h-screen w-screen flex">
    <AuthLeftFlex />
    <section class="lg:w-2/5 w-screen flex flex-col justify-between">
      <AuthHeader />
      <main class="self-center md:w-3/4">
        <AuthFormTitle :formTitle="formTitle" :formDesc="formDesc" />
        <section class="flex flex-col">
          <form id="form" @submit.prevent="registerSubmit" class="shadow-2xl mb-5">
            <div :class="$v.username.$error ? 'flex flex-col border-gray-400 border-solid border rounded-sm p-2 border-red-500' : 'flex flex-col border-gray-400 border-solid border rounded-sm p-2 border-black-500'">
              <label for="username" class="text-gray-500">{{ usernameLabel }}</label>
              <input
                type="text"
                name="username"
                id="username"
                class="text-black"
                v-model="username"
                :class="{ 'is-invalid': submitted && $v.username.$error }"
              />
              <div
                v-if="submitted && !$v.username.required"
                class="invalid-feedback text-red-500"
              >Username is required</div>
            </div>
            <div :class="$v.fullname.$error ? 'flex flex-col border-gray-400 border-solid border rounded-sm p-2 border-red-500' : 'flex flex-col border-gray-400 border-solid border rounded-sm p-2 border-black-500'">
              <label for="fullname" class="text-gray-500">{{ nameLabel }}</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                class="text-black"
                v-model="fullname"
                :class="{ 'is-invalid' : submitted && $v.fullname.$error }"
              />
              <div
                v-if="submitted && !$v.fullname.required"
                class="invalid-feedback text-red-500"
              >Fullname is required</div>
            </div>
            <div :class="$v.email.$error ? 'flex flex-col border-gray-400 border-solid border rounded-sm p-2 border-red-500' : 'flex flex-col border-gray-400 border-solid border rounded-sm p-2 border-black-500'">
              <label for="email" class="text-gray-500">{{ emailLabel }}</label>
              <input type="email" name="email" id="email" class="text-black" v-model="email" :class="{ 'is-invalid': submitted && $v.email.$error }" />
              <div v-if="submitted && $v.email.$error" class="invalid-feedback">
                  <span v-if="!$v.email.required" class="text-red-500">Email is required</span>
                  <span v-if="!$v.email.email" class="text-orange-500">Email is invalid</span>
              </div>
            </div>
            <div :class="$v.password.$error ? 'flex flex-col border-gray-400 border-solid border rounded-sm p-2 border-red-500' : 'flex flex-col border-gray-400 border-solid border rounded-sm p-2 border-black-500'">
              <label for="password" class="text-gray-500">{{ passwordLabel }}</label>
              <input
                type="password"
                name="password"
                id="password"
                class="text-black"
                v-model="password"
                :class="{ 'is-invalid': submitted && $v.password.$error }"
              />
              <div v-if="submitted && $v.password.$error" class="invalid-feedback">
                  <span v-if="!$v.password.required" class="text-red-500">Password is required</span>
                  <span v-if="!$v.password.minLength"  class="text-red-500">Password must be at least 6 characters</span>
              </div>
            </div>
          </form>
          <div class="flex w-full justify-center text-center">
            <button
              form="form"
              @click.once="registerSubmit"
              class="h-12 w-1/2 py-1 px-6 rounded bg-white text-gray-500 border border-solid border-gray-400 mr-1"
            >Sign Up</button>
            <router-link
              class="h-12 w-1/2 py-1 px-8 rounded bg-black text-white mr-1 flex items-center justify-center"
              to="/login"
            >Login</router-link>
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
import axios from "axios";

import { required, email, minLength } from "vuelidate/lib/validators";

import AuthLeftFlex from "../components/modules/AuthLeftFlex";
import AuthHeader from "../components/modules/AuthHeader";
import AuthFormTitle from "../components/modules/AuthFormTitle";

export default {
  name: "Register",
  data() {
    return {
      formTitle: `Register`,
      formDesc: `Welcome Back, Please Register to create account`,
      usernameLabel: `Username`,
      nameLabel: `Name`,
      emailLabel: `Email Address`,
      passwordLabel: `Password`,
      username: "",
      email: "",
      fullname: "",
      password: "",
      submitted: false,
    };
  },
  validations: {
    username: { required },
    email: { required, email },
    fullname: { required },
    password: { required, minLength: minLength(6) }
  },
  components: {
    AuthLeftFlex,
    AuthHeader,
    AuthFormTitle
  },
  methods: {
    registerSubmit(e) {
      e.preventDefault()
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
      axios
        .post(`${process.env.VUE_APP_API_URL}user/register`, {
          email: this.email,
          fullname: this.fullname,
          password: this.password
        })
        .then(res => {
          this.$router.push("/login");
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      }
    }
  }
};
</script>

<style scoped>
</style>