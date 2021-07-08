import macCalculator from '../src/index.js';
import InputError from '../src/errors/input-error.js';

const inputArray = [
  {
    "quantity": 1.0,
    "costPerItem": 10.0,
  },
  {
    "quantity": -1.0,
    "costPerItem": 0.0,
  },
  {
    "quantity": 10.0,
    "costPerItem": 5.0,
  },
  {
    "quantity": 10.0,
    "costPerItem": 6.0,
  },
  {
    "quantity": 5.0,
    "costPerItem": 7.0,
  },
  {
    "quantity": -23.0,
    "costPerItem": 0.0,
  },
  {
    "quantity": 100.0,
    "costPerItem": 8.0,
  },
  {
    "quantity": -10.0,
    "costPerItem": 0.0,
  },
  {
    "quantity": -20.0,
    "costPerItem": 0.0,
  },
  {
    "quantity": -10.0,
    "costPerItem": 0.0,
  },
];

const invalidInput = [
  {
    test: -1
  },
];

test('macCalculator returns the movements hydrated with sell costs', () => {
  expect(macCalculator(inputArray)).toStrictEqual([
    {
      "quantity": 1.0,
      "costPerItem": 10.0,
      "quantityOnHand": 1.0,
      "valueOnHand": 10.0,
      "mac": 10.0,
    },
    {
      "quantity": -1.0,
      "quantityOnHand": 0.0,
      "valueOnHand": 0.0,
      "mac": 10.0,
      "costs": [
        {
          "cost": 10.0,
          "quantity": 1.0,
        },
      ],
    },
    {
      "quantity": 10.0,
      "costPerItem": 5.0,
      "quantityOnHand": 10.0,
      "valueOnHand": 50.0,
      "mac": 5.0,
    },
    {
      "quantity": 10.0,
      "costPerItem": 6.0,
      "quantityOnHand": 20.0,
      "valueOnHand": 110.0,
      "mac": 5.5,
    },
    {
      "quantity": 5.0,
      "costPerItem": 7.0,
      "quantityOnHand": 25.0,
      "valueOnHand": 145.0,
      "mac": 5.8,
    },
    {
      "quantity": -23.0,
      "quantityOnHand": 2.0,
      "valueOnHand": 11.6,
      "mac": 5.8,
      "costs": [
        {
          "cost": 5.8,
          "quantity": 23.0
        },
      ]
    },
    {
      "quantity": 100.0,
      "costPerItem": 8.0,
      "quantityOnHand": 102.0,
      "valueOnHand": 811.92,
      "mac": 7.96,
    },
    {
      "quantity": -10.0,
      "quantityOnHand": 92.0,
      "valueOnHand": 732.32,
      "mac": 7.96,
      "costs": [
        {
          "cost": 7.96,
          "quantity": 10.0,
        },
      ],
    },
    {
      "quantity": -20.0,
      "quantityOnHand": 72.0,
      "valueOnHand": 573.12,
      "mac": 7.96,
      "costs": [
        {
          "cost": 7.96,
          "quantity": 20.0,
        },
      ],
    },
    {
      "quantity": -10.0,
      "quantityOnHand": 62.0,
      "valueOnHand": 493.52,
      "mac": 7.96,
      "costs": [
        {
          "cost": 7.96,
          "quantity": 10.0,
        },
      ],
    },
  ]);
});

test('throws InputError with invalid input', () => {
  expect(() => macCalculator(invalidInput)).toThrowError(new InputError('Invalid input object', {
    test: -1
  }));
});