function openDetails(noteId) {
  toggleClass(overlay, "d_none");
  openNoteDetails(noteId);
}

function openNoteDetails(noteId) {
  let noteData = prepareNoteOpenContent(noteId);
  openDetailsWindow(noteData);
}

function openDetailsWindow(noteData) {
  document.getElementById("overlayContent").innerHTML = notesOpen(noteData);
}

function prepareNoteOpenContent(noteId) {
  let openTitle = document.getElementById(`title-${noteId}`).textContent;
  let openContent = document.getElementById(`content-${noteId}`).textContent;
  let openTimestamp = document.getElementById(`creation-${noteId}`).textContent;
  return { "title": openTitle, "content": openContent, "time": openTimestamp, "id": noteId };
}
