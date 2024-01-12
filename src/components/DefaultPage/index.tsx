import { useState } from 'react';
import logo from '../../assets/logo.png';
import whiteArrow from "../../assets/white-arrow.svg";


import { Header, Main, Picture, UserMenu } from './styles';
import ModalDoctor from '../ModalDoctor/ModalDoctor';

interface IUser {
    name: string,
}

interface IPatient {
    name: string,
    photo: any
}

interface Props
    extends React.ComponentProps<"main"> {
    user?: IUser,
    patient?: IPatient
}

const DefaultPage = ({ user, patient, ...props }: Props) => {

    const [modal, setModal] = useState(false);


    function leftHeader(data: IPatient | undefined) {
        return (
            data ? <div><Picture src={data.photo} alt='foto do paciente' /> <p>{data.name}</p></div> : <Picture src={logo} alt='logo do programa' />
        )
    }

    return (
        <Main>
            <Header>
                {leftHeader(patient)}
                <UserMenu
                    onClick={() => setModal(!modal)}
                    onBlur={() => setModal(false)}
                >
                    {user ? user.name : "Desconhecido"}
                    <img src={whiteArrow} />
                </UserMenu>
            </Header>
            {props.children}
            {modal && <ModalDoctor />}
        </Main>
    );
}

export default DefaultPage;