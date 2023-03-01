//Chunky Monkey
function chunkArrayInGroups(arr, size) {
    // Break it up.
    const newArr = [];
    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  }
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3))
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2))