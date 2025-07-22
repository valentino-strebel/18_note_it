/**
 * Generates HTML button elements for managing an archived note.
 *
 * @param {Object} myNotes - An object representing a note.
 * @param {string} myNotes.id - Unique identifier of the note.
 * @returns {string} - HTML string containing buttons for editing, restoring, or trashing the note.
 *
 * The generated buttons include:
 * - Edit: Opens the note in edit mode (`openNoteEdit`).
 * - Restore: Moves the note back to the active category (`changeCategoryNote` with 'active').
 * - Trash: Moves the note to the trash category (`changeCategoryNote` with 'trash').
 */
function notesArchive(myNotes) {
  return `
    <button title="Edit note" class="edit" onclick="openNoteEdit('${myNotes.id}')"></button>
    <button
      title="Restore note"
      class="active"
      onclick="changeCategoryNote('${myNotes.id}', 'active')"></button>
    <button
      title="Move note to trash"
      class="trash"
      onclick="changeCategoryNote('${myNotes.id}', 'trash')"></button>
  `;
}
