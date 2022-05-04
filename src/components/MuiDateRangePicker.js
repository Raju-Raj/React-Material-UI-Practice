import React,{useState} from 'react'
import { Box,TextField } from '@mui/material'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'

const MuiDateRangePicker = () => {
    const [value,setvalue]=useState([null,null])
    console.log(value)
  return (
    <Box width='500px'>
      <DateRangePicker
      startText='Check-in'
      endText='Check-out'
      value={value}
      onChange={(newValue)=>{
          setvalue(newValue)
      }}
      renderInput={(startProps,endProps)=>(
          <>
          <TextField {...startProps}/>
          <Box sx={{mx:2}}>To</Box>
          <TextField {...endProps}/>
          </>
      )}
      />
    </Box>
  )
}

export default MuiDateRangePicker
