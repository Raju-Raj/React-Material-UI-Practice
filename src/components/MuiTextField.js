import React,{useState} from 'react'
import {Stack,TextField,InputAdornment} from '@mui/material'

const MuiTextField = () => {
    const [value,setValue]=useState('')
  return (
    <Stack spacing={4}>

        <Stack spacing={2} direction='row'>
            <TextField label="Outlined" variant='outlined'/>
            <TextField label="Filled" variant='filled'/>
            <TextField label="Standard" variant='standard'/>
        </Stack>

        <Stack spacing={2} direction='row'>
            <TextField label="Small Secondary" color='secondary' size='small'/>
        </Stack>

        <Stack spacing={2} direction='row'>
            <TextField label="Required" required/>
            <TextField label='Helper text' type="password" helperText="Do not share password to anyone"/>
            <TextField label="Disabled" disabled />
            <TextField label="ReadOnly" InputProps={{readOnly:true}} value="Read only"/>
        </Stack>

        <Stack spacing={2} direction='row'>
            <TextField label="Amount" InputProps={{startAdornment:<InputAdornment position="start">$</InputAdornment>,}}/>
            <TextField label="Weight" InputProps={{endAdornment:<InputAdornment position="end">KG</InputAdornment>}}/>
        </Stack>

        <Stack spacing={2} direction='row'>
            <TextField label="Required" 
            required 
            error={!value}
            type="password"
            helperText={!value?"Required":"Don't share password to anyone"}
            value={value} 
            onChange={e=>setValue(e.target.value)}/>
        </Stack>

    </Stack>
  )
}

export default MuiTextField