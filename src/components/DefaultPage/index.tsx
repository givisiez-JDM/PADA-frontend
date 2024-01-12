import * as React from 'react';

import logo from '../../assets/logo.png';

import { Header,  Main, Picture } from './styles';

interface IUser {
    name: string,
    photo: any
}

interface Props
    extends React.ComponentProps<"main"> {
    user?: IUser,
}

const DefaultPage = ({ user, ...props }: Props) => {

    function leftHeader(data: IUser | undefined) {
        return (
            data ? <div><Picture src={data.photo} /> <p>{data.name}</p></div> : <Picture src={logo} />
        )
    }

    return (
        <Main>
            <Header>
                {leftHeader(user)}
                
            </Header>
            {props.children}
        </Main>
    );
}

export default DefaultPage;