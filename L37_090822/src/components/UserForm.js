import React from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
    <div className='flex-container'>
      <form noValidate autoComplete='off' onSubmit={(e) => e.preventDefault()}>
        <TextField
          label='First name'
          variant='outlined'
          value={firstName}
          onChange={firstNameOnChange}
          required
          sx={{ marginRight: 10 + "px" }}
        />
        <TextField
          label='Last name'
          variant='outlined'
          value={lastName}
          onChange={lastNameOnChange}
          required
          sx={{ marginRight: 10 + "px" }}
        />
        <TextField
          label='Phone'
          variant='outlined'
          value={phone}
          onChange={phoneOnChange}
          required
        />
        <div className='flex-container'>
          <Button sx={{ margin: 10 + "px" }} variant='contained' onClick={save}>
            Save record
          </Button>
          <Button
            sx={{ margin: 10 + "px" }}
            variant='contained'
            onClick={() => redirect("/users")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
