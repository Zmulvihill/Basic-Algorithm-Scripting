//Boo who
function booWho(bool) {
    return typeof bool === "boolean";
  }
  
  // test here
  booWho(null);
  console.log(booWho(true))
  console.log(booWho([1, 2, 3]))
  console.log(booWho("true"))