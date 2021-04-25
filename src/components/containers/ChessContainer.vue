<template>
  <ChessBoard is-black="is-black" :board="board"/>
</template>

<script lang="tsx">
import { defineComponent } from 'vue'
import { Row } from '@/interfaces/chess'
import { getBoard } from '@/helpers/chessBoard'

import ChessBoard from '@components/ChessBoard/ChessBoard.vue'

export default defineComponent({
  name: 'chess-container',
  components: { ChessBoard },
  data() {
    return {
      board: [] as Array<Row>,
      isBlack: false as Boolean,
    }
  },
  created() {
    this.board = getBoard(false)
  },
})

</script>
