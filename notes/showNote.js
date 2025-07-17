async function renderNotes() {
  toggleOverlay();
  cleanDisplayedNotes();
  await showNotes();
  toggleOverlay();
}

async function showNotes() {
  let myNotes = await getNotesCall();
  renderNotesToCategory(myNotes);
}

function renderNotesToCategory(myNotes) {
  cleanDisplayedNotes();
  let filteredNotes = myNotes.filter((note) => note.category === displayCategory);
  ifNoNotes(filteredNotes);
  ifNotesAvailable(filteredNotes);
}

function ifNoNotes(filteredNotes) {
  if (filteredNotes.length === 0) {
    noNotesNotification();
    return;
  }
}

function ifNotesAvailable(filteredNotes) {
  filteredNotes.forEach((note) => {
    switch (displayCategory) {
      case "active":
        createNoteBasic(note, notesActive);
        break;
      case "trash":
        createNoteBasic(note, notesTrash);
        break;
      case "archive":
        createNoteBasic(note, notesArchive);
        break;
    }
  });
}

function createNoteBasic(note, buttonCategory) {
  container.innerHTML += notesDisplay(note);
  renderNoteWithButtons(note, buttonCategory);
}

function renderNoteWithButtons(note, buttonCategory) {
  document.getElementById(`note-buttons-${note.id}`).innerHTML = buttonCategory(note);
}

function cleanDisplayedNotes() {
  container.innerHTML = "";
}

function noNotesNotification() {
  container.innerHTML = noNotes();
}
