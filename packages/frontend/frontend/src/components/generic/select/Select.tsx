import React from 'react';
import SelectBase from 'react-select';

export function Select(props: any) {
  return (
    <SelectBase
      {...props}
      styles={{
        control: (provided: any) => ({
          ...provided,
          color: 'black',
        }),
        input: (provided: any) => ({
          ...provided,
          color: 'black',
        }),
        singleValue: (provided: any) => ({
          ...provided,
          color: 'black',
        }),
        option: (provided: any) => ({
          ...provided,
          color: 'black',
        }),
      }}
    />
  );
}
