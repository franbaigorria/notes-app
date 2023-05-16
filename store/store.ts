import { configureStore } from '@reduxjs/toolkit'

//reducers
import notesSlice, { ModalInfoState } from './slices/notesSlice';
import filterNotesSlice, { FilterNotesState } from './slices/filterNotesSlice';

export default configureStore({
  reducer: {
    notesSlice,
    filterNotesSlice,
  },
})

export interface RootState {
  notesSlice: ModalInfoState,
  filterNotesSlice: FilterNotesState,
}