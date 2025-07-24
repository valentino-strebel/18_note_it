/**
 * Initializes the application by setting up variables,
 * rendering notes, focusing the category, and calculating layout height.
 */
function onInit() {
  setVariables();
  renderNotes();
  focusCategory();
  calculateHeight();
}

/**
 * Formats an ISO date string to DD.MM.YYYY format.
 * @param {string} isoString - The ISO date string to format.
 * @returns {string} The formatted date string.
 */
function formatDate(isoString) {
  let date = new Date(isoString);
  let day = String(date.getUTCDate()).padStart(2, "0");
  let month = String(date.getUTCMonth() + 1).padStart(2, "0");
  let year = date.getUTCFullYear();
  return `${day}.${month}.${year}`;
}

/**
 * Handles category change: focuses category and processes notes.
 * @param {string} category - The category ID to switch to.
 */
async function changeCategory(category) {
  focusCategory();
  toggleClass(overlay, "d_none");
  await notesProcess(category);
  toggleClass(overlay, "d_none");
  focusCategory();
}

/**
 * Sets the current category and displays the relevant notes.
 * @param {string} category - The selected category ID.
 */
async function notesProcess(category) {
  displayCategory = category;
  await showNotes();
}

/**
 * Focuses (highlights) the currently selected category button.
 */
function focusCategory() {
  let category = getDivId(displayCategory);
  toggleClass(category, "buttonFocus");
}

/**
 * Toggles a CSS class on a given DOM element.
 * @param {HTMLElement} element - The DOM element.
 * @param {string} className - The CSS class to toggle.
 */
function toggleClass(element, className) {
  element.classList.toggle(className);
}

/**
 * Adds a CSS class to a given DOM element.
 * @param {HTMLElement} element - The DOM element.
 * @param {string} className - The CSS class to add.
 */
function addClass(element, className) {
  element.classList.add(className);
}

/**
 * Removes a CSS class from a given DOM element.
 * @param {HTMLElement} element - The DOM element.
 * @param {string} className - The CSS class to remove.
 */
function removeClass(element, className) {
  element.classList.remove(className);
}

/**
 * Closes the overlay by clearing its content and hiding it.
 */
function closeOverlay() {
  cleanDiv(overlayContent);
  toggleClass(overlay, "d_none");
}

/**
 * Removes all inner HTML content from a DOM element.
 * @param {HTMLElement} element - The DOM element to clean.
 */
function cleanDiv(element) {
  element.innerHTML = "";
}

/**
 * Prevents an event from propagating (bubbling) up the DOM tree.
 * @param {Event} event - The DOM event.
 */
function noBubble(event) {
  event.stopPropagation();
}

/**
 * Calculates and sets the height of a container (`div`) based on its position from the top of the viewport.
 */
function calculateHeight() {
  const rect = div.getBoundingClientRect();
  const fromTop = rect.top + window.scrollY;
  div.style.height = `calc(100vh - ${fromTop}px)`;
}

/**
 * Gets a DOM element by ID.
 * @param {string} selectedId - The ID of the element.
 * @returns {HTMLElement} The matching DOM element.
 */
function getDivId(selectedId) {
  return document.getElementById(selectedId);
}

/**
 * Escapes special HTML characters in a string to prevent XSS or HTML injection.
 * @param {string} str - The raw string to escape.
 * @returns {string} The escaped string.
 */
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Recalculate layout height on window resize
window.addEventListener("resize", calculateHeight);
