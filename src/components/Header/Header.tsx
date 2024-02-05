
import IconPatient from '../../assets/iconPatient.svg'
import X from '../../assets/X.svg'
import { IconX, Logo, Main } from "./styles"
import { ReactNode } from "react";

interface HeaderProps {
    children?: ReactNode
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <Main>
        <Logo src={IconPatient} />
        {children && <>{children}</>}
        <IconX src={X} alt="" />
    </Main>
  )
}

export default Header