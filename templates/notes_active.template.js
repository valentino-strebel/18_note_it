function notesActive(myNotes) {
  return `
    <button title="Edit note" class="edit" onclick="openNoteEdit('${myNotes.id}')"></button>
    <button
      title="Archive note"
      class="archive"
      onclick="changeCategoryNote('${myNotes.id}', 'archive')"></button>
    <button
      title="Move note to trash"
      class="trash"
      onclick="changeCategoryNote('${myNotes.id}', 'trash')"></button>
  `;
}
