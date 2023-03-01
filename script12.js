//Slice and Splice
function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
  }
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  console.log(frankenSplice([1, 2, 3], [4, 5], 1))
  console.log(frankenSplice([1, 2, 3, 4], [], 0))
  console.log(frankenSplice([1, 2], ["a", "b"], 1))