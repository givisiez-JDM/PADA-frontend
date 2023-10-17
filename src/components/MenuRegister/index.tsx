import {
    HeaderContainer,
    InfoMedicoContainer,
    HeaderImage,
    HeaderGreeting,
    AvatarButton,
  } from './style';

import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useRef, useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';
import Avatar from '@mui/material/Avatar';
import MenuList from '@mui/material/MenuList/MenuList';
import Grow from '@mui/material/Grow/Grow';
import Paper from '@mui/material/Paper/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Popper from '@mui/material/Popper/Popper';
import iconProfile from '../../assets/Ellipse_19.svg'
import iconpatient from '../../assets/Ellipse_5.svg'
import iconlogout from '../../assets/icon _log out_.svg'
import Badge from '@mui/material/Badge/Badge';


  const MenuCadastro = () => {
  
    const [open, setOpen] = useState(false);
    
    const anchorRef = useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event: Event | React.SyntheticEvent) => {
      if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event: React.KeyboardEvent) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === 'Escape') {
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current!.focus();
      }
  
      prevOpen.current = open;
    }, [open]);

    return (
      <HeaderContainer>
        <HeaderImage>
          
        <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <AvatarButton >+</AvatarButton>
        }
      >
        <Avatar sx={{ width: 56, height: 56 }}/>
      </Badge>


       <h1>Novo Paciente</h1>

        </HeaderImage>
        <InfoMedicoContainer>

          <Avatar></Avatar>
          <HeaderGreeting>Olá, Dr. Antônio!</HeaderGreeting>
          <div>
          <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
          >
        <CaretDown size={32} color="#d9d9d9" weight="fill" />
      </Button>
      <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'top-start' ? ' top' : ' top',
              }}
            >
              <Paper sx={{width:' 259px',height:'312px',borderRadius:'20px',background:'#FFF'}}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    sx={{padding:'20px'}}
                  >
                    <MenuItem onClick={handleClose} sx={{gap:'12px',paddingTop:'40px'}}><img src={iconProfile}/>Meu Perfil</MenuItem>
                    <MenuItem onClick={handleClose} sx={{gap:'12px'}}><img src={iconpatient}/>Pacientes</MenuItem>
                    <MenuItem onClick={handleClose} sx={{gap:'12px'}}><img src={iconlogout}/>Sair</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
    </div>
        </InfoMedicoContainer>
      </HeaderContainer>
    );
  };
  
  export default MenuCadastro;