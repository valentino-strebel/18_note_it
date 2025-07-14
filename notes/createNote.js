async function renderNewNote() {
  toggleOverlay();
  buttonStatus(true);
  await prepareNewNote();
  deleteNoteInput();
  renderNotes();
  buttonStatus(false);
  toggleOverlay();
}

async function prepareNewNote() {
  let noteData = await newNoteData();
  if (!noteData) return;
  let { noteTitle: title, noteContent: content } = noteData;
  await createNoteCall(title, content);
}

async function newNoteData() {
  let title = getNoteInput(noteTitle);
  let content = getNoteInput(noteContent);
  if (!checkInputValue(title, content)) return;
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

function buttonStatus(status) {
  createButton.disabled = status;
}
