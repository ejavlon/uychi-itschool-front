import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FiberNewOutlinedIcon from '@mui/icons-material/FiberNewOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Chip, IconButton, Tooltip } from '@mui/material';


export default function MyCard({setOpen}) {
  return (
    <Card sx={{ maxWidth: 275, margin: 2,backgroundColor: 'var(--ifm-navbar-background-color)', color:'var(--ifm-navbar-link-color)' }}>
      <CardContent>
        <Box component='div' sx={{display:'flex', justifyContent:'space-between'}}>
          <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
            Guruh : K12
          </Typography>
          <Chip label="new" color="success" variant="outlined" />
        </Box>
        <Typography variant="h5" component="div">
          Kompyuter savodxonligi
        </Typography>          
        <Typography sx={{ mt: 1.5,fontSize:12 }} variant="body2">
          Mentor: Axrorbek Mamadaliyev <br />
          Ochilgan sana: 21.07.2024 <br />
          O'quvchilar soni: 15 ta <br />
          Yig'ildi: 7 ta
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex', justifyContent:'space-between'}}>        
        <Button size="small" onClick={()=>setOpen(true)}>Ochish</Button>
        <Tooltip title="Guruhni o'chirish" followCursor>
          <IconButton>
            <DeleteOutlineOutlinedIcon color='error'/>
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
