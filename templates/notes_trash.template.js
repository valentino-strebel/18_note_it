function notesTrash(myNotes) {
  return `
    <div class="notesContainer">
      <h1>${myNotes.title}</h1>
      <p>${myNotes.content}</p>
      <button onclick="changeCategoryNote('${myNotes.id}', 'active')">
        <img src="./assets/img/note_icons/restore.svg" alt="Icon to move note to archive" />
      </button>
      <button onclick="changeCategoryNote('${myNotes.id}', 'archive')">
        <img src="./assets/img/note_icons/archive.svg" alt="Icon to move note to archive" />
      </button>
      <button onclick="deleteNote('${myNotes.id}')">
        <img src="./assets/img/note_icons/delete_perma.svg" alt="Icon to permanently delete note" />
      </button>
    </div>
  `;
}
