import React, { ReactElement } from 'react';
import { ErrorMessage as ErrorMessageComponent } from 'formik';

interface Props {
  fieldName: string;
}

export default function ErrorMessage(props: Props): ReactElement {
  const { fieldName } = props;

  return (
    <ErrorMessageComponent name={fieldName}>
      {(message) => <div style={{ color: 'red' }}>{message}</div>}
    </ErrorMessageComponent>
  );
}
