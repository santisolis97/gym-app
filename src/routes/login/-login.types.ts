import { RegisterOptions } from 'react-hook-form';
import * as yup from 'yup';
export type LoginData = {
  email: string;
  password: string;
};

export const defaultLoginValues = {
  email: '',
  password: '',
};

export const emailValidation: RegisterOptions<LoginData, 'email'> = {
  required: true,
  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
};
export const passwordValidation: RegisterOptions<LoginData, 'password'> = {
  required: true,
  minLength: 6,
};
