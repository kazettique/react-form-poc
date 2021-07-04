import React, { ReactElement, ReactNode } from 'react';
import { Formik, Form as FormikForm } from 'formik';

// types
import * as Types from './types';

// components
import Input from './Input';

interface Props {
  initialValues: Types.InitialValues;
  onSubmit: Types.OnSubmit;
  children: ReactNode;
}

function Form(props: Props): ReactElement {
  const { initialValues, onSubmit, children } = props;

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <FormikForm>{children}</FormikForm>
    </Formik>
  );
}

Form.Input = Input;
// Form.Types = Types;

export default Form;
