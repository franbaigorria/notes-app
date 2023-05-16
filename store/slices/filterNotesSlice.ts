import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface FilterNotesState {
  title: string,
  type: string,
}

const initialState = {
  title: '',
  type: ''
}

export const filterNotesSlice = createSlice({
  name: 'filterNotes',
  initialState,
  reducers: {
    setFilterTitle: (state: FilterNotesState, action: PayloadAction<string>) => { state.title = action.payload },
    setFilterType: (state: FilterNotesState, action: PayloadAction<string>) => { state.type = action.payload },
  },
});

export const { setFilterTitle, setFilterType } = filterNotesSlice.actions;
export default filterNotesSlice.reducer;