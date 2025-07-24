/**
 * Generates an HTML structure for displaying a detailed (read-only) view of a note,
 * including options to edit, archive, move to trash, or close the note view.
 *
 * @param {Object} myNotes - An object representing a single note.
 * @param {string} myNotes.id - Unique identifier of the note.
 * @param {string} myNotes.title - Title of the note to display in the header.
 * @param {string} myNotes.content - Content/body of the note. Newlines are converted to <br> for HTML rendering.
 * @param {string} myNotes.time - Timestamp or creation date of the note.
 * @returns {string} HTML string that represents the full detail view of the note.
 *
 * Features and Behavior:
 * - Escapes HTML-sensitive characters in `content` to prevent XSS or injection.
 * - Converts newline characters (`\n`) into `<br>` tags so that the note body maintains its original formatting in HTML.
 * - Renders:
 *   - A close button that triggers `closeOverlay()`.
 *   - A headline (`<h1>`) with the note's title.
 *   - A paragraph (`<p>`) with the formatted note content.
 *   - A timestamp indicating when the note was created.
 *   - Action buttons for:
 *     - Editing the note via `openNoteEditFromDetails(id)`
 *     - Archiving the note via `changeCategoryFromDetails(id, 'archive')`
 *     - Moving the note to trash via `changeCategoryFromDetails(id, 'trash')`
 * - `noBubble(event)` is used to prevent click event propagation from buttons to parent containers.
 *
 * Notes:
 * - This function is intended for displaying notes in a modal or overlay-like context.
 * - Does not provide editing capability directly — instead it delegates to editing functions when buttons are clicked.
 */
function notesOpen(myNotes) {
  let escapedContent = escapeHTML(myNotes.content).replace(/\n/g, "<br>");
  return `
    <div class="notesDetailsContainer">
      <div class="noteButtons" onclick="noBubble(event)">
        <button title="Close without saving" class="close" onclick="closeOverlay('${myNotes.id}')"></button>
      </div>
      <div class="notesDetailsMainContent">
        <h1 id="details-title-${myNotes.id}" class="noteHeadline">${myNotes.title}</h1>
        <p id="details-content-${myNotes.id}" class="noteContent">${escapedContent}</p>
      </div>
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
