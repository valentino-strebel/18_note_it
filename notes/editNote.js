function openNoteEdit(noteId) {
  toggleClass(overlay, "d_none");
  showNoteEdit(noteId);
}

function showNoteEdit(noteId) {
  let noteData = prepareNoteEditContent(noteId);
  openEditWindow(noteData);
}

function prepareNoteEditContent(noteId) {
  let editTitle = getDivId(`title-${noteId}`).textContent;
  let editContent = getDivId(`content-${noteId}`).textContent;
  let noteTimestamp = getDivId(`creation-${noteId}`).textContent;
  return { "title": editTitle, "content": editContent, "time": noteTimestamp, "id": noteId };
}

function openEditWindow(noteData) {
  getDivId("overlayContent").innerHTML = notesEdit(noteData);
}

async function editNote(noteId) {
  let editData = preparePayloadData(noteId);
  closeOverlay();
  runEditUpdate(editData, noteId);
}

async function runEditUpdate(editData, noteId) {
  toggleClass(overlay, "d_none");
  await updateNoteCall(noteId, editData.title, editData.content);
  await renderNotes();
  toggleClass(overlay, "d_none");
}

function preparePayloadData(noteId) {
  let newTitle = getDivId(`edit-title-${noteId}`).value;
  let newNote = getDivId(`edit-content-${noteId}`).value;
  return { "title": newTitle, "content": newNote };
}

function openNoteEditFromDetails(noteId) {
  cleanDiv(overlayContent);
  showNoteEdit(noteId);
}
