async function newNoteData() {
  let noteTitle = document.getElementById("title").value;
  let noteContent = document.getElementById("content").value;
  let noteValidity = checkInputValue(noteTitle, noteContent);
  if (!noteValidity) {
    console.log("not data inserted");
    return;
  } else {
    return { noteTitle, noteContent };
  }
}

function deleteNoteInput() {
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}

async function prepareNewNote() {
  let noteData = await newNoteData();
  if (!noteData) {
    return;
  }
  let { noteTitle, noteContent } = noteData;
  await createNoteCall(noteTitle, noteContent);
}

function checkInputValue(noteTitle, noteContent) {
  return noteTitle.trim() !== "" && noteContent.trim() !== "";
}

async function renderNewNote() {
  toggleOverlay();
  buttonStatus(true);
  await prepareNewNote();
  deleteNoteInput();
  renderNotes();
  buttonStatus(false);
  toggleOverlay();
}
