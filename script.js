let displayCategory = "active";

function toggleOverlay() {
  document.getElementById("overlay").classList.toggle("d_none");
}

function formatDate(isoString) {
  let date = new Date(isoString);
  let day = String(date.getUTCDate()).padStart(2, "0");
  let month = String(date.getUTCMonth() + 1).padStart(2, "0");
  let year = date.getUTCFullYear();
  return `${day}.${month}.${year}`;
}

async function changeCategory(category) {
  toggleOverlay();
  displayCategory = category;
  await showNotes();
  toggleOverlay();
}
