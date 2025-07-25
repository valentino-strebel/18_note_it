function createNoteMobile() {
  return `
    <div class="createNoteMobile">
      <div class="noteButtons" onclick="noBubble(event)">
        <button title="Close without saving" class="close" onclick="closeOverlay()"></button>
      </div>
      <input id="titleMobile" type="text" placeholder="Title" onfocus="removeErrorMessage()" />
      <div class="errorMessage">
        <p id="errorMessageTitleMobile" class="d_none">*Enter a Title</p>
      </div>
      <textarea id="contentMobile" placeholder="Note" onfocus="removeErrorMessage()"></textarea>
      <div class="errorMessage">
        <p id="errorMessageNoteMobile" class="d_none">*Enter a Note</p>
      </div>
      <div class="createButtonContainer">
        <button class="createButton" onclick="renderNewNoteMobile(noteTitleMobile, noteContentMobile)">
          Create
        </button>
      </div>
    </div>
  `;
}
