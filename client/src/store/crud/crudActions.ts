import {
  READ_CHARACTERS,
  CREATE_CHARACTER,
  UPDATE_CHARACTER,
  DELETE_CHARACTER,
} from './crudTypes';

export const ReadCharacters = (data: any) => ({
  type: READ_CHARACTERS,
  payload: data,
});

export const FetchCharacters = () => (dispatch: any) => {
  fetch('http://localhost:3001/api/data')
    .then((res) => res.json())
    .then((data) => dispatch(ReadCharacters(data)))
    .catch((err) => console.log(err));
};

export const CreateCharacter = () => ({
  type: CREATE_CHARACTER,
});

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
