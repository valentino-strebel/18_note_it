async function deleteNote(noteId) {
  toggleOverlay();
  await deleteNoteCall(noteId);
  renderNotes();
  toggleOverlay();
}
