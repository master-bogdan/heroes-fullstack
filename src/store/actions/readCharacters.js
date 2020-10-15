import { READ_CHARACTERS } from './actionTypes';

export const ReadCharacters = (data) => {
    return {
        type: READ_CHARACTERS,
        payload: data
    }
}

export const FetchCharacters = () => {
    return dispatch => {
        fetch('http://localhost:3001/api/data')
            .then((res) => res.json())
            .then((data) => 
                dispatch(ReadCharacters(data)))
            .catch((err) => console.log(err));
    };
}