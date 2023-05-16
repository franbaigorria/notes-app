import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { TypesNote } from '../types/notesTypes';

export type initialFormType = {
  title: string,
  description: string,
  type: TypesNote,
}
const initialForm: initialFormType = {
  title: '',
  description: '',
  type: 'tareas de casa',
}

export const useFormNote = (): { formValues: initialFormType, handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void } => {
  const { operation, notes } = useSelector((state: RootState) => state.notesSlice)

  const [formValues, setFormValues] = useState<initialFormType>(initialForm);

  useEffect(() => {
    if (operation.act === 'edit') {
      const noteToEdit = notes.find(note => note.id === operation.id)
      setFormValues({
        title: noteToEdit.title,
        description: noteToEdit.description,
        type: noteToEdit.type,
      })
    } else setFormValues(initialForm)
  }, [operation])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  return { formValues, handleInputChange };
};