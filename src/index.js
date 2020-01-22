import InputError from './errors/input-error'

function calculateNewAverage(
  currentAverage,
  currentQuantity,
  quantity,
  costPerItem
) {
  return ((currentAverage * currentQuantity) + (quantity * costPerItem)) / (currentQuantity + quantity)
}

function isNumeric(n) {
  return !Number.isNaN(n) && Number.isFinite(n);
}

function isValidInput(stockMovement) {
  stockMovement.quantity &&
    isNumeric(stockMovement.quantity) &&
    stockMovement.costPerItem &&
    isNumeric(stockMovement.costPerItem)

}

export default function macCalculator(stockSeries = []) {
  let currentAverage;
  let currentQuantity;
  stockSeries.forEach((stockMovemnt) => {
    if (!isValidInput(stockMovement)) {
      throw InputError('Invalid input object');
    }
    let quantity = parseFloat(stockMovemnt.quantity)
    let costPerItem = parseFloat(stockMovemnt.costPerItem)
    if (!currentAverage || !currentQuantity) {
      currentAverage = costPerItem
      currentQuantity = quantity
    } else {
      if (quantity > 0) {
        currentAverage = calculateNewAverage(currentAverage, currentQuantity, quantity, costPerItem)
      }
      currentQuantity += quantity
    }
  });
}
