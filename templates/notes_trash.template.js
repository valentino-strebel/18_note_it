function notesTrash(myNotes) {
  let date = formatDate(myNotes.created);

  return `
    <div class="notesContainer" onclick="openDetails('${myNotes.id}')">
      <h1 id="title-${myNotes.id}" class="noteHeadline">${myNotes.title}</h1>
      <p id="content-${myNotes.id}" class="noteContent">${myNotes.content}</p>
      <div class="noteBottom">
        <p id="creation-${myNotes.id}" class="creationDate">${date}</p>
        <div class="noteButtons" onclick="noBubble(event)">
          <button title="Restore note" class="active" onclick="changeCategoryNote('${myNotes.id}', 'active')"></button>
          <button title="Permanently delete note" class="delete" onclick="deleteNote('${myNotes.id}')"></button>
        </div>
      </div>
    </div>
  `;
}
