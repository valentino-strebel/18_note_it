function openDetails(noteId) {
  toggleClass(overlay, "d_none");
  openNoteDetails(noteId);
}

function openNoteDetails(noteId) {
  let noteData = prepareNoteOpenContent(noteId);
  openDetailsWindow(noteData);
}

function openDetailsWindow(noteData) {
  getDivId("overlayContent").innerHTML = notesOpen(noteData);
}

function prepareNoteOpenContent(noteId) {
  let openTitle = getDivId(`title-${noteId}`).textContent;
  let openContent = getDivId(`content-${noteId}`).textContent;
  let openTimestamp = getDivId(`creation-${noteId}`).textContent;
  return { "title": openTitle, "content": openContent, "time": openTimestamp, "id": noteId };
}
