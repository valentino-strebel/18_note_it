function notesDisplay(myNotes) {
  let date = formatDate(myNotes.created);
  return `
    <div class="notesContainer">
      <h1 id="title-${myNotes.id}" class="noteHeadline">${myNotes.title}</h1>
      <p id="content-${myNotes.id}" class="noteContent">${myNotes.content}</p>
      <p class="creationDate">${date}</p>
      <div class="noteButtons">
        <button class="edit" onclick="editNote('${myNotes.id}')">
          <img src="./assets/img/note_icons/edit.svg" alt="Button to begin editing note" />
        </button>
        <button class="archive" onclick="changeCategoryNote('${myNotes.id}', 'archive')">
          <img src="./assets/img/note_icons/archive.svg" alt="Button to move note to archive" />
        </button>
        <button class="trash" onclick="changeCategoryNote('${myNotes.id}', 'trash')">
          <img src="./assets/img/note_icons/delete.svg" alt="Button to move note to Trash" />
        </button>
      </div>
    </div>
  `;
}
