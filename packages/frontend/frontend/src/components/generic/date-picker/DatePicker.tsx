import Moment from 'moment';
import React, {useState} from 'react';
import ReactDatePicker from 'react-datepicker';
import {DatePickerProps} from './DatePicker.types';

export function DatePicker({defaultTimestamp, onChange}: DatePickerProps) {
  const [date, setDate] = useState(
    defaultTimestamp ? Moment.unix(defaultTimestamp).toDate() : new Date()
  );

  function onDayChange(day: Date) {
    setDate(day);
    onChange(Moment(day).unix());
  }

  return <ReactDatePicker selected={date} onChange={onDayChange} />;
}
