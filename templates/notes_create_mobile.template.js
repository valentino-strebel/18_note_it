/**
 * Generates the HTML markup string for the mobile note creation interface.
 *
 * Includes:
 * - Close button
 * - Title input with error message
 * - Note textarea with error message
 * - Create button
 *
 * The HTML includes inline event handlers for:
 * - Preventing event bubbling
 * - Removing error messages on focus
 * - Submitting the note via `renderNewNoteMobile`
 *
 * @returns {string} - The HTML string for the mobile note creation form.
 */
function createNoteMobile() {
  return `
    <div class="createNoteMobile">
      <div class="noteButtons" onclick="noBubble(event)">
        <button title="Close without saving" class="close" onclick="closeOverlay()"></button>
      </div>
      <input id="titleMobile" type="text" placeholder="Title" onfocus="removeErrorMessageMobile()" />
      <div class="errorMessage">
        <p id="errorMessageTitleMobile" class="d_none">*Enter a Title</p>
      </div>
      <textarea id="contentMobile" placeholder="Note" onfocus="removeErrorMessageMobile()"></textarea>
      <div class="errorMessage">
        <p id="errorMessageNoteMobile" class="d_none">*Enter a Note</p>
      </div>
      <div class="createButtonContainer">
        <button
          class="createButton"
          id="createButtonMobile"
          onclick="renderNewNoteMobile(noteTitleMobile, noteContentMobile)">
          Create
        </button>
      </div>
    </div>
  `;
}
