import React,{useState} from 'react'
import {Box,FormControl,FormLabel,RadioGroup,Radio,FormControlLabel,FormHelperText} from '@mui/material'

const MuiRadioButton = () => {
    const [value,setValue]=useState('')

    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    console.log(value)
  return (
    <div>
        <Box width='250px'>
            <FormControl>
                <FormLabel id="job-experiance-group-label">
                    Years of experiance
                </FormLabel>
                <RadioGroup
                name='job-experiance-group'
                aria-labelledby='job-experiance-group-label'
                value={value}
                onChange={handleChange}
                row
                >
                    <FormControlLabel control={<Radio size='small' color='primary'/>} label='0-2' value='0-2'/>
                    <FormControlLabel control={<Radio size='small' color='secondary'/>} label='3-5' value='3-5'/>
                    <FormControlLabel control={<Radio size='small' color='warning'/>} label='6-7' value='6-7'/>
                </RadioGroup>
                <FormHelperText>Please select Valid selection</FormHelperText>
            </FormControl>
        </Box>
    </div>
  )
}

export default MuiRadioButton