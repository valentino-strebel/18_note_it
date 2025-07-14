// Get all notes from the server
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

// Create a new note
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
      }),
    });
    if (!response.ok) throw new Error("Failed to create note");
    return await response.json(); // Return the created note (with id, timestamp)
  } catch (error) {
    console.error("Create note error:", error);
  }
}

// Update category (archive, trash, restore)
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

// Update note title or content
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

// Permanently delete a note
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
