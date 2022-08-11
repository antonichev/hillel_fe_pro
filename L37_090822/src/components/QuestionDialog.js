import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

export default function QuestionDialog({
  open,
  handleCloseNo,
  handleCloseYes,
}) {
  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Are You Sure?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            This will permanently delete this record. Continue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseNo}>No</Button>
          <Button onClick={handleCloseYes} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
