async function deleteNote(noteId) {
  await deleteNoteCall(noteId);
  renderNotes();
}
