const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("_________________"); // you need to fill in the blank to refernce the html that ia an unordered list element.
const li = document.createElement("li");
const deleteButton = document.createElement("button");
li.textContent = input.value;
deleteButton.textContent = "❌";
li.append("deleteButton");
list.append(li);

let el = document.getElementById("close-button");
console.log(el.ariaLabel); // "Close"
el.ariaLabel = "Close dialog";
console.log(el.ariaLabel); // "Close dialog"