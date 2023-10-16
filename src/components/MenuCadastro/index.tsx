import {
    HeaderContainer,
    InfoMedicoContainer,
    HeaderImage,
    HeaderGreeting,
  } from './style';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';

import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

  

const StyledBadge = styled(Badge)(({ }) => ({
  '& .MuiBadge-badge': {
   '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      content: '""',
      filter: 'drop-shadow(black 4px 4px 4px)',
    },
  },
}));

const SmallAvatar = styled('button')(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));


  const MenuCadastro = () => {
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
 
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };


 function addAvatar () {
 console.log('adicionar')

 }

    return (
      <HeaderContainer>
        <HeaderImage>
          
        <StyledBadge
           overlap="circular"
           anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
           
           badgeContent={
            <SmallAvatar  onClick={addAvatar} />
          }
          >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </StyledBadge>
       <h1>Novo Paciente</h1>
      
  
        </HeaderImage>
        <InfoMedicoContainer>
          <Avatar></Avatar>
          <HeaderGreeting>Olá, Dr. Antônio!</HeaderGreeting>
          <div>
          <Button
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          >
        <CaretDown size={32} color="#d9d9d9" weight="fill" />
      </Button>
        <Menu
         id="fade-menu"
         MenuListProps={{
          'aria-labelledby': 'fade-button',
         }}
         anchorEl={anchorEl}
         open={open}
         onClose={handleClose}
         TransitionComponent={Fade}
       >
        <MenuItem onClick={handleClose}>Meu Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Pacientes</MenuItem>
        <MenuItem onClick={handleClose}>Sair</MenuItem>
      </Menu>
    </div>
        </InfoMedicoContainer>
      </HeaderContainer>
    );
  };
  
  export default MenuCadastro;