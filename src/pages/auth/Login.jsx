import React, { memo } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Layout from '@theme/Layout';
import MyAlert from '../../components/MyAlert';
import LoadingButton from '@mui/lab/LoadingButton';
import LoginIcon from '@mui/icons-material/Login';

function Login() {

  //checkbox
  const [save, setSave] = React.useState(false);

  //loading
  const [loading, setLoading] = React.useState(false);

  // Snackbar item
  const [message,setMessage] = React.useState("");
  const [status,setStatus] = React.useState("info");
  const [open, setOpen] = React.useState(false);

  // Snackbar item  
  const showMessage = (message,success)=>{
    setMessage(message);
    setStatus(success);
    setOpen(true);
  }

  // save username and password to localstorage
  const saveUserData = () => {
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);
  }

  const sumbitBtnClick = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if(username === "" || password === ""){
      showMessage("Username yoki password kiritilmagan !", "error"); 
      return;
    }

    setLoading(true);
  

  }

  React.useEffect(() => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    // if(username !== null && password !== null)
    //   showMessage("Localstorage'da malumotlar topildi","info")
    // else
    //   showMessage("Localstorage'da malumotlar topilmadi","error")
  },[])

  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Kirish
          </Typography>
          <Box component="section" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Eslab qol"
              onChange={() => setSave(!save)}
            />
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              onClick={sumbitBtnClick}
              sx={{ mt: 3, mb: 2 }}
              loading={loading}
              loadingPosition="center"
              startIcon={<LoginIcon />}
            >
              Kirish
            </LoadingButton>
          </Box>
        </Box>
        <MyAlert open={open} setOpen={setOpen} message={message} status={status}/>
      </Container>
    </Layout>
  );
}

export default memo(Login);