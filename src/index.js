import InputError from './errors/input-error.js'

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
  return stockMovement.quantity &&
    isNumeric(stockMovement.quantity) &&
    stockMovement.costPerItem &&
    isNumeric(stockMovement.costPerItem)
}

export default function macCalculator(stockSeries = []) {
  let currentAverage;
  let currentQuantity;
  stockSeries.forEach((stockMovement) => {
    if (!isValidInput(stockMovement)) {
      throw InputError('Invalid input object');
    }
    let quantity = parseFloat(stockMovement.quantity)
    let costPerItem = parseFloat(stockMovement.costPerItem)
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
  return {
    mac: currentAverage,
    quantity: currentQuantity
  };
}
