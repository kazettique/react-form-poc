import React, { ReactElement } from 'react';

// types
import { InitialValues, OnSubmit } from '../../components/Form/types';

// components
import Form from '../../components/Form';

type FieldType = {
  name: string;
  initialValue: string;
};

const INPUT_QUANTITY = 100;

export default function FormikTest(): ReactElement {
  const arr: FieldType[] = Array(INPUT_QUANTITY)
    .fill('')
    .map((_, index) => ({ name: `Input-No${index}`, initialValue: '' }));

  const initialValues: InitialValues = arr.reduce((acc, item) => {
    return { ...acc, [item.name]: item.initialValue };
  }, {});

  const onSubmit: OnSubmit = (values, actions) => {
    actions.setSubmitting(true);
    console.log(`submit values: `, values);

    actions.setSubmitting(false);
  };

  return (
    <div>
      <Form initialValues={initialValues} onSubmit={onSubmit}>
        <button type="submit">Submit</button>
        {arr.map((item) => (
          <Form.Input key={item.name} fieldName={item.name} />
        ))}
      </Form>
    </div>
  );
}
