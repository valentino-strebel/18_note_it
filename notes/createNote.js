/**
 * Handles the creation of a new note by showing a loading overlay,
 * preparing the note data, and updating the notes display.
 *
 * @async
 * @returns {Promise<void>}
 */
async function renderNewNote(myTitle, myContent) {
  toggleClass(overlay, "d_none");
  let noteCreated = await prepareNewNote(myTitle, myContent);
  if (noteCreated) {
    deleteNoteInput(noteTitle, noteContent);
    renderNotes();
  }
  toggleClass(overlay, "d_none");
}

/**
 * Prepares and submits the new note data if valid.
 *
 * @async
 * @returns {Promise<boolean>} - Returns true if note was successfully created, false otherwise.
 */
async function prepareNewNote(myTitle, myContent) {
  let noteData = await newNoteData(myTitle, myContent);
  if (!noteData) {
    showErrorMessage();
    return false;
  }
  let { noteTitle: title, noteContent: content } = noteData;
  await createNoteCall(title, content);
  return true;
}

/**
 * Retrieves and validates input values from the note creation form.
 *
 * @async
 * @returns {Promise<Object|undefined>} - Returns an object with note title and content, or undefined if invalid.
 */
async function newNoteData(myTitle, myContent) {
  let inputTitle = getNoteInput(myTitle);
  let inputContent = getNoteInput(myContent);
  if (!checkInputValue(inputTitle, inputContent)) {
    return;
  }
  return { noteTitle: inputTitle, noteContent: inputContent };
}

/**
 * Checks if both title and content inputs are non-empty.
 *
 * @param {string} title - The input value for the note title.
 * @param {string} content - The input value for the note content.
 * @returns {boolean} - True if both inputs are valid, false otherwise.
 */
function checkInputValue(inputContent, inputContent) {
  return inputContent !== "" && inputContent !== "";
}

/**
 * Returns the trimmed string value from a given input element.
 *
 * @param {HTMLInputElement|HTMLTextAreaElement} inputElement - The input or textarea element.
 * @returns {string} - The trimmed input value.
 */
function getNoteInput(inputElement) {
  return inputElement.value.trim();
}

/**
 * Clears the input fields for note title and content.
 */
function deleteNoteInput(myTitle, myContent) {
  myTitle.value = "";
  myContent.value = "";
}

/**
 * Displays an error message and styles the input fields to indicate a problem.
 * Also disables the create button.
 */
function showErrorMessage() {
  toggleClass(errorNote, "d_none");
  toggleClass(errorTitle, "d_none");
  toggleClass(noteTitle, "errorInput");
  toggleClass(noteContent, "errorInput");
  createButton.disabled = true;
}

/**
 * Removes the error message and input error styles.
 * Also re-enables the create button.
 */
function removeErrorMessage() {
  addClass(errorNote, "d_none");
  addClass(errorTitle, "d_none");
  removeClass(noteTitle, "errorInput");
  removeClass(noteContent, "errorInput");
  createButton.disabled = false;
}
