//Mutations
function mutation(arr) {
    const test = arr[1].toLowerCase();
    const target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }
  mutation(["hello", "hey"]);
  console.log(mutation(["hello", "Hello"]))
  console.log(mutation(["Mary", "Army"]))
  console.log(mutation(["hello", "neo"]))