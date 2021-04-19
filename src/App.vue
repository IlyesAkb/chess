<template>
  <Test :message="message"/>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-view />
</template>

<script lang="tsx">
import { defineComponent } from 'vue'
import Test from '@components/Test.vue'
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'App',
  components: {
    Test,
  },
  computed: { ...mapGetters(['message']) },
})
</script>

<style scoped lang="scss">
.title {
  text-align: center;
  color: red;
}
</style>
