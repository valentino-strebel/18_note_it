function notesArchive(myNotes) {
  let date = formatDate(myNotes.created);
  return `
    <div class="notesContainer">
      <h1 id="title-${myNotes.id}" class="noteHeadline">${myNotes.title}</h1>
      <p id="content-${myNotes.id}" class="noteContent">${myNotes.content}</p>
      <div class="noteBottom">
        <p class="creationDate">${date}</p>
        <div class="noteButtons">
          <button title="Edit note" class="edit" onclick="editNote('${myNotes.id}')"></button>
          <button title="Restore note" class="active" onclick="changeCategoryNote('${myNotes.id}', 'active')"></button>
          <button title="Move note to trash" class="trash" onclick="changeCategoryNote('${myNotes.id}', 'trash')"></button>
        </div>
      </div>
    </div>
  `;
}
