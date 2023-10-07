import React from 'react'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import Favorite from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';

import FormControlLabel from '@mui/material/FormControlLabel';
import {useState} from 'react'

function CheckboxExample(){
    const [checked,setChecked] = useState(true)
    return(
        <>
        <FormControlLabel required control={<Checkbox checked={checked} onChange={(e)=> {setChecked(e.target.checked)}} icon={<DeleteIcon/>} checkedIcon={<Favorite/>} inputProps={{'arial-label':'secondary checkbox'}}/>} label='Test'/>
        </>
    )
}

function Material() {
  return (
    <>
    <CheckboxExample/>
   <ButtonGroup>
   <Button variant='contained' size='large' startIcon={<DeleteIcon/>} style={{fontSize:20}} color='primary'>Save</Button>
   <Button variant='contained' size='large' startIcon={<SaveIcon/>} style={{fontSize:20}} color='secondary'>Discard</Button>
   </ButtonGroup>
    <Typography variant="h4"  gutterBottom>Hey Fam</Typography>
    </>
  )
}

export default Material