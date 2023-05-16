import { getNotesFromLocalStorage } from '../api/localStorage';
import { NextPage } from 'next'
import { useEffect, useId } from 'react';
import { useNotes } from '../hooks/useNotes';
import { useDispatch } from 'react-redux';
import { openToCreate, setNotes } from '../store/slices/notesSlice';
import { Paper, Grid, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Layout } from '../components/Layout';
import { Filters } from '../components/Filters'
import { NoteCard } from '../components/NoteCard';
import { NoteModal } from '../components/NoteModal';
import { NewNoteCard } from '../components/NewNoteCard';


const Home: NextPage = () => {

  const id = useId();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNotes(getNotesFromLocalStorage()))
  }, [])

  const { notesFiltered } = useNotes();

  return (
    <Layout>
      <Filters />
      <main style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Paper sx={{ height: '100%', width: '80vw', padding: 2 }} >
          <Grid container spacing={2}>
            {
              notesFiltered.map((note, idx) =>
                <Grid key={`${id}-${idx}`} item xs={12} sm={6} md={4} lg={3}>
                  <NoteCard note={note} />
                </Grid>
              )
            }
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <NewNoteCard />
            </Grid>

          </Grid>
          <Fab sx={{
            position: 'absolute',
            bottom: 16,
            right: 40,
          }}
            color='primary'
            onClick={() => dispatch(openToCreate())}
          >
            <AddIcon />
          </Fab>
        </Paper>
      </main>
      <NoteModal />
    </Layout>
  )
}

export default Home;
