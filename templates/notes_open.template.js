function notesDisplay(myNotes) {
  let date = formatDate(myNotes.created);
  return `
    <div class="notesDetailsContainer">
      <h1 id="details-title-${myNotes.id}" class="noteHeadline">${myNotes.title}</h1>
      <p id="details-content-${myNotes.id}" class="noteContent">${myNotes.content}</p>
      <div class="noteBottom">
        <p id="details-creation-${myNotes.id}" class="creationDate">${date}</p>
        <div class="noteButtons">
          <button title="Edit note" class="edit" onclick="openNoteEdit('${myNotes.id}')"></button>
          <button title="Archive note" class="archive" onclick="changeCategoryNote('${myNotes.id}', 'archive')"></button>
          <button title="Move note to trash" class="trash" onclick="changeCategoryNote('${myNotes.id}', 'trash')"></button>
        </div>
      </div>
    </div>
  `;
}
