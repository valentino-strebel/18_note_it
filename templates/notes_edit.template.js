function notesEdit(myNotes) {
  return `
    <div class="editNoteContainer">
      <div class="noteButtons" onclick="noBubble(event)">
        <button title="Close without saving" class="close" onclick="closeOverlay('${myNotes.id}')"></button>
      </div>
      <input id="edit-title-${myNotes.id}" class="noteHeadline" type="text" value="${myNotes.title}" />
      <textarea id="edit-content-${myNotes.id}" class="noteContent">${myNotes.content}</textarea>
      <div class="noteBottom">
        <p id="creation-${myNotes.id}" class="creationDate">${myNotes.time}</p>
        <div class="noteButtons" onclick="noBubble(event)">
          <button title="Close without saving" class="close" onclick="closeOverlay('${myNotes.id}')"></button>
          <button title="Save changes" class="save" onclick="editNote('${myNotes.id}')"></button>
        </div>
      </div>
    </div>
  `;
}
