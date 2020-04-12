<template>
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
            <label sfor="description">Description</label>
            <textarea name="description" id="description" rows="5" class="w-64 px-2 rounded-lg border border-black border-solid" v-model="input.description"></textarea>
          </div>
        </div>
        <div class="flex flex-row justify-end mt-5 w-3/4">
          <button form="update" @click="updateBook" class="rounded-lg px-10 py-2 text-white bg-yellow-500 text-2xl">Save</button>
        </div>
      </form>
    </div>
</template

<script>
export default {
  name: 'Modal',
}
</script>

<style></style>