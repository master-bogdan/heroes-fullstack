import { UPDATE_CHARACTER } from './actionTypes';
import { FetchCharacters } from './readCharacters';

export const UpdateCharacter = (id, values) => {
    return dispatch => {
        fetch('http://localhost:3001/api/update', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({id, values})
            })
            .then(res => res.json())
            .then(dispatch({
                type: UPDATE_CHARACTER,
                payload: {id, values}
            }))
            .then(dispatch(FetchCharacters()))
            .catch(err => console.log(err));
    }
}
