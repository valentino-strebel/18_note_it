/**
 * Generates an HTML structure for displaying an open note with options to edit,
 * archive, trash, or close the note.
 *
 * @param {Object} myNotes - An object representing a note.
 * @param {string} myNotes.id - Unique identifier of the note.
 * @param {string} myNotes.title - Title of the note.
 * @param {string} myNotes.content - Content/body of the note.
 * @param {string} myNotes.time - Timestamp or creation date of the note.
 * @returns {string} - HTML string that represents the detailed view of the note.
 *
 * The generated layout includes:
 * - A close button to close the view without saving (`closeOverlay`).
 * - Title and content display areas.
 * - Creation timestamp.
 * - Buttons to:
 *   - Edit the note (`openNoteEditFromDetails`)
 *   - Move the note to archive (`changeCategoryFromDetails` with 'archive')
 *   - Move the note to trash (`changeCategoryFromDetails` with 'trash')
 *
 * The `noBubble(event)` function is used to stop event propagation from button clicks.
 */
function notesOpen(myNotes) {
  return `
    <div class="notesDetailsContainer">
      <div class="noteButtons" onclick="noBubble(event)">
        <button title="Close without saving" class="close" onclick="closeOverlay('${myNotes.id}')"></button>
      </div>
      <h1 id="details-title-${myNotes.id}" class="noteHeadline">${myNotes.title}</h1>
      <p id="details-content-${myNotes.id}" class="noteContent">${myNotes.content}</p>
      <div class="noteBottom">
        <p id="details-creation-${myNotes.id}" class="creationDate">${myNotes.time}</p>
        <div class="noteButtons" onclick="noBubble(event)">
          <button title="Edit note" class="edit" onclick="openNoteEditFromDetails('${myNotes.id}')"></button>
          <button
            title="Archive note"
            class="archive"
            onclick="changeCategoryFromDetails('${myNotes.id}', 'archive')"></button>
          <button
            title="Move note to trash"
            class="trash"
            onclick="changeCategoryFromDetails('${myNotes.id}', 'trash')"></button>
        </div>
      </div>
    </div>
  `;
}
