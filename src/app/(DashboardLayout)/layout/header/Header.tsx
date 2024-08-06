import React from 'react';
import { Box, AppBar, Toolbar, styled, IconButton, useMediaQuery, Theme } from '@mui/material';
import PropTypes from 'prop-types';
import { IconMenu } from '@tabler/icons-react';

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {
  const isMobileOrTablet = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  // Si no es ni móvil ni tableta, no renderiza el componente
  if (!isMobileOrTablet) {
    return null;
  }


  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    background: '#1f1f1f',//color header
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.primary.light,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: 'none', // Solo se muestra en pantallas pequeñas
              xs: 'inline',
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>

        <Box flexGrow={1} />
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  toggleMobileSidebar: PropTypes.func.isRequired,
};

export default Header;
