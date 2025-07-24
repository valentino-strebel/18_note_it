/**
 * Fetches all notes from the server.
 *
 * @async
 * @returns {Promise<Array<Object>>} - An array of note objects, or an empty array if an error occurs.
 */
async function getNotesCall() {
  try {
    const response = await fetch(DATA_URL);
    if (!response.ok) throw new Error("Failed to fetch notes");
    const myNotes = await response.json();
    return myNotes;
  } catch (error) {
    console.error("Failed to fetch data", error);
    return []; // Return empty array to prevent undefined errors
  }
}

/**
 * Sends a POST request to create a new note.
 *
 * @async
 * @param {string} noteTitle - The title of the new note.
 * @param {string} noteContent - The content of the new note.
 * @returns {Promise<Object|undefined>} - The created note object, or undefined if the request fails.
 */
async function createNoteCall(noteTitle, noteContent) {
  try {
    const response = await fetch(DATA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: noteTitle,
        content: noteContent,
        category: "active",
        created: Date.now(),
      }),
    });
    if (!response.ok) throw new Error("Failed to create note");
    return await response.json(); // Return the created note (with id, timestamp)
  } catch (error) {
    console.error("Create note error:", error);
  }
}

/**
 * Sends a PATCH request to update a note's category (e.g., archive, trash, restore).
 *
 * @async
 * @param {string} noteId - The unique identifier of the note.
 * @param {string} noteCategory - The new category to assign to the note.
 * @returns {Promise<Object|undefined>} - The updated note object, or undefined if the request fails.
 */
async function statusNoteCall(noteId, noteCategory) {
  try {
    const response = await fetch(DATA_URL + `/${noteId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category: noteCategory,
      }),
    });
    if (!response.ok) throw new Error("Failed to update status");
    return await response.json();
  } catch (error) {
    console.error("Status update error:", error);
  }
}

/**
 * Sends a PATCH request to update a note's title and content.
 *
 * @async
 * @param {string} noteId - The unique identifier of the note.
 * @param {string} noteTitle - The updated title of the note.
 * @param {string} noteContent - The updated content of the note.
 * @returns {Promise<Object|undefined>} - The updated note object, or undefined if the request fails.
 */
async function updateNoteCall(noteId, noteTitle, noteContent) {
  try {
    const response = await fetch(DATA_URL + `/${noteId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: noteTitle,
        content: noteContent,
      }),
    });

    if (!response.ok) throw new Error("Failed to update note");
    return await response.json();
  } catch (error) {
    console.error("Update note error:", error);
  }
}

/**
 * Sends a DELETE request to permanently remove a note by its ID.
 *
 * @async
 * @param {string} noteId - The unique identifier of the note to delete.
 * @returns {Promise<boolean>} - Returns true if deletion succeeded, false if an error occurred.
 */
async function deleteNoteCall(noteId) {
  try {
    const response = await fetch(`${DATA_URL}/${noteId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete note");
    return true;
  } catch (error) {
    console.error("Delete error:", error);
    return false;
  }
}
