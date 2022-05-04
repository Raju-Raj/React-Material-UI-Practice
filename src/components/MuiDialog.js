import React,{useState} from 'react'
import { Button,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions } from '@mui/material'

const MuiDialog = () => {
    const [open,setOpen]=useState(false)
  return (
      <>
    <Button onClick={()=>setOpen(true)}>
        Open Dialog
    </Button>
    <Dialog aria-labelledby='dialog-title' aria-describedby='dialog-description' open={open} onClose={()=>setOpen(false)}>
        <DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
        <DialogContent>
            <DialogContentText id="dialog-discription">Are you sure you want to submit the test? You will not be able to edit after Submitting</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=>setOpen(false)}>Cancel</Button>
            <Button onClick={()=>setOpen(false)} autoFocus>Submit</Button>
        </DialogActions>
    </Dialog>
    </>
  )
}

export default MuiDialog
