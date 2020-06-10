<template>
  <div>
    <label class="block"><slot /></label>
    <input
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="w-full my-2 rounded-md shadow-md bg-gray-100 focus:outline-none focus:shadow-outline py-2 px-2 input-boxes"
    />
    <textarea
      v-if="controlType === 'textarea'"
      rows="10"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="w-full my-2 rounded-md shadow-md bg-gray-100 focus:outline-none focus:shadow-outline py-2 resize-none px-2 input-boxes"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'AppInputControl',
  props: {
    controlType: {
      type: String,
      default: 'input',
    },
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.input-boxes:focus {
  background-color: #eeeeee;
}
</style>
