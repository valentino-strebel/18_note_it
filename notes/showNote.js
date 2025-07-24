/**
 * Renders notes by toggling a loading overlay, fetching notes,
 * and handling both success and error cases.
 *
 * @async
 * @returns {Promise<void>}
 */
async function renderNotes() {
  toggleClass(overlay, "d_none");
  try {
    await showNotes(displayCategory);
  } catch (error) {
    catchFetchingNotesError(error);
  } finally {
    toggleClass(overlay, "d_none");
  }
}

/**
 * Fetches all notes and renders them based on the current display category.
 *
 * @async
 * @function showNotes
 * @returns {Promise<void>} Resolves when notes are rendered
 */
async function showNotes() {
  let myNotes = await getNotesCall();
  myNotes = checkDataType(myNotes);
  renderNotesToCategory(myNotes);
}

/**
 * Normalizes incoming notes data to ensure it's in array form.
 * If the data is in Firebase object format, it converts it to an array
 * with the IDs included in each note object.
 *
 * @function checkDataType
 * @param {Object|Array} myNotes - The raw notes data, either from Firebase or another DB.
 * @returns {Array<Object>} An array of note objects, each optionally including an `id` field.
 */
function checkDataType(myNotes) {
  if (!Array.isArray(myNotes) && myNotes !== null && typeof myNotes === "object") {
    const transformed = Object.entries(myNotes).map(([id, note]) => ({
      id,
      ...note,
    }));
    console.log("Transformed Firebase notes:", transformed);
    return transformed;
  }
  return myNotes;
}

/**
 * Filters and renders notes according to the current display category.
 * Displays a message if there are no notes to show.
 *
 * @param {Array<Object>} myNotes - Array of note objects to be filtered and rendered.
 */
function renderNotesToCategory(myNotes) {
  cleanDiv(container);
  let filteredNotes = myNotes.filter((note) => note.category === displayCategory);
  if (!filteredNotes.length) {
    noNotesNotification();
  }
  prepareNotesForDisplay(filteredNotes);
}

/**
 * Prepares each note for display by selecting the appropriate
 * button group based on its category.
 *
 * @param {Array<Object>} filteredNotes - Notes already filtered by category.
 */
function prepareNotesForDisplay(filteredNotes) {
  filteredNotes.forEach((note) => {
    switch (displayCategory) {
      case "active":
        createNoteBasic(note, notesActive);
        break;
      case "trash":
        createNoteBasic(note, notesTrash);
        break;
      case "archive":
        createNoteBasic(note, notesArchive);
        break;
    }
  });
}

/**
 * Appends the note HTML and its corresponding action buttons to the container.
 *
 * @param {Object} note - The note object to render.
 * @param {Function} buttonCategory - Function to generate action buttons for the note.
 */
function createNoteBasic(note, buttonCategory) {
  container.innerHTML += notesDisplay(note);
  renderNoteWithButtons(note, buttonCategory);
}

/**
 * Injects action buttons into the note’s button container.
 *
 * @param {Object} note - The note object.
 * @param {Function} buttonCategory - Function that returns HTML for the button group.
 */
function renderNoteWithButtons(note, buttonCategory) {
  getDivId(`note-buttons-${note.id}`).innerHTML = buttonCategory(note);
}

/**
 * Displays a message in the container when no notes exist in the current category.
 */
function noNotesNotification() {
  container.innerHTML = noNotes();
}

/**
 * Handles errors during note fetching and displays an error message.
 *
 * @param {Error} error - The error thrown during fetching.
 */
function catchFetchingNotesError(error) {
  console.error("Failed to load notes:", error);
  container.innerHTML = noNotesError();
}
