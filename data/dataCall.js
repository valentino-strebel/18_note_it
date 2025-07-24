/**
 * Fetches all notes from the server.
 *
 * @async
 * @returns {Promise<Array<Object>>} - An array of note objects, or an empty array if an error occurs.
 */
async function getNotesCall(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Fetch failed for ${url}`);
    const myNotes = await response.json();
    return myNotes;
  } catch (error) {
    console.error(`Error fetching notes from ${url}`, error);
    return null;
  }
}

/**
 * Attempts to fetch notes data from one or more data source URLs in order of priority.
 *
 * @async
 * @function notesApiCall
 * @returns {Promise<Array>} A promise that resolves to an array of note objects.
 *
 * The function:
 * - Tries to fetch from a primary data source (`DATA_URL + ".json"`).
 * - If that fails, it attempts a fallback data source (`DATA_URL_1`).
 * - Returns the notes data from the first successful fetch.
 * - If all fetch attempts fail, it logs an error and returns an empty array.
 *
 * Depends on:
 * - `getNotesCall(url)`: A helper function that performs a single fetch and handles errors.
 *
 * Notes:
 * - The returned array will be empty if no source is available or if all fetches fail.
 * - Ensure `getNotesCall` returns `null` or a falsy value on failure so fallback works correctly.
 */
async function notesApiCall() {
  const urls = [DATA_URL + ".json", DATA_URL_1];
  for (const url of urls) {
    const notes = await getNotesCall(url);
    if (notes) return notes;
  }
  console.error("All data sources failed. Returning empty notes.");
  return [];
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
    const response = await fetch(DATA_URL + ".json", {
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
    const response = await fetch(DATA_URL + `/${noteId}.json`, {
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
    const response = await fetch(DATA_URL + `/${noteId}.json`, {
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
    const response = await fetch(`${DATA_URL}/${noteId}.json`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete note");
    return true;
  } catch (error) {
    console.error("Delete error:", error);
    return false;
  }
}
