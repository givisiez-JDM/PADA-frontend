import * as React from 'react';

import { Main } from './styles';

interface Props
    extends React.ComponentProps<"main"> {
    children?: React.ReactNode
}

const DefaultPage = ({ children, ...props }: Props) => {
    return ( 
        <Main {...props}>
        {children}
        </Main>
     );
}

export default DefaultPage;