<template>
  <div class="chess-board">
    <div
        class="chess-board-row"
        v-for="row of board"
        :key="row.name"
    >
      <Cell
        v-for="cell of row.cells"
        :key="cell.cords"
        :cell="cell"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Row } from '@/interfaces/chess'
import Cell from '@components/ChessBoard/Cell.vue'

export default defineComponent({
  name: 'ChessBoard',
  components: {
    Cell,
  },
  props: {
    isBlack: Boolean,
    board: Array as () => Array<Row>,
  },
})

</script>

<style lang="scss">
.chess-board {
  border: 1px solid black;
}

.chess-board-row {
  display: flex;
}
</style>
