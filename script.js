function onInit() {
  setVariables();
  renderNotes();
  focusCategory();
  calculateHeight();
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
  toggleClass(overlay, "d_none");
  await notesProcess(category);
  toggleClass(overlay, "d_none");
  focusCategory();
}

async function notesProcess(category) {
  displayCategory = category;
  await showNotes();
}

function focusCategory() {
  let category = getDivId(displayCategory);
  toggleClass(category, "buttonFocus");
}

function toggleClass(element, className) {
  element.classList.toggle(className);
}

function addClass(element, className) {
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

function closeOverlay() {
  cleanDiv(overlayContent);
  toggleClass(overlay, "d_none");
}

function cleanDiv(element) {
  element.innerHTML = "";
}

function noBubble(event) {
  event.stopPropagation();
}

function calculateHeight() {
  const rect = div.getBoundingClientRect();
  const fromTop = rect.top + window.scrollY;
  div.style.height = `calc(100vh - ${fromTop}px)`;
}

function getDivId(selectedId) {
  return document.getElementById(selectedId);
}

window.addEventListener("resize", calculateHeight);
