import React from 'react'
import { Avatar, Stack,AvatarGroup } from '@mui/material'

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={1}>
            <Avatar sx={{bgcolor:'primary.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor:'success.light'}}>CK</Avatar>
        </Stack>

        <Stack direction='row' spacing={1}>
            <Avatar sx={{bgcolor:'primary.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor:'success.light'}}>CK</Avatar>
            <Avatar 
            src='https://www.billboard.com/wp-content/uploads/2022/03/elon-musk-time-new-york-2021-billboard-1548.jpg?w=1024'
             alt='elon'/>
             <Avatar 
            src='https://imageio.forbes.com/specials-images/imageserve/605e22fe6df966b3fcbd3e15/0x0.jpg?format=jpg&crop=1080,1080,x0,y0,safe&fit=crop'
             alt='Jack'/>
        </Stack>

        <Stack direction='row' spacing={1}>
            <AvatarGroup max={3}>
            <Avatar sx={{bgcolor:'primary.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor:'success.light'}}>CK</Avatar>
            <Avatar 
            src='https://www.billboard.com/wp-content/uploads/2022/03/elon-musk-time-new-york-2021-billboard-1548.jpg?w=1024'
             alt='elon'/>
             <Avatar 
            src='https://imageio.forbes.com/specials-images/imageserve/605e22fe6df966b3fcbd3e15/0x0.jpg?format=jpg&crop=1080,1080,x0,y0,safe&fit=crop'
             alt='Jack'/>
             </AvatarGroup>
        </Stack>

        <Stack direction='row' spacing={1} >
            <Avatar variant='square' sx={{bgcolor:'primary.light',width:45,height:45}}>BW</Avatar>
            <Avatar variant='rounded' sx={{bgcolor:'success.light',width:45,height:45}}>CK</Avatar>
        </Stack>
    </Stack>
  )
}

export default MuiAvatar
