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
  div = getDivId("categorySections");
  overlay = getDivId("overlay");
  overlayContent = getDivId("overlayContent");
  container = getDivId("notesDisplay");
  noteTitle = getDivId("title");
  noteContent = getDivId("content");
  createButton = getDivId("createButton");
  errorNote = getDivId("errorMessageNote");
  errorTitle = getDivId("errorMessageTitle");
}
