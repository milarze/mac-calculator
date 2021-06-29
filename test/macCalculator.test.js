import macCalculator from '../src/index.js'

const inputArray = [
  {
    "quantity": 1.0,
    "costPerItem": 10.0
  }
]

test('macCalculator.mac returns a the current MAC', () => {
  let result = macCalculator(inputArray)
  expect(result.mac).toBe(10.0)
})

test('macCalculator.quantity returns a the current quantity', () => {
  let result = macCalculator(inputArray)
  expect(result.quantity).toBe(1.0)
})