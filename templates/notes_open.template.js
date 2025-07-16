function notesOpen(myNotes) {
  return `
    <div class="notesDetailsContainer">
      <div class="noteButtons" onclick="noBubble(event)">
        <button title="Close without saving" class="close" onclick="closeOverlay('${myNotes.id}')"></button>
      </div>
      <h1 id="details-title-${myNotes.id}" class="noteHeadline">${myNotes.title}</h1>
      <p id="details-content-${myNotes.id}" class="noteContent">${myNotes.content}</p>
      <div class="noteBottom">
        <p id="details-creation-${myNotes.id}" class="creationDate">${myNotes.time}</p>
        <div class="noteButtons" onclick="noBubble(event)">
          <button title="Edit note" class="edit" onclick="openNoteEditFromDetails('${myNotes.id}')"></button>
          <button
            title="Archive note"
            class="archive"
            onclick="changeCategoryFromDetails('${myNotes.id}', 'archive')"></button>
          <button
            title="Move note to trash"
            class="trash"
            onclick="changeCategoryFromDetails('${myNotes.id}', 'trash')"></button>
        </div>
      </div>
    </div>
  `;
}
