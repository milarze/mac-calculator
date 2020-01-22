function calculateNewAverage(
  currentAverage,
  currentQuantity,
  quantity,
  costPerItem
) {
  return ((currentAverage * currentQuantity) + (quantity * costPerItem)) / (currentQuantity + quantity)
}

export default function macCalculator(stockSeries = []) {
  let currentAverage;
  let currentQuantity;
  stockSeries.forEach((stockMovemnt) => {
    let quantity = stockMovemnt.quantity
    let costPerItem = stockMovemnt.costPerItem
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
