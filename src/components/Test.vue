<template>
  <h1>{{ message }}</h1>
</template>

<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Test',
  props: {
    message: {type: String},
  },
})

</script>
