import { useId, FC } from 'react';
import { RootState } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { close, createNote, editNote } from "../store/slices/notesSlice";
import { useFormNote } from '../hooks/useFormNote';
import { Save, Close } from '@mui/icons-material';
import { Box, Modal, TextField, MenuItem, IconButton, Grid, Tooltip } from '@mui/material';
import { INotes } from '../types/notesTypes';
import { newISOString } from '../helpers/dateHelper';
import { typesNote } from '../constants/notesConstans';



export const NoteModal: FC = () => {
  const id = useId()
  const { openModal, operation, notes } = useSelector((state: RootState) => state.notesSlice)

  const { formValues, handleInputChange } = useFormNote()

  const dispatch = useDispatch();

  const handleSave = (): void => {
    if (operation.act === 'create') {
      const noteInfo: INotes = {
        id: `${newISOString(new Date)}-${id}`,
        createDate: newISOString(new Date),
        ...formValues,
      }
      dispatch(createNote(noteInfo))
    } else {
      const noteInfo: INotes = {
        ...getNoteToEdit(),
        ...formValues,
      }
      dispatch(editNote(noteInfo))
    }
  }

  const getNoteToEdit = (): INotes => {
    return notes.find(note => note.id === operation.id)
  }

  return (
    <Modal
      open={openModal}
      onClose={() => dispatch(close())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <TextField
          name='title'
          value={formValues.title}
          autoFocus
          label="Título"
          variant="standard"
          onChange={handleInputChange}
          sx={{ paddingBottom: 5 }}
        />
        <TextField
          name='type'
          value={formValues.type}
          select
          label="Tipo de nota"
          variant="standard"
          onChange={handleInputChange}
          sx={{ paddingBottom: 5 }}
        >
          {typesNote.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name='description'
          value={formValues.description}
          label="Descripción"
          multiline
          rows={4}
          variant="standard"
          onChange={handleInputChange}
          sx={{ paddingBottom: 5 }}
        />
        <Grid container justifyContent={'end'}>
          <Tooltip title='Cancelar'>
            <IconButton aria-label="edit" onClick={() => dispatch(close())} color={'error'}>
              <Close />
            </IconButton>
          </Tooltip>
          <Tooltip title='Guardar'>
            <IconButton aria-label="edit" onClick={handleSave} color={'success'}>
              <Save />
            </IconButton>
          </Tooltip>
        </Grid>
      </Box>
    </Modal >
  )
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
};
