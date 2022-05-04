import React,{useState} from 'react'
import { Stack,Rating } from '@mui/material'
import { Favorite } from '@mui/icons-material'
import { FavoriteBorder } from '@mui/icons-material'

const MuiRating = () => {
    const [value,setValue]=useState(null)
    const changeHandle=(e,newval)=>{
        setValue(newval)
    }
    console.log(value)
  return (
    <Stack spacing={2}>
      <Rating
      value={value}
      onChange={changeHandle}
      precision={0.5}
      size='large'
      icon={<Favorite fontSize='inherit' color='error'/>}
      emptyIcon={<FavoriteBorder fontSize='inherit'/>}
      highlightSelectedOnly
      />
    </Stack>
  )
}

export default MuiRating
