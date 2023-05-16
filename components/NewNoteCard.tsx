import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { openToCreate } from '../store/slices/notesSlice';
import { Card, Typography } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

export const NewNoteCard: FC = () => {
  const dispatch = useDispatch()
  const [mouseOn, setMouseOn] = useState<boolean>(false);

  return (
    <Card sx={{ height: 330, minWidth: 235, cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} elevation={mouseOn ? 10 : 3}
      onMouseEnter={() => setMouseOn(true)} onMouseLeave={() => setMouseOn(false)} onClick={() => dispatch(openToCreate())}>
      <AddCircleOutlinedIcon sx={{ width: 70, height: 70 }} color={mouseOn ? 'primary' : 'inherit'} />
      <Typography>Crear Nota</Typography>
    </Card >
  );
}
