import React from 'react'
import { Stack,Skeleton } from '@mui/material'

const MuiSkeleton = () => {
  return (
    <Stack spacing={1} width='250px'>
      <Skeleton variant="text" animation={false}/>
      <Skeleton variant="circular" height={40} width={40} animation='wave'/>
      <Skeleton variant='rectangular' height={150} width={250} animation='wave'/>
    </Stack>
  )
}

export default MuiSkeleton
