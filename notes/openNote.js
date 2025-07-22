/**
 * Opens the note details overlay for a given note.
 *
 * @param {string} noteId - The unique identifier of the note to display.
 */
function openDetails(noteId) {
  toggleClass(overlay, "d_none");
  openNoteDetails(noteId);
}

/**
 * Prepares the note data and opens the detailed note view.
 *
 * @param {string} noteId - The unique identifier of the note to display.
 */
function openNoteDetails(noteId) {
  let noteData = prepareNoteOpenContent(noteId);
  openDetailsWindow(noteData);
}

/**
 * Injects the note detail view HTML into the overlay content container.
 *
 * @param {Object} noteData - An object containing note details.
 * @param {string} noteData.title - The note's title.
 * @param {string} noteData.content - The note's content.
 * @param {string} noteData.time - The creation timestamp of the note.
 * @param {string} noteData.id - The unique identifier of the note.
 */
function openDetailsWindow(noteData) {
  getDivId("overlayContent").innerHTML = notesOpen(noteData);
}

/**
 * Retrieves the title, content, and creation time of a note from the DOM.
 *
 * @param {string} noteId - The unique identifier of the note.
 * @returns {Object} - An object containing the note's title, content, time, and id.
 */
function prepareNoteOpenContent(noteId) {
  let openTitle = getDivId(`title-${noteId}`).textContent;
  let openContent = getDivId(`content-${noteId}`).textContent;
  let openTimestamp = getDivId(`creation-${noteId}`).textContent;
  return { "title": openTitle, "content": openContent, "time": openTimestamp, "id": noteId };
}
