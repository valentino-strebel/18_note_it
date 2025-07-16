function notesTrash(myNotes) {
  return `
    <button
      title="Restore note"
      class="active"
      onclick="changeCategoryNote('${myNotes.id}', 'active')"></button>
    <button title="Permanently delete note" class="delete" onclick="deleteNote('${myNotes.id}')"></button>
  `;
}
