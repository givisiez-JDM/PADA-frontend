
import IconPatient from '../../assets/iconPatient.svg'
import X from '../../assets/X.svg'
import { IconX, Logo, Main } from "./styles"
import { MouseEventHandler, ReactNode } from "react";

interface HeaderProps {
    children?: ReactNode
    onBackClick?: MouseEventHandler<HTMLImageElement>;
}

const Header: React.FC<HeaderProps> = ({ children, onBackClick }) => {
  return (
    <Main>
        <Logo src={IconPatient} />
        {children && <p>{children}</p>}
        <IconX onClick={onBackClick} src={X} alt="icon x" />
    </Main>
  )
}

export default Header