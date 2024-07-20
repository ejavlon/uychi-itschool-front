import React, { useState } from 'react';
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
import { Box } from '@mui/material';

export const mainListItems = (
  <Box component='div' sx={{color:'var(--ifm-navbar-link-color)',}}>
    <ListItemButton>
      <ListItemIcon sx={{color:'var(--ifm-navbar-link-color)',}}>
        <GroupsIcon />
      </ListItemIcon>
      <ListItemText primary="Guruhlar"/>
    </ListItemButton>
    <ListItemButton >
      <ListItemIcon sx={{color:'var(--ifm-navbar-link-color)',}}>
        <SchoolIcon />
      </ListItemIcon>
      <ListItemText primary="O'quvchilar" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{color:'var(--ifm-navbar-link-color)',}}>
        <NewReleasesIcon />
      </ListItemIcon>
      <ListItemText primary="Kursga yozilganlar" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{color:'var(--ifm-navbar-link-color)',}}>
        <MessageIcon />
      </ListItemIcon>
      <ListItemText primary="Murojaatlar" />
    </ListItemButton>
  </Box>
);

export const secondaryListItems = (
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
      <ListItemText primary="Sertifikat yaratish" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{color:'var(--ifm-navbar-link-color)',}}>
        <MailOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Sms xabarnoma" />
    </ListItemButton>
  </Box>
);