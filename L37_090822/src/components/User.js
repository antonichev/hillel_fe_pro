import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser, getUser } from './../utils/api';
import UserForm from './UserForm';

export default function User() {
  const { id } = useParams();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const redirect = useNavigate();

  const save = () => {
    updateUser(id, { firstName, lastName, phone }).then((res) =>
      redirect('/users'),
    );
  };

  const firstNameOnChange = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameOnChange = (e) => {
    setLastName(e.target.value);
  };

  const phoneOnChange = (e) => {
    setPhone(e.target.value);
  };

  useEffect(() => {
    getUser(id).then((res) => {
      setFirstName(res.data.firstName);
      setLastName(res.data.lastName);
      setPhone(res.data.phone);
    });

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <UserForm
        firstName={firstName}
        lastName={lastName}
        phone={phone}
        firstNameOnChange={firstNameOnChange}
        lastNameOnChange={lastNameOnChange}
        phoneOnChange={phoneOnChange}
        save={save}
      />
    </>
  );
}
