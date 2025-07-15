function notesEdit(myNotes) {
  return `
    <div class="editNoteContainer">
      <input id="edit-title-${myNotes.id}" class="noteHeadline" type="text" value="${myNotes.title}">
      <textarea id="edit-content-${myNotes.id}" class="noteContent">${myNotes.content}</textarea>
      <div class="noteBottom">
        <p id="creation-${myNotes.id}" class="creationDate">${myNotes.time}</p>
        <div class="noteButtons">
          <button title="Close without saving" class="close" onclick="closeEditNote('${myNotes.id}')"></button>
          <button title="Save changes" class="save" onclick="saveNote('${myNotes.id}')"></button>
        </div>
      </div>
    </div>
  `;
}
