import React from 'react'
import {Box,Card,CardContent,Typography,Button,CardActions,CardMedia} from '@mui/material'

const MuiCard = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia
            component='img'
            height='140'
            image='https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png'
            alt='reactimg'
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component='div'>
                    React
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                React allows developers to create large web applications that can change data, without reloading the page. 
                </Typography>
            </CardContent>
            <CardActions>
                    <Button variant='contained'>Share</Button>
                    <Button variant='contained'>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default MuiCard