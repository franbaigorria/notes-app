import { INotes } from "../types/notesTypes";

export const saveToLocalStorage = (notes: INotes[]) => {
  localStorage.setItem('notes', JSON.stringify(notes));
}

export const getNotesFromLocalStorage = (): INotes[] => {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  return notes
}