export const CRUD_CHARACTERS_FETCH = 'CRUD_CHARACTERS_FETCH';
export const CRUD_LOADING = 'CRUD_CHARACTERS_LOADING';
export const CRUD_CHARACTER_CREATE = 'CRUD_CHARACTER_CREATE';
export const CRUD_CHARACTER_UPDATE = 'CRUD_CHARACTER_UPDATE';
export const CRUD_CHARACTER_DELETE = 'CRUD_CHARACTER_DELETE';
export interface CrudState {
  characters: ICharacter[]
  isLoading: boolean
}

export interface ICharacter {
  _id: string
  title: string
  description: string
  image: string
}

export interface ICreateCharacter {
  title: string
  description: string
  image: string
}

export type UpdateFormData = {
  img: string
  title: string
  description: string
}

interface SetLoadingAction {
  type: typeof CRUD_LOADING;
  payload: boolean;
}
interface SetCharactersAction {
  type: typeof CRUD_CHARACTERS_FETCH;
  payload: ICharacter[];
}

interface AddCharacterAction {
  type: typeof CRUD_CHARACTER_CREATE;
  payload: ICharacter;
}

interface UpdateCharacterAction {
  type: typeof CRUD_CHARACTER_UPDATE;
  payload: ICharacter;
}

interface DeleteCharacterAction {
  type: typeof CRUD_CHARACTER_DELETE;
  payload: string;
}

export type CrudActions =
SetLoadingAction |
SetCharactersAction |
AddCharacterAction |
UpdateCharacterAction |
DeleteCharacterAction;
