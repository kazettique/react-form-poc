import { FormikHelpers } from 'formik';

export type InitialValues = {
  [key: string]: any;
};

export type OnSubmit = (values: InitialValues, actions: FormikHelpers<InitialValues>) => void;
