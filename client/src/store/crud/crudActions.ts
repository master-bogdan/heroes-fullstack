import {
  READ_CHARACTERS,
  CREATE_CHARACTER,
  UPDATE_CHARACTER,
  DELETE_CHARACTER,
  CrudActions,
  ICharacter,
  ICreateCharacter,
} from './crudTypes';
import axios from 'axios';
import { AppThunk } from 'store';

export const fetchCharactersAction = (data: ICharacter[]): CrudActions => ({
  type: READ_CHARACTERS,
  payload: data,
});

export const createCharacterAction = (data: ICharacter[]): CrudActions => ({
  type: CREATE_CHARACTER,
  payload: data,
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
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const UpdateCharacter = (id: any, values: any) => (dispatch: any) => {
  fetch('http://localhost:3001/api/update', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, values }),
  })
    .then((res) => res.json())
    .then(dispatch({
      type: UPDATE_CHARACTER,
      payload: { id, values },
    }))
    .then(dispatch(FetchCharacters()))
    .catch((err) => console.log(err));
};

export const DeleteCharacter = (id: any) => (dispatch: any) => {
  fetch('http://localhost:3001/api/delete', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(id),
  })
    .then((res) => res.json())
    .then(dispatch({
      type: DELETE_CHARACTER,
      payload: id,
    }))
    .catch((err) => console.log(err));
};
