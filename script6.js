//Confirm the Ending
function confirmEnding(str, target) {
    return str.slice(-target.length) === target
  }
  
  confirmEnding("Bastian", "n");
  console.log(confirmEnding("Bastian", "n"))
  console.log(confirmEnding("Open sesame", "sage"))
  console.log(confirmEnding("Open sesame", "same"))