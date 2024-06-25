import { PhotoType } from './CommonTypes';

export type PatientType = {
  id: string
  name: string
  email: string
  password?: string
  photo: PhotoType
  telephone: string
  birthDate: string
};
