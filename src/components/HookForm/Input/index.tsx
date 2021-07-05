import React, { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import * as Types from '../types';

import ErrorMessage from '../ErrorMessage';

enum InputType {
  Text = 'text',
  Password = 'password',
  Number = 'number',
  File = 'file',
  Email = 'email',
  Color = 'color',
}

interface Props {
  fieldName: string;
  placeholder?: string;
  type?: InputType;
}

export default function Input(props: Props): ReactElement {
  const { fieldName: name, placeholder, type = InputType.Text } = props;

  const { register } = useFormContext();

  return (
    <div style={{ margin: 10 }}>
      <label htmlFor={name} style={{ marginRight: 10 }}>
        {name}
      </label>
      <input id={name} type={type} placeholder={placeholder} {...register(name)} />
      <ErrorMessage fieldName={name} />
    </div>
  );
}
