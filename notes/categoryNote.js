async function changeCategoryNote(noteId, noteCategory) {
  await statusNoteCall(noteId, noteCategory);
  await renderNotes();
}
