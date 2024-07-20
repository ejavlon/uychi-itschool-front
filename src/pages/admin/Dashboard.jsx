import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Layout from '@theme/Layout';
import MenuItems from '../../components/MenuFeatures/MenuItems';
import Drawer from '@mui/material/Drawer';


export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
   <Layout>      
      <Box sx={{ display: 'flex' }}>        
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon sx={{color:'var(--ifm-navbar-link-color)',}}/>
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MenuItems/>
            <Divider sx={{ my: 1 }} />            
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          </Container>
        </Box>
      </Box>
   </Layout>
  );
}