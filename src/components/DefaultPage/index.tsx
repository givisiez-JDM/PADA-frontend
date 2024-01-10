import * as React from 'react';

import { Main } from './styles';

interface Props {
    children: React.ReactNode
}

const DefaultPage = ({ children, ...props }: Props) => {
    return ( 
        <Main {...props}>
        {children}
        </Main>
     );
}

export default DefaultPage;