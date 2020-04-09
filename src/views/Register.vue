<template>
  <div class="h-screen w-screen flex">
    <AuthLeftFlex />
    <section class="lg:w-2/5 w-screen flex flex-col justify-between">
      <AuthHeader />
      <main class="self-center md:w-3/4">
        <AuthFormTitle :formTitle="formTitle" :formDesc="formDesc" />
        <section class="flex flex-col">
          <!-- <ValidationObserver> -->
          <form id="form" @submit.prevent="registerSubmit" class="shadow-2xl mb-5">
            <div class="flex flex-col border-gray-400 border-solid border rounded-sm p-2">
              <label for="username" class="text-gray-500">{{ usernameLabel }}</label>
              <!-- <ValidationProvider rules="required" v-slot="errors"> -->
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
                class="invalid-feedback"
              >Username is required</div>
              <!-- <span>{{ errors[0] }}</span>
              </ValidationProvider>-->
            </div>
            <div class="flex flex-col border-gray-400 border-solid border rounded-sm p-2">
              <label for="fullname" class="text-gray-500">{{ nameLabel }}</label>
              <!-- <ValidationProvider rules="required|alpha" v-slot="errors"> -->
              <input
                type="text"
                name="fullname"
                id="fullname"
                class="text-black"
                v-model="fullname"
                :class="{ 'is-invalid': submitted && $v.fullname.$error }"
              />
              <div
                v-if="submitted && !$v.fullname.required"
                class="invalid-feedback"
              >Fullname is required</div>
              <!-- <span>{{ errors[0] }}</span>
              </ValidationProvider>-->
            </div>
            <div class="flex flex-col border-gray-400 border-solid border rounded-sm p-2">
              <label for="email" class="text-gray-500">{{ emailLabel }}</label>
              <!-- <ValidationProvider rules="required|email" v-slot="errors" class="flex flex-col"> -->
              <input type="email" name="email" id="email" class="text-black" v-model="email" :class="{ 'is-invalid': submitted && $v.email.$error }" />
              <div v-if="submitted && $v.email.$error" class="invalid-feedback">
                  <span v-if="!$v.email.required">Email is required</span>
                  <span v-if="!$v.email.email">Email is invalid</span>
              </div>
              <!-- <span class="text-red">{{ errors[0] }}</span>
              </ValidationProvider>-->
            </div>
            <div class="flex flex-col border-gray-400 border-solid border rounded-sm p-2">
              <label for="password" class="text-gray-500">{{ passwordLabel }}</label>
              <!-- <ValidationProvider rules="required" v-slot="errors"> -->
              <input
                type="password"
                name="password"
                id="password"
                class="text-black"
                v-model="password"
                :class="{ 'is-invalid': submitted && $v.password.$error }"
              />
              <div v-if="submitted && $v.password.$error" class="invalid-feedback">
                  <span v-if="!$v.password.required">Password is required</span>
                  <span v-if="!$v.password.minLength">Password must be at least 6 characters</span>
              </div>
              <!-- <span class="text-red">{{ errors[0] }}</span>
              </ValidationProvider>-->
            </div>
          </form>
          <!-- </ValidationObserver> -->
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

// import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
// import { required, email, alpha } from 'vee-validate/dist/rules';

import AuthLeftFlex from "../components/modules/AuthLeftFlex";
import AuthHeader from "../components/modules/AuthHeader";
import AuthFormTitle from "../components/modules/AuthFormTitle";

// extend("required", required);
// extend("email", email);
// extend("alpha", alpha);

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
    // ValidationObserver,
    // ValidationProvider
  },
  methods: {
    registerSubmit() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
      axios
        .post("http://localhost:8000/user/register", {
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