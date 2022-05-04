import React,{useState,useEffect} from 'react'
import { Stack,Skeleton,Box,Avatar,Typography } from '@mui/material'

const MuiSkeletonDemo = () => {
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },5000)
    },[])
  return (
    <Box sx={{width:'250px'}}>
        {
            loading ? (
                <Skeleton variant='rectangular' width={256} height={144} animation='wave'/>
            ):(
                <img src='https://play-lh.googleusercontent.com/vA4tG0v4aasE7oIvRIvTkOYTwom07DfqHdUPr6k7jmrDwy_qA_SonqZkw6KX0OXKAdk=w412-h220-rw' alt="skeleton" height={144} width={256}/>
            )
        }
        <Stack direction='row' spacing={1} sx={{width:'100%', marginTop:'12px'}}>
            {
                loading ? (
                    <Skeleton variant='circular' width={40} height={40} animation='wave'/>
                ):(
                    <Avatar>R</Avatar>
                )
            }
            <Stack sx={{width:'80%'}}>
                {
                    loading ? (
                        <>
                        <Typography variant='body1'>
                            <Skeleton variant='text' width='100%' animation='wave'/>
                        </Typography>
                        <Typography variant='body2'>
                            <Skeleton variant='text' width='100%' animation='wave'/>
                        </Typography>
                        </>
                    ):(
                        <>
                        <Typography variant='body1'>
                            React MUI Tutoriual
                        </Typography>
                        <Typography variant='body2' fontSize={12}>
                            React tutorial please watch, 
                            share and subscribe
                        </Typography>
                        </>
                    )
                }
            </Stack>
        </Stack>
    </Box>
  )
}

export default MuiSkeletonDemo
