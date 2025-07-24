/**
 * Generates a compact HTML representation of a note for display in a list.
 *
 * @param {Object} myNotes - An object representing a note.
 * @param {string} myNotes.id - Unique identifier of the note.
 * @param {string} myNotes.title - Title of the note.
 * @param {string} myNotes.content - Content/body of the note.
 * @param {string|Date} myNotes.created - Creation date of the note.
 * @returns {string} - HTML string representing the summarized note view.
 *
 * The returned HTML includes:
 * - Clickable container to open full note details (`openDetails`).
 * - Truncated title and content fields.
 * - Formatted creation date using `formatDate`.
 * - Placeholder button container for future actions (e.g., edit, delete), with event bubbling prevented via `noBubble`.
 */
function notesDisplay(myNotes) {
  let date = formatDate(myNotes.created);
  let escapedContent = escapeHTML(myNotes.content).replace(/\n/g, "<br>");
  let escapedTitle = escapeHTML(myNotes.title);
  return `
    <div class="notesContainer" onclick="openDetails('${myNotes.id}')">
      <h1 id="title-${myNotes.id}" class="noteHeadline truncate">${escapedTitle}</h1>
      <p id="content-${myNotes.id}" class="noteContent truncate">${escapedContent}</p>
      <div class="noteBottom">
        <p id="creation-${myNotes.id}" class="creationDate">${date}</p>
        <div class="noteButtons" id="note-buttons-${myNotes.id}" onclick="noBubble(event)"></div>
      </div>
    </div>
  `;
}
