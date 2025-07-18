async function deleteNote(noteId) {
  toggleClass(overlay, "d_none");
  await deleteNoteCall(noteId);
  renderNotes();
  toggleClass(overlay, "d_none");
}
