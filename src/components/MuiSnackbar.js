import React,{useState,forwardRef} from 'react'
import { Button, Snackbar,Alert } from '@mui/material'

const SnackbarAlert=forwardRef(
    function SnackbarAlert(props,ref){
        return <Alert elevation={6} ref={ref} {...props}/>
    }
)

const MuiSnackbar = () => {
    const [open,setOpen]=useState(false)
    const handleClose=(event,reason)=>{
        if(reason==="Clickaway"){
            return
        }
        setOpen(false)
    }
  return (
    <>
      <Button onClick={()=>setOpen(true)}>Submit</Button>
      {/* <Snackbar 
      message="Form submitted Successfully!"
      autoHideDuration={4000}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
          vertical:'bottom',
          horizontal:'center'
      }}
       /> */}
       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
           <SnackbarAlert onClose={handleClose} severity='success'>
               Form submitted Successfully 
           </SnackbarAlert>
       </Snackbar>
    </>
  )
}

export default MuiSnackbar
