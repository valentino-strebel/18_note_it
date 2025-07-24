/**
 * Generates an HTML structure for editing a note.
 *
 * @param {Object} myNotes - An object representing a note.
 * @param {string} myNotes.id - Unique identifier of the note.
 * @param {string} myNotes.title - Title of the note to populate the input field.
 * @param {string} myNotes.content - Content/body of the note to populate the textarea.
 * @param {string} myNotes.time - Timestamp or creation date of the note.
 * @returns {string} - HTML string that represents the note editing interface.
 *
 * The rendered layout includes:
 * - A close button to exit without saving (`closeOverlay`).
 * - Input fields for editing the note's title and content.
 * - Display of the creation timestamp.
 * - A save button that triggers `editNote` to save changes.
 *
 * The `noBubble(event)` function is used to prevent event bubbling from interfering with parent elements.
 */
function notesEdit(myNotes) {
  let escapedContent = escapeHTML(myNotes.content).replace(/\n/g, "<br>");
  let escapedTitle = escapeHTML(myNotes.title);
  return `
    <div class="editNoteContainer">
      <div class="noteButtons" onclick="noBubble(event)">
        <button title="Close without saving" class="close" onclick="closeOverlay('${myNotes.id}')"></button>
      </div>
      <div class="notesEditMainContent">
        <input id="edit-title-${myNotes.id}" class="noteHeadline" type="text" value="${escapedTitle}" />
        <textarea id="edit-content-${myNotes.id}" class="noteContent">${escapedContent}</textarea>
      </div>
      <div class="noteBottom">
        <p id="creation-${myNotes.id}" class="creationDate">${myNotes.time}</p>
        <div class="noteButtons" onclick="noBubble(event)">
          <button title="Close without saving" class="close" onclick="closeOverlay('${myNotes.id}')"></button>
          <button title="Save changes" class="save" onclick="editNote('${myNotes.id}')"></button>
        </div>
      </div>
    </div>
  `;
}
