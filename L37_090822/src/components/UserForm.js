import React from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function UserForm({
  firstName,
  lastName,
  phone,
  firstNameOnChange,
  lastNameOnChange,
  phoneOnChange,
  save,
}) {
  const redirect = useNavigate();

  return (
    <form noValidate autoComplete='off' onSubmit={(e) => e.preventDefault()}>
      <TextField
        label='First name'
        variant='outlined'
        value={firstName}
        onChange={firstNameOnChange}
        required
      />
      <TextField
        label='Last name'
        variant='outlined'
        value={lastName}
        onChange={lastNameOnChange}
        required
      />
      <TextField
        label='Phone'
        variant='outlined'
        value={phone}
        onChange={phoneOnChange}
        required
      />
      <Button variant='contained' onClick={save}>
        Save record
      </Button>
      <Button variant='contained' onClick={() => redirect('/users')}>
        Cancel
      </Button>
    </form>
  );
}
