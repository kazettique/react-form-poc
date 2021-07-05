import React, { ReactElement } from 'react';
import * as Yup from 'yup';

// types
import { Values, OnSubmit } from '../../components/Form/types';

// components
import Form from '../../components/Form';

type FieldType = {
  name: string;
  initialValue: string;
  validationSchema: any;
};

const INPUT_QUANTITY = 3;

export default function FormikTest(): ReactElement {
  // dummy fields
  const arr: FieldType[] = Array(INPUT_QUANTITY)
    .fill('')
    .map((_, index) => ({ name: `Input-No${index}`, initialValue: '', validationSchema: Yup.string().required() }));

  const initialValues: Values = arr.reduce((acc, item) => {
    return { ...acc, [item.name]: item.initialValue };
  }, {});

  const validationSchema = arr.reduce((acc, item) => {
    return { ...acc, [item.name]: item.validationSchema };
  }, {});

  const onSubmit: OnSubmit = (values, actions) => {
    actions.setSubmitting(true);
    console.log(`formik submit: `, values);

    actions.setSubmitting(false);
  };

  const options = [
    { value: 1, label: 'Red' },
    { value: 2, label: 'Blue' },
    { value: 3, label: 'Green' },
  ];

  return (
    <div style={{ background: 'lightgreen', height: '100%', width: '100%' }}>
      <Form initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <button type="submit">Submit</button>
        {arr.map((item) => (
          <Form.Input type={Form.Input.InputType.Text} key={item.name} fieldName={item.name} />
        ))}
        <Form.Select fieldName="helloSelect" options={options} />
      </Form>
    </div>
  );
}
