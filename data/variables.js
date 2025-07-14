const DATA_URL = "http://192.168.2.140:3000/api/notes";

let displayCategory = "active";

let container = null;

let noteTitle = null;

let noteContent = null;

let createButton = null;

function setVariables() {
  container = document.getElementById("notesDisplay");
  noteTitle = document.getElementById("title");
  noteContent = document.getElementById("content");
  createButton = document.getElementById("createButton");
}
