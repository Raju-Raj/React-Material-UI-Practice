import React,{useState} from 'react'
import { Button, ButtonGroup, IconButton, Stack,ToggleButton,ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButtons = () => {
    const [formats,setFormats]=useState([])
    const eventHandle=(event,newFormats)=>{
        setFormats(newFormats)
    }
    console.log(formats)
  return (
    <Stack spacing={4}>

        <Stack spacing={2} direction='row'>
            <Button variant='text' href='https://google.com'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant='contained' color='secondary'>Secondary</Button>
            <Button variant='contained' color='warning'>Warning</Button>
            <Button variant='contained' color='success'>Success</Button>
            <Button variant='contained' color='error'>Error</Button>
            <Button variant='contained' color='info'>Info</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' size='small'>Small</Button>
            <Button variant='contained' size='medium'>Medium</Button>
            <Button variant='contained' size='large'>Lrage</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon/>} onClick={()=>alert("Clicked")} disableRipple>Send</Button>
            <Button variant='contained' endIcon={<SendIcon/>} disableElevation>Send</Button>
            <IconButton color='success' size='small' aria-label='send'>
                <SendIcon/>
            </IconButton>
        </Stack>

        <Stack direction='row'>
            <ButtonGroup variant='contained'>
                <Button >Left</Button>
                <Button >Center</Button>
                <Button >Right</Button>
            </ButtonGroup>
        </Stack>

        <Stack direction='row'>
            <ButtonGroup variant='outlined'>
                <Button >Left</Button>
                <Button >Center</Button>
                <Button >Right</Button>
            </ButtonGroup>
        </Stack>

        <Stack direction='row'>
            <ButtonGroup variant='text'>
                <Button >Left</Button>
                <Button >Center</Button>
                <Button >Right</Button>
            </ButtonGroup>
        </Stack>

        <Stack direction='row'>
            <ButtonGroup variant='contained' orientation='vertical' size='small' color='secondary' aria-label='alignment button group' >
                <Button onClick={()=>alert("Left clicked")}>Left</Button>
                <Button >Center</Button>
                <Button >Right</Button>
            </ButtonGroup>
        </Stack>

        <Stack direction='row'>
            <ToggleButtonGroup value={formats} onChange={eventHandle} aria-label='text-formatting' color='success'>
                <ToggleButton value='bold' aria-label='bold'>
                    <FormatBoldIcon/>
                </ToggleButton>
                <ToggleButton value='italic' aria-label='italic'>
                    <FormatItalicIcon/>
                </ToggleButton>
                <ToggleButton value='underlined' aria-label='underlined'>
                    <FormatUnderlinedIcon/>
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>

     </Stack>
  )
}

export default MuiButtons 