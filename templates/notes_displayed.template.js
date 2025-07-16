function notesDisplay(myNotes) {
  let date = formatDate(myNotes.created);
  return `
    <div class="notesContainer" onclick="openDetails('${myNotes.id}')">
      <h1 id="title-${myNotes.id}" class="noteHeadline truncate">${myNotes.title}</h1>
      <p id="content-${myNotes.id}" class="noteContent truncate">${myNotes.content}</p>
      <div class="noteBottom">
        <p id="creation-${myNotes.id}" class="creationDate">${date}</p>
        <div class="noteButtons" onclick="noBubble(event)">
          <button title="Edit note" class="edit" onclick="openNoteEdit('${myNotes.id}')"></button>
          <button title="Archive note" class="archive" onclick="changeCategoryNote('${myNotes.id}', 'archive')"></button>
          <button title="Move note to trash" class="trash" onclick="changeCategoryNote('${myNotes.id}', 'trash')"></button>
        </div>
      </div>
    </div>
  `;
}
