import React,{useState} from 'react'
import { Chip, Stack,Avatar } from '@mui/material'
import { Face } from '@mui/icons-material'

const MuiChip = () => {
    const [chips,setChips]=useState(['Chip 1','Chip 2','Chip 3'])
    const handleDelete=(chipToDelete)=>{
        setChips(chips.filter((chip)=>chip!==chipToDelete))
    }
  return (
    <Stack direction='row' spacing={1}>
      <Chip label="Chip" color='primary' size='small'/>

      <Chip 
      label="Chip Outlined" 
      color='primary' 
      size='small' 
      variant='outlined'
      avatar={<Avatar>V</Avatar>}
      />

      <Chip label="Chip" color='primary' size='small' icon={<Face/>}/>

      <Chip label='Click' color='success' onClick={()=>alert("Clicked")}/>

      <Chip label="Delete" color='error' onClick={()=>alert("Clicked")} onDelete={()=>alert('Delete Handle Called')}/>

      {
          chips.map(chip=>(
              <Chip key={chip} label={chip} onDelete={()=>handleDelete(chip)}/>
          ))
      }
    </Stack>
  )
}

export default MuiChip
