/**
 * Changes the category of a note (e.g., active, archive, trash) and refreshes the UI.
 *
 * @async
 * @param {string} noteId - The unique identifier of the note.
 * @param {string} noteCategory - The target category to assign to the note.
 *
 * This function:
 * - Shows a loading overlay.
 * - Sends an update request via `statusNoteCall`.
 * - Refreshes the notes view via `renderNotes`.
 * - Hides the loading overlay.
 */
async function changeCategoryNote(noteId, noteCategory) {
  toggleClass(overlay, "d_none");
  await statusNoteCall(noteId, noteCategory);
  await renderNotes();
  toggleClass(overlay, "d_none");
}

/**
 * Changes the category of a note directly from the details view and refreshes the UI.
 *
 * @async
 * @param {string} noteId - The unique identifier of the note.
 * @param {string} noteCategory - The target category to assign to the note.
 *
 * This variant does not show a loading overlay until after the update, likely
 * because it's invoked from a context that already has the overlay active.
 */
async function changeCategoryFromDetails(noteId, noteCategory) {
  await statusNoteCall(noteId, noteCategory);
  await renderNotes();
  toggleClass(overlay, "d_none");
}
