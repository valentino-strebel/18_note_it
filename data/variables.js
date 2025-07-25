/**
 * The base URL used for Firebase API calls to fetch and manage notes.
 * @type {string}
 */
let DATA_URL = "https://note-it-a3380-default-rtdb.europe-west1.firebasedatabase.app/notes";

/**
 * The base URL used for Raspberry API calls to fetch and manage notes.
 * @type {string}
 */
let DATA_URL_1 = "https://192.168.2.140:3000/api/notes";

/**
 * The current category being displayed (e.g., "active", "archive", "trash").
 * @type {string}
 */
let displayCategory = "active";

/**
 * DOM references used throughout the application.
 * These are initialized in the `setVariables` function.
 * @type {HTMLElement|null}
 */
let container = null;

let noteTitle = null;

let noteContent = null;

let createButton = null;

let errorTitle = null;

let errorNote = null;

let overlay = null;

let overlayContent = null;

let div = null;

let noteTitleMobile = null;

let noteContentMobile = null;

let errorTitleMobile = null;

let errorNoteMobile = null;

let createButtonMobile = null;

/**
 * Initializes global DOM element references by querying the document.
 * This must be called before using any of the global DOM-related variables.
 *
 * It populates:
 * - `div` with the category section container.
 * - `overlay` and `overlayContent` with modal-related elements.
 * - `container` with the main note display container.
 * - `noteTitle` and `noteContent` with form inputs for creating a note.
 * - `createButton` with the button that triggers note creation.
 * - `errorNote` and `errorTitle` with elements that display validation errors.
 */
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

/**
 * Initializes global DOM element references for the mobile note creation form.
 *
 * Sets the following variables (assumed to be defined in the global scope):
 * - `noteTitleMobile`: The input element for the note title.
 * - `noteContentMobile`: The textarea element for the note content.
 * - `errorNoteMobile`: The paragraph element for the note content error message.
 * - `errorTitleMobile`: The paragraph element for the title error message.
 * - `createButtonMobile`: The button element used to submit the note.
 *
 * Assumes that all elements exist in the DOM and are uniquely identified by their IDs.
 */
function setVariablesMobile() {
  noteTitleMobile = getDivId("titleMobile");
  noteContentMobile = getDivId("contentMobile");
  errorNoteMobile = getDivId("errorMessageNoteMobile");
  errorTitleMobile = getDivId("errorMessageTitleMobile");
  createButtonMobile = getDivId("createButtonMobile");
}
