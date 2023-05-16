import { FC, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { INotes } from '../types/notesTypes';
import { dateFormatter, timeFormatter } from '../helpers/dateHelper';
import { useDispatch } from 'react-redux';
import { deleteNote, openToEdit } from '../store/slices/notesSlice';

type NoteCardProps = {
  note: INotes
}

export const NoteCard: FC<NoteCardProps> = ({ note }) => {
  const dispatch = useDispatch()
  const [mouseOn, setMouseOn] = useState<boolean>(false);

  return (
    <Card sx={{ height: 330, minWidth: 235, cursor: 'pointer', paddingRight: 2, overflowWrap: 'break-word;' }} elevation={mouseOn ? 10 : 3}
      onMouseEnter={() => setMouseOn(true)} onMouseLeave={() => setMouseOn(false)} >
      <CardContent onClick={() => dispatch(openToEdit(note.id))}>
        <Typography sx={{ fontSize: 14 }} gutterBottom color='GrayText'>
          {dateFormatter(note.createDate)} {timeFormatter(note.createDate)}
        </Typography>
        <Typography>
          {note.type}
        </Typography>
        <Typography variant="h5" component="div" paddingBottom={1} fontWeight={'bold'} sx={{ height: 70 }}>
          {note.title.length > 25 ? `${note.title.slice(0, 25)}...` : note.title.length === 0 ? '-' : note.title}
        </Typography>
        <Typography variant="body2" sx={{ height: 110 }}>
          {note.description.length > 160 ? `${note.description.slice(0, 160)}...` : note.description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="delete" color={mouseOn ? 'error' : 'inherit'} onClick={() => dispatch(deleteNote(note.id))} >
          <Delete />
        </IconButton>
        <IconButton aria-label="edit" color={mouseOn ? 'primary' : 'inherit'} onClick={() => dispatch(openToEdit(note.id))}>
          <Edit />
        </IconButton>
      </CardActions>
    </Card >
  );
}
