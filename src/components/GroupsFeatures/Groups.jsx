import React from 'react'
import MyCard from './MyCard'
import { Box } from '@mui/material'
import MyModal from '../MyModal'

export default function Groups() {
  const [open, setOpen] = React.useState(false);
  return (
    <Box component='div' sx={{display:'flex', flexWrap:'wrap'}}>
      <MyCard setOpen={setOpen}/>
      <MyCard/>
      <MyCard/>
      <MyCard/>            
      <MyCard/>
      <MyCard/> 
      <MyCard/>
      <MyCard/>
      <MyCard/>
      <MyCard/>
      <MyCard/>
      <MyCard/>
      <MyCard/>
      <MyCard/>
      <MyCard/>
      <MyCard/>

      <MyModal open={open} setOpen={setOpen} title="Amalni tasqiqlang!" message="Xaqiqatdan ham guruhni o'chirib yubormoqchimisiz?"/>
    </Box>
  )
}
