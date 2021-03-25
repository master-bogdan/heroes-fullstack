import {
  READ_CHARACTERS,
  LOADING_CHARACTERS,
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

export const loadingCharactersAction = (data: boolean): CrudActions => ({
  type: LOADING_CHARACTERS,
  payload: data,
});

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
    dispatch(loadingCharactersAction(true));
    const { data } = await axios.get(process.env.REACT_APP_URL);
    dispatch(fetchCharactersAction(data));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(loadingCharactersAction(false));
  }
};

export const CreateCharacter = (char: ICreateCharacter): AppThunk => async (dispatch) => {
  try {
    const { data } = await axios.post(process.env.REACT_APP_URL, {
      char,
    });
    dispatch(createCharacterAction());
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
    const { data } = await axios.put(process.env.REACT_APP_URL, {
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
    const { data } = await axios.delete(process.env.REACT_APP_URL, { data: { id } });
    dispatch(FetchCharacters());
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
