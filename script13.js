//Falsy Bouncer
function bouncer(arr) {
    return arr.filter(Boolean);
  }
  bouncer([7, "ate", "", false, 9]);
  console.log(bouncer([7, "ate", "", false, 9]))
  console.log(bouncer(["a", "b", "c"]))
  console.log(bouncer([false, null, 0, NaN, undefined, ""]))