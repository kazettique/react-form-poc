import React, { ReactElement } from 'react';

// components
import Input from './Input';
import Select from './Select';

// interface Props {}

function HookForm(): ReactElement {
  return <div />;
}

HookForm.Input = Input;
HookForm.Select = Select;

export default HookForm;
