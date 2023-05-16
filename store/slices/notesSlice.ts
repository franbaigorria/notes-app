import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INotes } from '../../types/notesTypes';
import { saveToLocalStorage } from '../../api/localStorage';

export interface ModalInfoState {
  openModal: boolean,
  operation: { id: string, act: 'create' | 'edit' | '' }
  notes: INotes[] | null,
}

const initialState: ModalInfoState = {
  openModal: false,
  operation: { id: '', act: '' },
  notes: [],
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNotes: (state: ModalInfoState, action: PayloadAction<INotes[]>) => { state.notes = action.payload },
    openToCreate: (state: ModalInfoState) => { state.openModal = true, state.operation = { ...state.operation, act: 'create' } },
    openToEdit: (state, action: PayloadAction<string>) => {
      state.openModal = true;
      state.operation = { id: action.payload, act: 'edit' };
    },
    close: (state: ModalInfoState) => {
      state.openModal = false, state.operation = { id: '', act: '' }
    },
    createNote: (state: ModalInfoState, action: PayloadAction<INotes>) => {
      state.notes = [action.payload, ...state.notes];
      state.openModal = false;
      saveToLocalStorage(state.notes);
    },
    editNote: (state: ModalInfoState, action: PayloadAction<INotes>) => {
      const noteToEdit = state.notes.find(note => note.id === action.payload.id);
      noteToEdit.title = action.payload.title;
      noteToEdit.type = action.payload.type;
      noteToEdit.description = action.payload.description;
      state.openModal = false;
      state.operation = { id: '', act: '' };
      saveToLocalStorage(state.notes);
    },
    deleteNote: (state: ModalInfoState, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
      saveToLocalStorage(state.notes);
    }
  },
});

export const { setNotes, createNote, editNote, deleteNote, openToCreate, openToEdit, close } = notesSlice.actions;
export default notesSlice.reducer;