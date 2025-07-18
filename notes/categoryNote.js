async function changeCategoryNote(noteId, noteCategory) {
  toggleClass(overlay, "d_none");
  await statusNoteCall(noteId, noteCategory);
  await renderNotes();
  toggleClass(overlay, "d_none");
}

async function changeCategoryFromDetails(noteId, noteCategory) {
  await statusNoteCall(noteId, noteCategory);
  await renderNotes();
  toggleClass(overlay, "d_none");
}
