//Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    if (num < 1) {
      return "";
    } else {
      return str + repeatStringNumTimes(str, num - 1);
    }
  }
  repeatStringNumTimes("abc", 3);
  console.log(repeatStringNumTimes("*", 3))
  console.log(repeatStringNumTimes("abc", 3))
  console.log(repeatStringNumTimes("*", 8))