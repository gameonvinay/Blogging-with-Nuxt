<template>
  <button class="button" :class="btnStyle" v-bind="$attrs" v-on="$listeners"><slot /></button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnStyle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.save {
  border: 2px solid #0198fa;
  border-radius: 0.5rem;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  padding: 4px 24px;
  background-color: #0198fa;
  color: #f7f7f7;
}

.save:hover {
  background-color: #0177c5;
  color: white;
  border: 2px solid #0198fa;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.save:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 152, 250, 0.5);
}

.save:active {
  outline: none;
  box-shadow: none;
}

.cancel {
  background-color: white;
  color: #0198fa;
  border: 2px solid #0198fa;
  border-radius: 0.5rem;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  padding: 4px 24px;
  margin: 0.5rem 0;
}

.cancel:hover {
  background-color: white;
  color: #0198fa;
  box-shadow: 0 0 3px #0198fa;
  border: 2px solid #0198fa;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.cancel:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 152, 250, 0.5);
}

.cancel:active {
  outline: none;
  box-shadow: none;
  background-color: #0198fa;
  color: white;
}
</style>
