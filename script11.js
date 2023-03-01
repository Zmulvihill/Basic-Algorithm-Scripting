//Title Case a Sentence
function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
  }
  console.log(titleCase("I'm a little tea pot"))
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))
  console.log(titleCase("sHoRt AnD sToUt"))