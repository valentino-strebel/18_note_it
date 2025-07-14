async function renderNewNote() {
  toggleOverlay();
  const noteCreated = await prepareNewNote();
  if (noteCreated) {
    deleteNoteInput();
    renderNotes();
  }
  toggleOverlay();
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
  errorNote.classList.toggle("d_none");
  errorTitle.classList.toggle("d_none");
  noteTitle.classList.toggle("errorInput");
  noteContent.classList.toggle("errorInput");
  createButton.disabled = true;
}

function removeErrorMessage() {
  errorNote.classList.add("d_none");
  errorTitle.classList.add("d_none");
  noteTitle.classList.remove("errorInput");
  noteContent.classList.remove("errorInput");
  createButton.disabled = false;
}
