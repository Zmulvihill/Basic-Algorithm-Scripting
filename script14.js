//Where do I Belong
function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
  }
  getIndexToIns([40, 60], 50);
  console.log(getIndexToIns([10, 20, 30, 40, 50], 35))
  console.log(getIndexToIns([10, 20, 30, 40, 50], 30))
  console.log(getIndexToIns([5, 3, 20, 3], 5))