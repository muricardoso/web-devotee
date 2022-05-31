import { MErrors } from "../../model/errors/errors.model";

export const INIT_DATA_ERRORS: MErrors = {
  showError: false,
  menssage: ''
}

export enum ErrorsEnum {
  REQUIRED = 'required',
  SPECIAL_CHARACTERES = 'containSpecialCharacters',
  FORMAT_INVALID = 'formatInvalid'
}
