/**
 * Returns an HTML message indicating there are no notes in the current category.
 *
 * @returns {string} - HTML string with a placeholder message for an empty category.
 */
function noNotes() {
  return `
    <div>
      <p>No Notes in Category</p>
    </div>
  `;
}

/**
 * Returns an HTML message indicating an error occurred while loading notes.
 *
 * @returns {string} - HTML string with an error message.
 *
 * Note: The returned string includes extra quotation marks, which may be unintended.
 */
function noNotesError() {
  return `
    "
    <p>Error loading notes.</p>
    "
  `;
}
