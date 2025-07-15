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
  let noteData = { "title": editTitle, "content": editContent, "time": noteTimestamp };
  return noteData;
}

function openEditWindow(noteData) {
  document.getElementById("overlayContent").innerHTML = notesEdit(noteData);
}

function editNote(noteId) {
  console.log(noteId);
}

function closeEditNote() {
  cleanEditVariables();
  toggleOverlay();
}

function cleanEditVariables() {
  document.getElementById("overlayContent").innerHTML = "";
}
