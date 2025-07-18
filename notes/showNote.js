async function renderNotes() {
  toggleClass(overlay, "d_none");
  try {
    await showNotes(displayCategory);
  } catch (error) {
    catchFetchingNotesError(error);
  } finally {
    toggleClass(overlay, "d_none");
  }
}

async function showNotes() {
  let myNotes = await getNotesCall();
  renderNotesToCategory(myNotes);
}

function renderNotesToCategory(myNotes) {
  cleanDiv(container);
  let filteredNotes = myNotes.filter((note) => note.category === displayCategory);
  if (!filteredNotes.length) {
    noNotesNotification();
  }
  prepareNotesForDisplay(filteredNotes);
}

function prepareNotesForDisplay(filteredNotes) {
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

function noNotesNotification() {
  container.innerHTML = noNotes();
}

function catchFetchingNotesError(error) {
  console.error("Failed to load notes:", error);
  container.innerHTML = "<p>Error loading notes.</p>";
}
