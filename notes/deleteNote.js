/**
 * Deletes a note by its ID and refreshes the notes display.
 *
 * @async
 * @param {string} noteId - The unique identifier of the note to delete.
 *
 * This function:
 * - Shows a loading overlay using `toggleClass`.
 * - Calls `deleteNoteCall` to remove the note from storage.
 * - Re-renders the notes to reflect the deletion.
 * - Hides the loading overlay when done.
 */
async function deleteNote(noteId) {
  toggleClass(overlay, "d_none");
  await deleteNoteCall(noteId);
  renderNotes();
  toggleClass(overlay, "d_none");
}
