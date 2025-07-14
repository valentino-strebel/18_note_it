function notesTrash(myNotes) {
  let date = formatDate(myNotes.created);

  return `
    <div class="notesContainer">
      <h1 class="noteHeadline">${myNotes.title}</h1>
      <p class="noteContent">${myNotes.content}</p>
      <p class="creationDate">${date}</p>
      <div class="noteButtons">
        <button class="active" onclick="changeCategoryNote('${myNotes.id}', 'active')">
          <img src="./assets/img/note_icons/restore.svg" alt="Icon to move note to archive" />
        </button>
        <button class="archive" onclick="changeCategoryNote('${myNotes.id}', 'archive')">
          <img src="./assets/img/note_icons/archive.svg" alt="Icon to move note to archive" />
        </button>
        <button class="delete" onclick="deleteNote('${myNotes.id}')">
          <img src="./assets/img/note_icons/delete_perma.svg" alt="Icon to permanently delete note" />
        </button>
      </div>
    </div>
  `;
}
