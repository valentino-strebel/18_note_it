/**
 * Generates HTML button elements for managing an active note.
 *
 * @param {Object} myNotes - An object representing a note.
 * @param {string} myNotes.id - Unique identifier of the note.
 * @returns {string} - HTML string containing buttons for editing, archiving, or trashing the note.
 *
 * The generated buttons include:
 * - Edit: Opens the note in edit mode (`openNoteEdit`).
 * - Archive: Moves the note to the archive category (`changeCategoryNote` with 'archive').
 * - Trash: Moves the note to the trash category (`changeCategoryNote` with 'trash').
 */
function notesActive(myNotes) {
  return `
    <button title="Edit note" class="edit" onclick="openNoteEdit('${myNotes.id}')"></button>
    <button
      title="Archive note"
      class="archive"
      onclick="changeCategoryNote('${myNotes.id}', 'archive')"></button>
    <button
      title="Move note to trash"
      class="trash"
      onclick="changeCategoryNote('${myNotes.id}', 'trash')"></button>
  `;
}
