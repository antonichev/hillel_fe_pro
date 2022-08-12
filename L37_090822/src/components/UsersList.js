import React, { useState, useEffect } from "react";
import { getUsers, removeUser } from "./../utils/api";
import { useNavigate } from "react-router-dom";
import QuestionDialog from "./QuestionDialog";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [delId, setDelId] = useState(undefined);
  const redirect = useNavigate();

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res.data);
    });
  }, [showDialog]);

  const handleTrClick = (id) => {
    redirect(`/user/${id}`);
  };

  const remove = () => {
    removeUser(delId).then((res) => setShowDialog(false));
  };

  const handleDelClick = (e, id) => {
    e.stopPropagation();

    setShowDialog(true);
    setDelId(id);
  };

  return (
    <>
      <QuestionDialog
        open={showDialog}
        handleCloseNo={() => setShowDialog(false)}
        handleCloseYes={remove}
      />
      <div className='flex-container'>
        <Button variant='contained' onClick={() => redirect("/user/create")}>
          Add new user
        </Button>
      </div>
      <hr />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>ID</TableCell>
              <TableCell align='left'>First Name</TableCell>
              <TableCell align='left'>Last Name</TableCell>
              <TableCell align='left'>Phone</TableCell>
              <TableCell align='center'>Delete record</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={handleTrClick.bind(null, user.id)}
              >
                <TableCell align='center'>{user.id}</TableCell>
                <TableCell align='left'>{user.firstName}</TableCell>
                <TableCell align='left'>{user.lastName}</TableCell>
                <TableCell align='left'>{user.phone}</TableCell>
                <TableCell align='center'>
                  <Button
                    variant='contained'
                    onClick={(e) => handleDelClick(e, user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
