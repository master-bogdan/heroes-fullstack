import {
  READ_CHARACTERS,
  CREATE_CHARACTER,
  UPDATE_CHARACTER,
  DELETE_CHARACTER,
  CrudActions,
  ICharacter,
  ICreateCharacter,
  UpdateFormData,
} from './crudTypes';
import axios from 'axios';
import { AppThunk } from 'store';

export const fetchCharactersAction = (data: ICharacter[]): CrudActions => ({
  type: READ_CHARACTERS,
  payload: data,
});

export const createCharacterAction = (): CrudActions => ({
  type: CREATE_CHARACTER,
});

export const updateCharacterAction = (): CrudActions => ({
  type: UPDATE_CHARACTER,
});

export const deleteCharacterAction = (): CrudActions => ({
  type: DELETE_CHARACTER,
});

export const FetchCharacters = (): AppThunk => async (dispatch) => {
  try {
    const { data } = await axios.get('/api');
    dispatch(fetchCharactersAction(data));
  } catch (error) {
    console.log(error);
  }
};

export const CreateCharacter = (char: ICreateCharacter): AppThunk => async (dispatch) => {
  try {
    const { data } = await axios.post('/api', {
      char,
    });
    dispatch(createCharacterAction());
    dispatch(FetchCharacters());
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const UpdateCharacter = (
  id: string,
  values: UpdateFormData,
): AppThunk => async (dispatch) => {
  try {
    const { data } = await axios.put('/api', {
      id,
      char: { ...values },
    });
    dispatch(updateCharacterAction());
    dispatch(FetchCharacters());
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const DeleteCharacter = (id: string): AppThunk => async (dispatch) => {
  try {
    const { data } = await axios.delete('/api', { data: { id } });
    dispatch(FetchCharacters());
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
