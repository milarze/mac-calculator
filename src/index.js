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
  let currentQuantity = 0.0;
  stockSeries.forEach((stockMovement) => {
    if (!isValidInput(stockMovement)) {
      throw new InputError('Invalid input object', stockMovement);
    }
    let quantity = parseFloat(stockMovement.quantity)
    let costPerItem = parseFloat(stockMovement.costPerItem)
    if (!currentAverage) {
      currentAverage = costPerItem
    } else if (currentQuantity <= 0 && quantity + currentQuantity > 0) {
      // Reset the MAC if the on hand quantity goes from below 0 to above
      currentAverage = calculateNewAverage(0, 0, quantity, costPerItem)
    } else if (quantity > 0) {
      currentAverage = calculateNewAverage(currentAverage, currentQuantity, quantity, costPerItem)
    }
    currentQuantity += quantity
  });
  return {
    mac: currentAverage,
    quantity: currentQuantity
  };
}
