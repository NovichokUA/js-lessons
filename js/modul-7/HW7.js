//DZ#2

let getUrl = [];
let getAlt = [];
images.forEach((img) => {
  getUrl.push(img.url);
  getAlt.push(img.alt);
});
const list = document.querySelector(".gallery");
const listItem1 = document.createElement("li");
const listItem2 = document.createElement("li");
const listItem3 = document.createElement("li");
const imgListItem1 = document.createElement("img");
imgListItem1.src = getUrl[0];
imgListItem1.alt = getAlt[0];
const imgListItem2 = document.createElement("img");
imgListItem2.src = getUrl[1];
imgListItem2.alt = getAlt[1];
const imgListItem3 = document.createElement("img");
imgListItem3.src = getUrl[2];
imgListItem3.alt = getAlt[2];
listItem1.append(imgListItem1);
listItem2.append(imgListItem2);
listItem3.append(imgListItem3);
list.append(listItem1, listItem2, listItem3);
