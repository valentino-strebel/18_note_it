async function showNotes() {
  let myNotes = await getNotesCall();
  for (let index = 0; index < myNotes.length; index++) {
    let element = myNotes[index];
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
  cleanDisplayedNotes();
  await showNotes();
}
