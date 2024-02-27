
import IconPatient from '../../assets/iconPatient.svg'
import X from '../../assets/X.svg'
import { IconX, Logo, Main } from "./Header.styles"
import { ReactNode } from "react";
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  children?: ReactNode  
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1);
  };
  
  return (
    <Main>
        <Logo src={IconPatient} />
        {children && <>{children}</>}
        <IconX onClick={handleBackClick} src={X} alt="icon x" />
    </Main>
  )
}

export default Header
