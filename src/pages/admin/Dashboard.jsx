import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Layout from '@theme/Layout';
import MuiDrawer from '@mui/material/Drawer';
import { styled} from '@mui/material/styles';
import MenuItems from '../../components/MenuFeatures/MenuItems';
import Groups from '../../components/GroupsFeatures/Groups';
import Students from '../../components/StudentsFeatures/Students';
import NewStudents from '../../components/NewStudentsFeatures/NewStudents';
import Appeals from '../../components/AppealsFeatures/Appeals';

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState("groups")

  const toggleDrawer = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    
  },[currentPage])

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        backgroundColor: 'var(--ifm-navbar-background-color)',
        width: 250,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        zIndex:100,
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

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
            <MenuItems setCurrentPage={setCurrentPage}/>
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
            {
              currentPage === "groups" ? <Groups/> : 
              currentPage === "stundets" ? <Students/> :
              currentPage === "newStudents" ? <NewStudents/> :
              currentPage === "appeals" ? <Appeals/> : ""
            }
          </Container>
        </Box>
      </Box>
   </Layout>
  );
}