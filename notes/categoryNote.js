async function changeCategoryNote(noteId, noteCategory) {
  toggleOverlay();
  await statusNoteCall(noteId, noteCategory);
  await renderNotes();
  toggleOverlay();
}

async function changeCategoryFromDetails(noteId, noteCategory) {
  await statusNoteCall(noteId, noteCategory);
  await renderNotes();
  toggleOverlay();
}
