# mac-calculator
### How To Use
This library exports a single function that expects an ordered series of `quantity` and `costPerItem` and returns the quantity on hand at the end of the series (`quantity`) and the MAC at the end of the series (`mac`).
#### Expected Input
```json
[
  {
    "quantity": 1.0,
    "costPerItem": 10.0
  }
]
```

#### Output
```javascript
{
  quantity: 1.0,
  mac: 10.0
}
```

#### Test
Runs tests using Jest
```
yarn test
```