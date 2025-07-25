function openMobileCreateInterface() {
  toggleClass(overlay, "d_none");
  showCreationWindow();
}

function showCreationWindow() {
  getDivId("overlayContent").innerHTML = createNoteMobile();
  setVariablesMobile();
}

async function renderNewNoteMobile(myTitle, myContent) {
  let noteCreated = await prepareNewNoteMobile(myTitle, myContent);
  if (noteCreated) {
    deleteNoteInput(noteTitleMobile, noteContentMobile);
    renderNotesMobile();
  } else {
    return;
  }
}

async function prepareNewNoteMobile(myTitle, myContent) {
  let noteData = await newNoteData(myTitle, myContent);
  if (!noteData) {
    showErrorMessageMobile();
    return false;
  }
  let { noteTitle: title, noteContent: content } = noteData;
  await createNoteCall(title, content);
  return true;
}

async function renderNotesMobile() {
  cleanDiv(overlayContent);
  try {
    await showNotes(displayCategory);
  } catch (error) {
    catchFetchingNotesError(error);
  } finally {
    toggleClass(overlay, "d_none");
  }
}

function showErrorMessageMobile() {
  toggleClass(errorNoteMobile, "d_none");
  toggleClass(errorTitleMobile, "d_none");
  toggleClass(noteTitleMobile, "errorInput");
  toggleClass(noteContentMobile, "errorInput");
  createButtonMobile.disabled = true;
}

function removeErrorMessageMobile() {
  addClass(errorNoteMobile, "d_none");
  addClass(errorTitleMobile, "d_none");
  removeClass(noteTitleMobile, "errorInput");
  removeClass(noteContentMobile, "errorInput");
  createButtonMobile.disabled = false;
}
