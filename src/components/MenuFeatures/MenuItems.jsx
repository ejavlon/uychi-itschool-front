import React from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import GroupsIcon from '@mui/icons-material/Groups';
import QrCodeIcon from '@mui/icons-material/QrCode';
import MessageIcon from '@mui/icons-material/Message';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SchoolIcon from '@mui/icons-material/School';
import Box from '@mui/material/Box';


export default function MenuItems({setCurrentPage}) {

    const menuItemBtnClick = (page) => {
        console.log(page);
        setCurrentPage(page);
    }
  return (
    <React.Fragment>
        <Box component='div' sx={{color:'var(--ifm-navbar-link-color)',}}>
            <ListItemButton onClick={() => menuItemBtnClick("groups")}>
                <ListItemIcon sx={{color:'var(--ifm-navbar-link-color)',}}>
                <GroupsIcon />
                </ListItemIcon>
                <ListItemText primary="Guruhlar"/>
            </ListItemButton>
            <ListItemButton onClick={() => menuItemBtnClick("stundets")}>
                <ListItemIcon sx={{color:'var(--ifm-navbar-link-color)',}}>
                <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="O'quvchilar" />
            </ListItemButton>
            <ListItemButton onClick={() => menuItemBtnClick("newStudents")}>
                <ListItemIcon sx={{color:'var(--ifm-navbar-link-color)',}}>
                <NewReleasesIcon />
                </ListItemIcon>
                <ListItemText primary="Kursga yozilganlar" />
            </ListItemButton>
            <ListItemButton onClick={() => menuItemBtnClick("appeals")}>
                <ListItemIcon sx={{color:'var(--ifm-navbar-link-color)',}}>
                <MessageIcon />
                </ListItemIcon>
                <ListItemText primary="Murojaatlar" />
            </ListItemButton>
        </Box>
        <Box sx={{color:'var(--ifm-navbar-link-color)', zIndex:100,}}>
            <ListSubheader component="div" sx={{backgroundColor:'var(--ifm-navbar-background-color)',color:'var(--ifm-navbar-link-color)',}}  inset>
                Xizmatlar      
            </ListSubheader>
            <ListItemButton>
                <ListItemIcon sx={{color:'var(--ifm-navbar-link-color)',}}>
                <QrCodeIcon />
                </ListItemIcon>
                <ListItemText primary="QR Code yaratish"/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon sx={{color:'var(--ifm-navbar-link-color)',}}>
                <CardMembershipIcon />
                </ListItemIcon>
                {/* <ListItemText primary="Sertifikat yaratish" /> */}
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon sx={{color:'var(--ifm-navbar-link-color)',}}>
                <MailOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Sms xabarnoma" />
            </ListItemButton>
        </Box>    
    </React.Fragment>
  )
}
