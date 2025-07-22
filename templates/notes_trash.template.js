/**
 * Generates HTML button elements for managing a trashed note.
 *
 * @param {Object} myNotes - An object representing a note.
 * @param {string} myNotes.id - The unique identifier of the note.
 * @returns {string} - HTML string containing buttons for restoring or permanently deleting the note.
 *
 * The generated buttons:
 * - Restore button: calls `changeCategoryNote(noteId, 'active')` when clicked.
 * - Delete button: calls `deleteNote(noteId)` to permanently remove the note.
 */
function notesTrash(myNotes) {
  return `
    <button
      title="Restore note"
      class="active"
      onclick="changeCategoryNote('${myNotes.id}', 'active')"></button>
    <button
      title="Permanently delete note"
      class="delete"
      onclick="deleteNote('${myNotes.id}')"></button>
  `;
}
