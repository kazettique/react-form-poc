import React, { ReactElement, ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage';

interface Props {
  fieldName: string;
  options: OptionType[];
  placeholder?: string;
}

type OptionType = {
  value: string | number;
  label: string;
};

export default function Select(props: Props): ReactElement {
  const { fieldName: name, options, placeholder } = props;

  const { register } = useFormContext();

  return (
    <div style={{ margin: 10 }}>
      <label htmlFor={name} style={{ marginRight: 10 }}>
        {name}
      </label>
      <select id={name} placeholder={placeholder} {...register(name)}>
        {options.length > 0 &&
          options.map((item: OptionType) => {
            return (
              <option key={`${item.label}-${item.label}`} value={item.value}>
                {item.label}
              </option>
            );
          })}
      </select>
      <ErrorMessage fieldName={name} />
    </div>
  );
}
