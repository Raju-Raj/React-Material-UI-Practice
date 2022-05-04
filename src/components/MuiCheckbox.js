import React,{useState} from 'react'
import {Box,FormControlLabel,Checkbox,FormControl,FormLabel,FormGroup} from '@mui/material'
import { BookmarkBorder } from '@mui/icons-material'
import { Bookmark } from '@mui/icons-material'

const MuiCheckbox = () => {
    const [acceptTnC,setAcceptTnC]=useState(false)
    const handleChange=(e)=>{
        setAcceptTnC(e.target.checked)
    }
    // console.log(acceptTnC)


    const [skills,setSkills]=useState([])
    const handleSkillChange=(e)=>{
        const index=skills.indexOf(e.target.value)
        if(index===-1){
            setSkills([...skills,e.target.value])
        }else{
            setSkills(skills.filter((skill)=>skill!==e.target.value))
        }
    }
    console.log(skills)
  return (
    <Box>
        <Box>
            <FormControlLabel label='I accept terms and conditions' control={<Checkbox checked={acceptTnC} onChange={handleChange}/>}/>
         </Box>
         <Box>
            <Checkbox
            icon={<BookmarkBorder/>}
            checkedIcon={<Bookmark/>}
            checked={acceptTnC}
            onChange={handleChange}
            /> 
        </Box>

        <Box>
            <FormControl>
            <FormLabel>Skills</FormLabel>
            <FormGroup>
                <FormControlLabel label="HTML" control={ <Checkbox value='html'  checked={skills.includes('html')} onChange={handleSkillChange}/>}/>
                <FormControlLabel label="CSS" control={ <Checkbox value='css'  checked={skills.includes('css')} onChange={handleSkillChange}/>}/>
                <FormControlLabel label="JavaScript" control={ <Checkbox value='javascript'  checked={skills.includes('javascript')} onChange={handleSkillChange}/>}/>
            </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}

export default MuiCheckbox