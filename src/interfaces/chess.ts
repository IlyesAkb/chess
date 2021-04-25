import { RowName } from '@/types/chess'

export interface ICell {
  isBlack: boolean
  cords: string
  name: string
}

export interface Row {
  name: RowName
  cells: Array<ICell>
}
