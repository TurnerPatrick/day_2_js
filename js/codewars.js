// Code Wars JavaScript Solutions

// === Exercise # 1 === 
// Calculate String Rotation
const shiftedDiff = (first, second, count = 0) => {
    if (first === second) {
      return count;
    }
    if (count > first.length) {
      return -1;
    }
    
    return shiftedDiff(first[first.length - 1] + first.slice(0, first.length - 1), second, count + 1);
  };

  // === Exercise # 2 ===
  // Buying a Car
  function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    if (startPriceOld >= startPriceNew) {
      return [0, Math.floor(startPriceOld - startPriceNew)];
    }
    
    let months = 0;
    let totalSaving = 0;
    let depreciatedPriceNew = startPriceNew;
    let depreciatedPriceOld = startPriceOld;
    let lossPercentage = percentLossByMonth; 
    while ((totalSaving + depreciatedPriceOld) < depreciatedPriceNew) {
      months += 1;
      if (months % 2 === 0) {
        lossPercentage += 0.5; 
      }
      totalSaving += savingperMonth;
      depreciatedPriceOld -= depreciatedPriceOld * (lossPercentage / 100);
      depreciatedPriceNew -= depreciatedPriceNew * (lossPercentage / 100);
    }
    return [months, Math.round(totalSaving + depreciatedPriceOld - depreciatedPriceNew)];
  }

  // === Exercise # 3 ===
  // Basic Subclasses - Adam & Eve
  class God{
      static create(){
        return [new Man, new Woman];
      }
    }
    class Human{}
    class Man extends Human{}
    class Woman extends Human{}   
