import { sum } from './jestTest'

test('test', () => {
  expect(sum(1, 2)).toBe(3)
})
