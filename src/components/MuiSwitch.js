import React,{useState} from 'react'
import {Box,FormControlLabel,Switch} from '@mui/material'

const MuiSwitch = () => {
    const [checked,setChecked]=useState(false)
    const handleEvent=(e)=>{
        setChecked(e.target.checked)
    }
    console.log(checked)
  return (
    <Box>
      <FormControlLabel label="Dark Mode" control={<Switch checked={checked} onChange={handleEvent} size='small' color='success'/>}/>
    </Box>
  )
}

export default MuiSwitch
