import React, { memo } from 'react'
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function MyAlert({open,setOpen,message,status}) {    
    // status type : success, info, warning, error
    const handleClose = (event, reason) => {
        if (reason === 'clickaway')return
        setOpen(false);
    };
        
  return (
    <Stack spacing={2} sx={{ width: '100%', display:'flex',  }}>       
        <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
        <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
            {message}
        </Alert>
        </Snackbar>        
    </Stack>  
  )
}

export default memo(MyAlert);