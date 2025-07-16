function onInit() {
  setVariables();
  renderNotes();
  focusCategory();
}

function formatDate(isoString) {
  let date = new Date(isoString);
  let day = String(date.getUTCDate()).padStart(2, "0");
  let month = String(date.getUTCMonth() + 1).padStart(2, "0");
  let year = date.getUTCFullYear();
  return `${day}.${month}.${year}`;
}

async function changeCategory(category) {
  focusCategory();
  toggleOverlay();
  await notesProcess(category);
  toggleOverlay();
  focusCategory();
}

async function notesProcess(category) {
  displayCategory = category;
  await showNotes();
}

function focusCategory() {
  document.getElementById(displayCategory).classList.toggle("buttonFocus");
}

function toggleOverlay() {
  document.getElementById("overlay").classList.toggle("d_none");
}

function closeOverlay() {
  cleanOverlay();
  toggleOverlay();
}

function cleanOverlay() {
  document.getElementById("overlayContent").innerHTML = "";
}

function noBubble(event) {
  event.stopPropagation();
}
