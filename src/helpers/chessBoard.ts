import { ICell, Row } from '@/interfaces/chess'
import { RowName, Column } from '@/types/chess'

export function getBoard(isBlack: boolean): Array<Row> {
  const rows: Array<RowName> = [1, 2, 3, 4, 5, 6, 7, 8]
  const cols: Array<Column> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

  const board: Array<Row> = rows.map((rowNumber) => (
    getRow(rowNumber, cols, isBlack)
  ))

  return isBlack ? board : board.reverse()
}

function getRow(
  rowNumber: RowName,
  cols: Array<Column>,
  isBlack: boolean,
): Row {
  const cells: Array<ICell> = cols.map((col, index) => {
    let isBlackCell: boolean = false

    if (rowNumber % 2 === 0 && (index + 1) % 2 === 0) isBlackCell = true
    if (rowNumber % 2 !== 0 && (index + 1) % 2 !== 0) isBlackCell = true

    return {
      isBlack: isBlackCell,
      name: `${col}${rowNumber}`,
      cords: `${rowNumber}:${index + 1}`,
    }
  })

  return {
    name: rowNumber,
    cells: isBlack ? cells.reverse() : cells,
  }
}
