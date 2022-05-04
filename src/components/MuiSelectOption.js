import {Box,TextField,MenuItem} from '@mui/material'
import React,{useState} from 'react';

const MuiSelectOption = () => {
    const [country,setCountry]=useState('')

    const [course,setCourse]=useState([])

    const changeHandle=(e)=>{
        setCountry(e.target.value)
    }
    console.log(country)

    const courseHandle=(e)=>{
        const value=e.target.value
        setCourse(typeof value==="string"?value.split(','):value)
    }
    console.log(course)
  return (
    <div>
        <Box width='250px' >
            <TextField label="Select Country" select value={country} onChange={changeHandle} fullWidth helperText="Please Select Your Country" size='small'>
                <MenuItem value="IN">India</MenuItem>
                <MenuItem value="US">USA</MenuItem>
                <MenuItem value="AU">Australia</MenuItem>
            </TextField>
        </Box>

        <Box width='250px' marginTop={5}>
            <TextField label="Select Cources" select fullWidth value={course} onChange={courseHandle} SelectProps={{multiple:true}} size="small" helperText="Please Select Course">
                <MenuItem value="html">HTML</MenuItem>
                <MenuItem value="CSS">CSS</MenuItem>
                <MenuItem value="JS">Java Script</MenuItem>
                <MenuItem value="Python">Python</MenuItem>
                <MenuItem value="React">ReactJS</MenuItem>
            </TextField>
        </Box>
    </div>
  )
}

export default MuiSelectOption