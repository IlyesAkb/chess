<template>
  <div class="chess-container">
    <ChessContainer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChessContainer from '@components/containers/ChessContainer.vue'

export default defineComponent({
  name: 'chess-page',
  components: { ChessContainer },
})
</script>

<style lang="scss">
.chess-container {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
</style>
