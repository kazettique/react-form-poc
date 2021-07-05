import React, { ReactElement } from 'react';
import * as Yup from 'yup';

// components
import HookForm from '../../components/HookForm';

type Values = {
  [key: string]: any;
};

type FieldType = {
  name: string;
  initialValue: string;
  validationSchema: any;
};

const INPUT_QUANTITY = 3;

// dummy fields
const arr: FieldType[] = Array(INPUT_QUANTITY)
  .fill('')
  .map((_, index) => ({ name: `Input-No${index}`, initialValue: '', validationSchema: Yup.string().required() }));

const defaultValues: Values = arr.reduce((acc, item) => {
  return { ...acc, [item.name]: item.initialValue };
}, {});

const validationSchema = arr.reduce((acc, item) => {
  return { ...acc, [item.name]: item.validationSchema };
}, {});

export default function RHFTest(): ReactElement {
  const onSubmit = (data: any) => console.log('react-hook-form submit: ', data);

  const options = [
    { value: 1, label: 'Red' },
    { value: 2, label: 'Blue' },
    { value: 3, label: 'Green' },
  ];

  return (
    <div style={{ background: 'lightblue', width: '100%', height: '100%' }}>
      <HookForm defaultValues={defaultValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <button type="submit">Submit</button>
        {arr.map((item) => (
          <HookForm.Input key={item.name} fieldName={item.name} placeholder="" />
        ))}
        <HookForm.Select fieldName="color" options={options} />
      </HookForm>
    </div>
  );
}
