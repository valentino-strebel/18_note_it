let DATA_URL = "https://192.168.2.140:3000/api/notes";

let displayCategory = "active";

let container = null;

let noteTitle = null;

let noteContent = null;

let createButton = null;

let errorTitle = null;

let errorNote = null;

let overlay = null;

let overlayContent = null;

let div = null;

function setVariables() {
  div = document.getElementById("categorySections");
  overlay = document.getElementById("overlay");
  overlayContent = document.getElementById("overlayContent");
  container = document.getElementById("notesDisplay");
  noteTitle = document.getElementById("title");
  noteContent = document.getElementById("content");
  createButton = document.getElementById("createButton");
  errorNote = document.getElementById("errorMessageNote");
  errorTitle = document.getElementById("errorMessageTitle");
}
