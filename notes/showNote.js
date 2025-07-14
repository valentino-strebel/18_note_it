async function showNotes() {
  let myNotes = await getNotesCall();
  renderNotesToCategory(myNotes);
}

function renderNotesToCategory(notesArray) {
  let container = document.getElementById("notesDisplay");
  container.innerHTML = "";
  let filteredNotes = notesArray.filter((note) => note.category === displayCategory);
  if (filteredNotes.length === 0) {
    noNotesNotification();
    return;
  }
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
  document.getElementById("notesDisplay").innerHTML = "";
}

function buttonStatus(status) {
  document.getElementById("createButton").disabled = status;
}

async function renderNotes() {
  toggleOverlay();
  cleanDisplayedNotes();
  await showNotes();
  toggleOverlay();
}

function countCategories(myNotes) {
  let active = 0;
  let trash = 0;
  let archive = 0;
  for (let note of myNotes) {
    if (note.category === "active") {
      active++;
    } else if (note.category === "trash") {
      trash++;
    } else if (note.category === "archive") {
      archive++;
    }
  }
  return { active, trash, archive };
}

function showNoNotesNotification(myNotes) {
  let { active, trash, archive } = countCategories(myNotes);
  confirmOccurence(active);
  confirmOccurence(trash);
  confirmOccurence(archive);
}

function noNotesNotification() {
  document.getElementById("notesDisplay").innerHTML = noNotes();
}

function confirmOccurence(count) {
  if (count === 0) {
    noNotesNotification();
  }
}
