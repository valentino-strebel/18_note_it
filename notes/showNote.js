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
 * @returns {Promise<void>}
 */
async function showNotes() {
  let myNotes = await getNotesCall();
  renderNotesToCategory(myNotes);
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
