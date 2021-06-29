import macCalculator from '../src/index.js'

const inputArray = [
  {
    "quantity": 1.0,
    "costPerItem": 10.0
  }
]

const negativeInputArray = [
  {
    quantity: -10.0,
    costPerItem: 10.0
  },
  {
    quantity: 20.0,
    costPerItem: 50.0
  }
]

const resetInputArray = [
  {
    quantity: 10.0,
    costPerItem: 20.0
  },
  {
    quantity: -20.0,
    costPerItem: 20.0
  },
  {
    quantity: 30.0,
    costPerItem: 30.0
  }
]

const belowZeroQuantityInputArray = [
  {
    quantity: 10.0,
    costPerItem: 20.0
  },
  {
    quantity: -20.0,
    costPerItem: 20.0
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

test('macCalculator.mac handles negative quantities', () => {
  let result = macCalculator(negativeInputArray)
  expect(result.mac).toBe(50.0)
})

test('macCalculator.quantity handles negative quantities', () => {
  let result = macCalculator(negativeInputArray)
  expect(result.quantity).toBe(10.0)
})

test('macCalculator.mac handles going to negative and coming back up', () => {
  let result = macCalculator(resetInputArray)
  expect(result.mac).toBe(30.0)
})

test('macCalculator.quantity handles going negative and coming back', () => {
  let result = macCalculator(resetInputArray)
  expect(result.quantity).toBe(20.0)
})

test('macCalculator.mac handles going to negative', () => {
  let result = macCalculator(belowZeroQuantityInputArray)
  expect(result.mac).toBe(20.0)
})

test('macCalculator.quantity handles going negative', () => {
  let result = macCalculator(belowZeroQuantityInputArray)
  expect(result.quantity).toBe(-10.0)
})

