<template>
  <div :class="{'chess-board-cell': true, 'black': cell.isBlack }">
    {{ cell.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ICell } from '@/interfaces/chess'

export default defineComponent({
  name: 'Cell',
  props: {
    cell: Object as () => ICell,
  },
})

</script>

<style lang="scss">
.chess-board-cell {
  height: 75px;
  width: 75px;
  background-color: #fff;

  &.black {
    background-color: #000;
    color: #ffffff;
  }
}
</style>
