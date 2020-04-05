<template>
  <section class="mb-20">
    <h2 class="text-6xl font-semibold">{{ formTitle }}</h2>
    <p class="text-l font-medium">{{ formDesc }}</p>
  </section>
</template>

<script>
export default {
  name: 'AuthFormTitle',
  props: ['formTitle', 'formDesc'],
};
</script>

<style>
</style>