/**
 * Initiates the note editing process by showing the edit overlay.
 *
 * @param {string} noteId - The unique identifier of the note to edit.
 */
function openNoteEdit(noteId) {
  toggleClass(overlay, "d_none");
  showNoteEdit(noteId);
}

/**
 * Prepares and displays the note editing interface.
 *
 * @param {string} noteId - The unique identifier of the note to edit.
 */
function showNoteEdit(noteId) {
  let noteData = prepareNoteEditContent(noteId);
  openEditWindow(noteData);
}

/**
 * Retrieves the current note data from the DOM for editing.
 *
 * @param {string} noteId - The unique identifier of the note.
 * @returns {Object} - An object containing the title, content, timestamp, and id of the note.
 */
function prepareNoteEditContent(noteId) {
  let editTitle = getDivId(`title-${noteId}`).textContent;
  let editContent = getDivId(`content-${noteId}`).textContent;
  let noteTimestamp = getDivId(`creation-${noteId}`).textContent;
  return { "title": editTitle, "content": editContent, "time": noteTimestamp, "id": noteId };
}

/**
 * Injects the editing interface HTML into the overlay content area.
 *
 * @param {Object} noteData - An object containing note details for editing.
 * @param {string} noteData.title - The note's title.
 * @param {string} noteData.content - The note's content.
 * @param {string} noteData.time - The note's creation timestamp.
 * @param {string} noteData.id - The note's ID.
 */
function openEditWindow(noteData) {
  getDivId("overlayContent").innerHTML = notesEdit(noteData);
}

/**
 * Collects edited data and initiates the update process.
 *
 * @async
 * @param {string} noteId - The unique identifier of the note being edited.
 */
async function editNote(noteId) {
  let editData = preparePayloadData(noteId);
  closeOverlay();
  runEditUpdate(editData, noteId);
}

/**
 * Sends the updated note data to the backend and refreshes the notes display.
 *
 * @async
 * @param {Object} editData - Contains the updated title and content.
 * @param {string} noteId - The unique identifier of the note to update.
 */
async function runEditUpdate(editData, noteId) {
  toggleClass(overlay, "d_none");
  await updateNoteCall(noteId, editData.title, editData.content);
  await renderNotes();
  toggleClass(overlay, "d_none");
}

/**
 * Prepares the payload data from the edit form fields.
 *
 * @param {string} noteId - The unique identifier of the note.
 * @returns {Object} - An object containing the updated title and content.
 */
function preparePayloadData(noteId) {
  let newTitle = getDivId(`edit-title-${noteId}`).value;
  let newNote = getDivId(`edit-content-${noteId}`).value;
  return { "title": newTitle, "content": newNote };
}

/**
 * Opens the note editing interface directly from the details view.
 *
 * @param {string} noteId - The unique identifier of the note to edit.
 */
function openNoteEditFromDetails(noteId) {
  cleanDiv(overlayContent);
  showNoteEdit(noteId);
}
