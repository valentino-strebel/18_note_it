function openNoteEdit(noteId) {
  toggleOverlay();
  showNoteEdit(noteId);
}

function showNoteEdit(noteId) {
  let noteData = prepareNoteEditContent(noteId);
  openEditWindow(noteData);
}

function prepareNoteEditContent(noteId) {
  let editTitle = document.getElementById(`title-${noteId}`).textContent;
  let editContent = document.getElementById(`content-${noteId}`).textContent;
  let noteTimestamp = document.getElementById(`creation-${noteId}`).textContent;
  let noteData = { "title": editTitle, "content": editContent, "time": noteTimestamp, "id": noteId };
  return noteData;
}

function openEditWindow(noteData) {
  document.getElementById("overlayContent").innerHTML = notesEdit(noteData);
}

async function editNote(noteId) {
  let editData = preparePayloadData(noteId);
  await updateNoteCall(noteId, editData.title, editData.content);
  closeEditNote();
  renderNotes();
}

function preparePayloadData(noteId) {
  let newTitle = document.getElementById(`edit-title-${noteId}`).value;
  let newNote = document.getElementById(`edit-content-${noteId}`).value;
  let editData = { "title": newTitle, "content": newNote };
  return editData;
}

function closeEditNote() {
  cleanEditVariables();
  toggleOverlay();
}

function cleanEditVariables() {
  document.getElementById("overlayContent").innerHTML = "";
}
