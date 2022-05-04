import React from 'react'
import { Stack,Alert,AlertTitle, Button } from '@mui/material'

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity='error'>This is an error alert</Alert>
      <Alert severity='warning'>This is warning alert</Alert>
      <Alert severity='info'>This is info alert</Alert>
      <Alert severity='success'>This is success alert</Alert>

      <Alert variant='outlined' severity='error'>This is an error alert</Alert>
      <Alert variant='outlined' severity='warning'>This is warning alert</Alert>
      <Alert variant='outlined' severity='info'>This is info alert</Alert>
      <Alert variant='outlined' severity='success'>This is success alert</Alert>

      <Alert variant='filled' severity='error' onClose={()=>alert("Clicked")}>
          <AlertTitle>Error</AlertTitle>
          This is an error alert
     </Alert>
      <Alert variant='filled' severity='warning' >
         <AlertTitle>warning</AlertTitle>
          This is warning alert
      </Alert>
      <Alert variant='filled' severity='info'>
         <AlertTitle>Info</AlertTitle>
          This is info alert
      </Alert>
      <Alert variant='filled' severity='success' action={<Button color='inherit' size='small'>UNDO</Button>}>
          <AlertTitle>Success</AlertTitle>
          This is success alert
      </Alert>
    </Stack>
  )
}

export default MuiAlert
