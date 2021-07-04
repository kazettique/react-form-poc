import React, { ChangeEvent, ReactElement } from 'react';
import { useFormikContext, useField } from 'formik';
import ErrorMessage from '../ErrorMessage';

interface Props {
  fieldName: string;
  // onChange?: any;
}

export default function Input(props: Props): ReactElement {
  const { fieldName: name } = props;

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
      <input id={name} type="text" name={name} onChange={onChange} value={field.value} />
      <ErrorMessage fieldName={name} />
    </div>
  );
}
