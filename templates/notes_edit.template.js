/**
 * Generates an HTML structure for editing a note.
 *
 * @param {Object} myNotes - An object representing a single note.
 * @param {string} myNotes.id - Unique identifier of the note.
 * @param {string} myNotes.title - Title of the note to populate the input field.
 * @param {string} myNotes.content - Content/body of the note, which may include HTML <br> tags for line breaks.
 * @param {string} myNotes.time - Timestamp or creation date of the note.
 * @returns {string} HTML string that represents the editable note interface.
 *
 * Behavior and Features:
 * - Converts `<br>` tags in `content` into newline characters (`\n`) to correctly populate the `<textarea>`.
 * - Escapes all HTML-sensitive characters in the content to prevent XSS or HTML injection.
 * - Renders:
 *   - A close button that triggers `closeOverlay()` (without saving).
 *   - An `<input>` field pre-filled with the note title.
 *   - A `<textarea>` pre-filled with the note content (with line breaks).
 *   - A timestamp at the bottom of the note.
 *   - A save button that triggers `editNote()` with the note ID.
 * - Uses `noBubble(event)` to prevent parent DOM event interference (e.g., clicks inside modal elements).
 *
 * Notes:
 * - Make sure the reverse conversion (newlines to `<br>`) happens when saving the note back to storage.
 */
function notesEdit(myNotes) {
  let escapedContent = escapeHTML(myNotes.content).replace(/<br\s*\/?>/gi, "\n");
  return `
    <div class="editNoteContainer">
      <div class="noteButtons" onclick="noBubble(event)">
        <button title="Close without saving" class="close" onclick="closeOverlay()"></button>
      </div>
      <div class="notesEditMainContent">
        <input id="edit-title-${myNotes.id}" class="noteHeadline" type="text" value="${myNotes.title}" />
        <textarea id="edit-content-${myNotes.id}" class="noteContent">${escapedContent}</textarea>
      </div>
      <div class="noteBottom">
        <p id="creation-${myNotes.id}" class="creationDate">${myNotes.time}</p>
        <div class="noteButtons" onclick="noBubble(event)">
          <button title="Close without saving" class="close" onclick="closeOverlay()"></button>
          <button title="Save changes" class="save" onclick="editNote('${myNotes.id}')"></button>
        </div>
      </div>
    </div>
  `;
}
