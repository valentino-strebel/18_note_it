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
  let category = document.getElementById(displayCategory);
  toggleClass(category, "buttonFocus");
}

function toggleClass(selectedId, selectedClass) {
  selectedId.classList.toggle(selectedClass);
}

function addClass(selectedId, selectedClass) {
  selectedId.classList.add(selectedClass);
}

function removeClass(selectedId, selectedClass) {
  selectedId.classList.remove(selectedClass);
}

function closeOverlay() {
  cleanOverlay();
  toggleClass(overlay, "d_none");
}

function cleanOverlay() {
  overlayContent.innerHTML = "";
}

function noBubble(event) {
  event.stopPropagation();
}

function calculateHeight() {
  const rect = div.getBoundingClientRect();
  const fromTop = rect.top + window.scrollY;
  div.style.height = `calc(100vh - ${fromTop}px)`;
}

window.addEventListener("resize", calculateHeight);
