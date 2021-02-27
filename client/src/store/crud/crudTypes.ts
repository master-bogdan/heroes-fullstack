export const READ_CHARACTERS = 'READ_CHARACTERS';
export const CREATE_CHARACTER = 'CREATE_CHARACTER';
export const UPDATE_CHARACTER = 'UPDATE_CHARACTER';
export const DELETE_CHARACTER = 'DELETE_CHARACTER';

export interface CrudState {
  data: ICharacter[]
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
  descr: string
}

interface SetCharactersAction {
  type: typeof READ_CHARACTERS
  payload: ICharacter[]
}

interface AddCharacterAction {
  type: typeof CREATE_CHARACTER
}

interface UpdateCharacterAction {
  type: typeof UPDATE_CHARACTER
}

interface DeleteCharacterAction {
  type: typeof DELETE_CHARACTER
}

export type CrudActions =
SetCharactersAction |
AddCharacterAction |
UpdateCharacterAction |
DeleteCharacterAction;
