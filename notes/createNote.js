async function renderNewNote() {
  toggleClass(overlay, "d_none");
  const noteCreated = await prepareNewNote();
  if (noteCreated) {
    deleteNoteInput();
    renderNotes();
  }
  toggleClass(overlay, "d_none");
}

async function prepareNewNote() {
  let noteData = await newNoteData();
  if (!noteData) {
    showErrorMessage();
    return false;
  }
  let { noteTitle: title, noteContent: content } = noteData;
  await createNoteCall(title, content);
  return true;
}

async function newNoteData() {
  let title = getNoteInput(noteTitle);
  let content = getNoteInput(noteContent);
  if (!checkInputValue(title, content)) {
    return;
  }
  return { noteTitle: title, noteContent: content };
}

function checkInputValue(title, content) {
  return title !== "" && content !== "";
}

function getNoteInput(inputElement) {
  return inputElement.value.trim();
}

function deleteNoteInput() {
  noteTitle.value = "";
  noteContent.value = "";
}

function showErrorMessage() {
  toggleClass(errorNote, "d_none");
  toggleClass(errorTitle, "d_none");
  toggleClass(noteTitle, "errorInput");
  toggleClass(noteContent, "errorInput");
  createButton.disabled = true;
}

function removeErrorMessage() {
  addClass(errorNote, "d_none");
  addClass(errorTitle, "d_none");
  removeClass(noteTitle, "errorInput");
  removeClass(noteContent, "errorInput");
  createButton.disabled = false;
}
