import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store/store";
import { INotes } from "../types/notesTypes"

export const useNotes = (): { notesFiltered: INotes[] } => {
  const { notes } = useSelector((state: RootState) => state.notesSlice)
  const { title, type } = useSelector((state: RootState) => state.filterNotesSlice)
  const [notesFiltered, setNotesFiltered] = useState<INotes[]>(notes)


  useEffect(() => {
    setNotesFiltered(notes);
    handleFilter();
  }, [notes, title, type])

  const handleFilter = (): void => {
    if (title && type) {
      setNotesFiltered(notes.filter(note => note.title.toUpperCase().includes(title.toUpperCase()) && note.type === type))
      return
    } else if (title) {
      setNotesFiltered(notes.filter(note => note.title.includes(title)))
    } else if (type) {
      setNotesFiltered(notes.filter(note => note.type === type))
    }
  }

  return { notesFiltered }

}