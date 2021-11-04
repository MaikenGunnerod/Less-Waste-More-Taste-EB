/* function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  const inputDisplay = input.value.length > 1 ? "block" : "none";
  ul.style.display = inputDisplay;

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
} */

/*
var lists = document.getElementsByClassName("list-items");
for (var i = 0; i < lists.length; i++) {
  var text = lists[i].textContent;
  lists[i].textContent = "";
  var a = document.createElement("a");
  a.href = "#" + text;
  a.textContent = text;
  lists[i].appendChild(a);
}

const people = [
  { name: "mat 1" },
  { name: "mat 2" },
  { name: "mat 3" },
  { name: "mat 4" },
  { name: "mat 5" },
  { name: "mat 6" },
  { name: "mat 7" },
  { name: "mat 8" },
];
const list = document.getElementById("myUL");

function setList(group) {
  clearList();
  for (const person of group) {
    const item = document.createElement("li");
    item.classList.add("list-group-item");
    const text = document.createTextNode(person.name);
    item.appendChild(text);
    list.appendChild(item);
  }

  if (group.length === 0) {
    setNoResults();
  }
}

function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function setNoResults() {
  const item = document.createElement("li");
  item.classList.add("list-group-item");
  const text = document.createTextNode("No results found");
  item.appendChild(text);
  list.appendChild(item);
}

function getRelevancy(value, searchTerm) {
  if (value === searchTerm) {
    return 2;
  } else if (value.startsWith(searchTerm)) {
    return 1;
  } else if (value.includes(searchTerm)) {
    return 0;
  } else {
    return -1;
  }
}

const searchInput = document.getElementById("myInput");

searchInput.addEventListener("input", (event) => {
  let value = event.target.value;
  if (value && value.trim().length > 0) {
    value = value.trim().toLowerCase();
    setList(
      people
        .filter((person) => {
          return person.name.includes(value);
        })
        .sort((personA, personB) => {
          return (
            getRelevancy(personB.name, value) -
            getRelevancy(personA.name, value)
          );
        })
    );
  } else {
    clearList();
  }
});
*/
/*
const people = [
  { name: "mat 1" },
  { name: "mat 2" },
  { name: "mat 3" },
  { name: "mat 4" },
  { name: "mat 5" },
  { name: "mat 6" },
  { name: "mat 7" },
  { name: "mat 8" },
];
*/

/*
var el = document.querySelector(".country-IN");
el.innerHTML = el.innerHTML.replace(/&nbsp;/g, "");
*/

/*
const list = document.getElementById("myUL");
function setList(group) {
  clearList();
  for (const person of group) {
    const item = document.createElement("li");
    item.classList.add("list-group-item");
    const text = document.createTextNode(person.name);
    item.appendChild(text);
    list.appendChild(item);
  }
  if (group.length === 0) {
    setNoResults();
  }
}
function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}
function setNoResults() {
  const item = document.createElement("li");
  item.classList.add("list-group-item");
  const text = document.createTextNode("No results found");
  item.appendChild(text);
  list.appendChild(item);
}
function getRelevancy(value, searchTerm) {
  if (value === searchTerm) {
    return 2;
  } else if (value.startsWith(searchTerm)) {
    return 1;
  } else if (value.includes(searchTerm)) {
    return 0;
  } else {
    return -1;
  }
}
const searchInput = document.getElementById("myInput");
searchInput.addEventListener("input", (event) => {
  let value = event.target.value;
  if (value && value.trim().length > 0) {
    value = value.trim().toLowerCase();
    setList(
      people
        .filter((person) => {
          return person.name.includes(value);
        })
        .sort((personA, personB) => {
          return (
            getRelevancy(personB.name, value) -
            getRelevancy(personA.name, value)
          );
        })
    );
  } else {
    clearList();
  }
});
*/
