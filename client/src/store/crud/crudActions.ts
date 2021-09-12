import {
  CRUD_CHARACTERS_FETCH,
  CRUD_LOADING,
  CRUD_CHARACTER_CREATE,
  CRUD_CHARACTER_UPDATE,
  CRUD_CHARACTER_DELETE,
  CrudActions,
  ICharacter,
  ICreateCharacter,
  UpdateFormData,
} from './crudTypes';
import axios from 'axios';
import { AppThunk } from 'store';
import { API } from 'services/api';

export const loadingCharactersAction = (payload: boolean): CrudActions => ({
  type: CRUD_LOADING,
  payload,
});

export const fetchCharactersAction = (payload: ICharacter[]): CrudActions => ({
  type: CRUD_CHARACTERS_FETCH,
  payload,
});

export const createCharacterAction = (payload: ICharacter): CrudActions => ({
  type: CRUD_CHARACTER_CREATE,
  payload,
});

export const updateCharacterAction = (payload: ICharacter): CrudActions => ({
  type: CRUD_CHARACTER_UPDATE,
  payload,
});

export const deleteCharacterAction = (payload: string): CrudActions => ({
  type: CRUD_CHARACTER_DELETE,
  payload,
});

export const FetchCharacters = (): AppThunk => async (dispatch) => {
  try {
    dispatch(loadingCharactersAction(true));
    const token = await localStorage.getItem('authToken');

    const { data } = await API.get('/api', {
      headers: {
        'Authorization': `${token}`,
      },
    });
    dispatch(fetchCharactersAction(data));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(loadingCharactersAction(false));
  }
};

export const CreateCharacter = (char: ICreateCharacter): AppThunk => async (dispatch) => {
  try {
    const token = await localStorage.getItem('authToken');

    const { data } = await API.post('/api', { char },
      {
        headers: {
          'Authorization': `${token}`,
        },
      });
    // dispatch(createCharacterAction());
    dispatch(FetchCharacters());
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const UpdateCharacter = (
  id: string,
  values: UpdateFormData,
): AppThunk => async (dispatch) => {
  try {
    const token = await localStorage.getItem('authToken');

    const { data } = await axios.put(process.env.REACT_APP_URL,
      {
        id,
        char: { ...values },
      },
      {
        headers: {
          'Authorization': `${token}`,
        },
      });
    // dispatch(updateCharacterAction());
    dispatch(FetchCharacters());
  } catch (error) {
    console.log(error);
  }
};

export const DeleteCharacter = (id: string): AppThunk => async (dispatch) => {
  try {
    const token = await localStorage.getItem('authToken');

    const { data } = await axios.delete(process.env.REACT_APP_URL,
      {
        data: { id },
        headers: {
          'Authorization': `${token}`,
        },
      });
    dispatch(FetchCharacters());
  } catch (error) {
    console.log(error);
  }
};
