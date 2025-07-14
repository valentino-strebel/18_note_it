async function changeCategoryNote(noteId, noteCategory) {
  toggleOverlay();
  await statusNoteCall(noteId, noteCategory);
  await renderNotes();
  toggleOverlay();
}
