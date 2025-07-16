function notesDisplay(myNotes) {
  let date = formatDate(myNotes.created);
  return `
    <div class="notesContainer" onclick="openDetails('${myNotes.id}')">
      <h1 id="title-${myNotes.id}" class="noteHeadline truncate">${myNotes.title}</h1>
      <p id="content-${myNotes.id}" class="noteContent truncate">${myNotes.content}</p>
      <div class="noteBottom">
        <p id="creation-${myNotes.id}" class="creationDate">${date}</p>
        <div class="noteButtons" id="note-buttons-${myNotes.id}" onclick="noBubble(event)"></div>
      </div>
    </div>
  `;
}
