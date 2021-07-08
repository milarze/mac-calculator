import InputError from './errors/input-error.js'

function calculateNewAverage(
  currentAverage,
  currentQuantity,
  quantity,
  costPerItem
) {
  return roundToTwo(((currentAverage * currentQuantity) + (quantity * costPerItem)) / (currentQuantity + quantity));
}

function isNumeric(n) {
  return !Number.isNaN(n) && Number.isFinite(n);
}

function isValidInput(stockMovement) {
  return isNumeric(stockMovement.quantity) &&
    isNumeric(stockMovement.costPerItem)
}

function deepCopy(object) {
  return JSON.parse(JSON.stringify(object));
}

function roundToTwo(num) {
  return +(Math.round(num + "e+2")  + "e-2");
}

export default function macCalculator(stockSeries = []) {
  stockSeries = deepCopy(stockSeries);
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
    } else if (quantity < 0) {
      delete stockMovement.costPerItem;
      stockMovement.costs = [{
        "cost": currentAverage,
        "quantity": Math.abs(quantity),
      }];
    }
    currentQuantity += quantity
    stockMovement.quantityOnHand = currentQuantity;
    stockMovement.valueOnHand = currentQuantity * currentAverage;
    stockMovement.mac = currentAverage;
  });
  return stockSeries;
}
