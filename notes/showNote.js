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
        container.innerHTML += notesDisplay(note);
        break;
      case "trash":
        container.innerHTML += notesTrash(note);
        break;
      case "archive":
        container.innerHTML += notesArchive(note);
        break;
    }
  });
}

function cleanDisplayedNotes() {
  container.innerHTML = "";
}

function noNotesNotification() {
  container.innerHTML = noNotes();
}
