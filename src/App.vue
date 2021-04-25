<template>
  <div>
    <router-link
        class="link"
        v-for="route of routes"
        :key="route.name"
        :to="route.path"
    >
      {{ route.name }}
    </router-link>
    <router-view/>
  </div>
</template>

<script lang="tsx">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import { routes } from '@/router'
import { RouteRecordRaw } from 'vue-router'

export default defineComponent({
  name: 'App',
  data() {
    return {
      isBlack: false as boolean,
    }
  },
  computed: {
    ...mapGetters(['message']),
    routes(): Array<RouteRecordRaw> {
      return routes
    },
  },
})

</script>

<style scoped lang="scss">
.title {
  text-align: center;
  color: red;
}

.link {
  margin: 0 10px;
}
</style>
