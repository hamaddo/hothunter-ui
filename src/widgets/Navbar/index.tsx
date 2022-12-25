import React, { FC, ReactNode, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AccountCircle } from '@mui/icons-material';
import { AppBar, CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useAxiosQuery } from 'shared/hooks/useAxiosQuery';
import { Loader } from 'shared/ui/Loader';

type ListType = {
  text: string;
  path: string;
};

const list: ListType[] = [
  {
    text: 'Работодатели',
    path: '/employers',
  },
  {
    text: 'Клиенты',
    path: '/clients',
  },
  {
    text: 'Одменка',
    path: '/users',
  },
];

export const Navbar: FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'node', md: 'flex' } }}>
              Hot Hunters
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {list.map((page) => {
                return (
                  <Button
                    key={page.text}
                    onClick={() => navigate(page.path)}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.text}
                  </Button>
                );
              })}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Container maxWidth="xl">{children}</Container>
      </Box>
    </Box>
  );
};
