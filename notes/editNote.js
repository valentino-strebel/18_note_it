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
  return { "title": editTitle, "content": editContent, "time": noteTimestamp, "id": noteId };
}

function openEditWindow(noteData) {
  document.getElementById("overlayContent").innerHTML = notesEdit(noteData);
}

async function editNote(noteId) {
  let editData = preparePayloadData(noteId);
  closeOverlay();
  runEditUpdate(editData, noteId);
}

async function runEditUpdate(editData, noteId) {
  toggleOverlay();
  await updateNoteCall(noteId, editData.title, editData.content);
  await renderNotes();
  toggleOverlay();
}

function preparePayloadData(noteId) {
  let newTitle = document.getElementById(`edit-title-${noteId}`).value;
  let newNote = document.getElementById(`edit-content-${noteId}`).value;
  return { "title": newTitle, "content": newNote };
}

function openNoteEditFromDetails(noteId) {
  cleanOverlay();
  showNoteEdit(noteId);
}
