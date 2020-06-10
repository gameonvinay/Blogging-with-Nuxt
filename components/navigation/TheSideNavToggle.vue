<template>
  <div class="flex flex-col justify-around h-50vh w-8 cursor-pointer block md:hidden" role="button" @click="$emit('toggle')">
    <svg class="h-8 w-8 fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  </div>
</template>

<style scoped></style>
