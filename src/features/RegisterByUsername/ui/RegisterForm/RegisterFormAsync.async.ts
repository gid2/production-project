import { FC, lazy } from 'react';
import { RegisterFormProps } from '../RegisterForm/RegisterForm.';

export const RegisterForm = lazy<FC<RegisterFormProps>>(() => import('./RegisterForm.'));
