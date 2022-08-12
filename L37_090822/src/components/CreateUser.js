import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "./UserForm";
import { addUser } from "../utils/api";

export default function CreateUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const firstNameOnChange = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameOnChange = (e) => {
    setLastName(e.target.value);
  };

  const phoneOnChange = (e) => {
    setPhone(e.target.value);
  };

  const redirect = useNavigate();

  const save = () => {
    addUser({ firstName, lastName, phone }).then((res) => redirect("/users"));
  };

  return (
    <UserForm
      firstName={firstName}
      lastName={lastName}
      phone={phone}
      firstNameOnChange={firstNameOnChange}
      lastNameOnChange={lastNameOnChange}
      phoneOnChange={phoneOnChange}
      save={save}
    />
  );
}
