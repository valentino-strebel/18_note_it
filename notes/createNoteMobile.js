function openMobileCreateInterface() {
  toggleClass(overlay, "d_none");
  showCreationWindow();
}

function showCreationWindow() {
  getDivId("overlayContent").innerHTML = createNoteMobile();
  setVariablesMobile();
}

async function renderNewNoteMobile(myTitle, myContent) {
  let noteCreated = await prepareNewNote(myTitle, myContent);
  if (noteCreated) {
    deleteNoteInput();
    renderNotes();
  }
  toggleClass(overlay, "d_none");
}
