function createNoteMobile() {
  return ` <section class="createNote">
      <input id="titleMobile" type="text" placeholder="Title" onfocus="removeErrorMessage()" />
      <div class="errorMessage">
        <p id="errorMessageTitleMobile" class="d_none">*Enter a Title</p>
      </div>
      <textarea id="contentMobile" placeholder="Note" onfocus="removeErrorMessage()"></textarea>
      <div class="errorMessage">
        <p id="errorMessageNoteMobile" class="d_none">*Enter a Note</p>
      </div>
      <div class="createButtonContainer">
        <button id="createButtonMobile" onclick="renderNewNote()">Create</button>
      </div>
    </section>
    ;`;
}
