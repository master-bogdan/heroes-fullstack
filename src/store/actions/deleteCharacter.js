import { DELETE_CHARACTER } from './actionTypes';

export const DeleteCharacter = (id) => {
    return dispatch => { fetch('http://localhost:3001/api/delete', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(id)
        })
        .then(res => res.json())
        .then(dispatch({
            type: DELETE_CHARACTER,
            payload: id
        }))
        .catch(err => console.log(err));
    }
}