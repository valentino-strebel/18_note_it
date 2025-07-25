/**
 * Opens the mobile note creation interface.
 * Displays overlay and creation window.
 */
function openMobileCreateInterface() {
  toggleClass(overlay, "d_none");
  showCreationWindow();
}

/**
 * Displays the note creation window content and initializes required variables.
 */
function showCreationWindow() {
  getDivId("overlayContent").innerHTML = createNoteMobile();
  setVariablesMobile();
}

/**
 * Handles the creation of a new mobile note.
 * Deletes input and re-renders notes if creation is successful.
 *
 * @param {string} myTitle - Title of the note.
 * @param {string} myContent - Content of the note.
 * @returns {Promise<void>}
 */
async function renderNewNoteMobile(myTitle, myContent) {
  const noteCreated = await prepareNewNoteMobile(myTitle, myContent);
  if (!noteCreated) return;
  deleteNoteInput(noteTitleMobile, noteContentMobile);
  renderNotesMobile();
}

/**
 * Prepares and validates note data before creation.
 *
 * @param {string} myTitle - Title of the note.
 * @param {string} myContent - Content of the note.
 * @returns {Promise<boolean>} - Returns true if the note is valid and created, false otherwise.
 */
async function prepareNewNoteMobile(myTitle, myContent) {
  const noteData = await newNoteData(myTitle, myContent);
  if (!noteData) {
    showErrorMessageMobile();
    return false;
  }

  const { noteTitle: title, noteContent: content } = noteData;
  try {
    await createNoteCall(title, content);
  } catch (error) {
    showErrorMessageMobile();
    return false;
  }

  return true;
}

/**
 * Renders all notes in the mobile view after clearing the overlay.
 * Handles fetching errors gracefully.
 *
 * @returns {Promise<void>}
 */
async function renderNotesMobile() {
  cleanDiv(overlayContent);
  try {
    await showNotes(displayCategory);
  } catch (error) {
    catchFetchingNotesError(error);
  } finally {
    toggleClass(overlay, "d_none");
  }
}

/**
 * Displays error message and highlights inputs with invalid data.
 * Disables the create button.
 */
function showErrorMessageMobile() {
  toggleClass(errorNoteMobile, "d_none");
  toggleClass(errorTitleMobile, "d_none");
  toggleClass(noteTitleMobile, "errorInput");
  toggleClass(noteContentMobile, "errorInput");
  createButtonMobile.disabled = true;
}

/**
 * Removes error message and input highlights.
 * Enables the create button.
 */
function removeErrorMessageMobile() {
  addClass(errorNoteMobile, "d_none");
  addClass(errorTitleMobile, "d_none");
  removeClass(noteTitleMobile, "errorInput");
  removeClass(noteContentMobile, "errorInput");
  createButtonMobile.disabled = false;
}
