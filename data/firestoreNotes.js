import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

const NOTES_COLLECTION = "notes";

export async function getNotesCall() {
  try {
    const notesSnapshot = await getDocs(collection(db, NOTES_COLLECTION));
    return notesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Failed to fetch notes:", error);
    return [];
  }
}

export async function createNoteCall(noteTitle, noteContent) {
  try {
    const now = new Date().toISOString();
    const docRef = await addDoc(collection(db, NOTES_COLLECTION), {
      title: noteTitle,
      content: noteContent,
      created: now,
      category: "active",
    });
    return { id: docRef.id, title: noteTitle, content: noteContent, created: now, category: "active" };
  } catch (error) {
    console.error("Create note error:", error);
  }
}

export async function statusNoteCall(noteId, noteCategory) {
  try {
    const noteRef = doc(db, NOTES_COLLECTION, noteId);
    await updateDoc(noteRef, { category: noteCategory });
  } catch (error) {
    console.error("Status update error:", error);
  }
}

export async function updateNoteCall(noteId, noteTitle, noteContent) {
  try {
    const noteRef = doc(db, NOTES_COLLECTION, noteId);
    await updateDoc(noteRef, { title: noteTitle, content: noteContent });
  } catch (error) {
    console.error("Update note error:", error);
  }
}

export async function deleteNoteCall(noteId) {
  try {
    const noteRef = doc(db, NOTES_COLLECTION, noteId);
    await deleteDoc(noteRef);
    return true;
  } catch (error) {
    console.error("Delete error:", error);
    return false;
  }
}
