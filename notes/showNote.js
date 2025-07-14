async function showNotes() {
  let myNotes = await getNotesCall();
  showNoNotesNotification(myNotes);
  for (let index = 0; index < myNotes.length; index++) {
    let element = myNotes[index];
    console.log(element);
    renderNotesToCategory(element);
  }
}

function renderNotesToCategory(element) {
  switch (element.category) {
    case "active":
      document.getElementById("notesDisplay").innerHTML += notesDisplay(element);
      break;
    case "trash":
      document.getElementById("notesTrash").innerHTML += notesTrash(element);
      break;
    case "archive":
      document.getElementById("notesArchive").innerHTML += notesArchive(element);
      break;
  }
}

function cleanDisplayedNotes() {
  document.getElementById("notesDisplay").innerHTML = "";
  document.getElementById("notesArchive").innerHTML = "";
  document.getElementById("notesTrash").innerHTML = "";
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
  confirmOccurence(active, "notesDisplay");
  confirmOccurence(trash, "notesTrash");
  confirmOccurence(archive, "notesArchive");
}

function noNotesNotification(category) {
  document.getElementById(category).innerHTML = noNotes();
}

function confirmOccurence(count, category) {
  if (count === 0) {
    noNotesNotification(category);
  }
}
