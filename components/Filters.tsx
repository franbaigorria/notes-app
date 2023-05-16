import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterTitle, setFilterType } from '../store/slices/filterNotesSlice';
import { FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Paper, Select, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { typesNote } from '../constants/notesConstans';

export const Filters: FC = () => {
  const dispatch = useDispatch();

  return (
    <main style={{ display: 'flex', justifyContent: 'center', width: '100%', paddingBottom: 10 }}>
      <Paper sx={{ width: '80vw', padding: 2, display: 'flex', justifyContent: 'center' }}>
        <Grid container justifyContent={'center'} alignItems={'center'} sx={{ maxWidth: 850 }}>
          <Typography>Filtrar nota:</Typography>
          <Grid item xs={4}>
            <FormControl sx={{ m: 1, maxWidth: '25ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Título</InputLabel>
              <OutlinedInput
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setFilterTitle(e.target.value))}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                defaultValue={''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setFilterType(e.target.value))}
              >
                <MenuItem value={''} >
                  -
                </MenuItem>
                {typesNote.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
    </main >
  )
}
