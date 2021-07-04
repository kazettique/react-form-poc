import React, { ChangeEvent, ReactElement } from 'react';
import { useFormikContext, useField } from 'formik';
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
  // onChange?: any;
  placeholder?: string;
  type?: InputType;
}

function Input(props: Props): ReactElement {
  const { fieldName: name, placeholder, type = InputType.Text } = props;

  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    // const numberRex = /^[0-9]*$/g;
    // const isNumber = value.match(numberRex);

    setFieldValue(field.name, value);
    // onChangeProps(value);
  };

  return (
    <div style={{ margin: 10 }}>
      <label htmlFor={name} style={{ marginRight: 10 }}>
        {name}
      </label>
      <input id={name} type={type} name={name} onChange={onChange} value={field.value} placeholder={placeholder} />
      <ErrorMessage fieldName={name} />
    </div>
  );
}

Input.InputType = InputType;

export default Input;
