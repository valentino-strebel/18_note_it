function notesDisplay(myNotes) {
  return `
    <div class="notesContainer">
      <h1>${myNotes.title}</h1>
      <p>${myNotes.content}</p>
      <button onclick="editNote('${myNotes.id}')">
        <img src="./assets/img/note_icons/edit.svg" alt="Button to begin editing note" />
      </button>
      <button onclick="changeCategoryNote('${myNotes.id}', 'archive')">
        <img src="./assets/img/note_icons/archive.svg" alt="Button to move note to archive" />
      </button>
      <button onclick="changeCategoryNote('${myNotes.id}', 'trash')">
        <img src="./assets/img/note_icons/delete.svg" alt="Button to move note to Trash" />
      </button>
    </div>
  `;
}
