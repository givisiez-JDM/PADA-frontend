import 'styled-components';

export const Theme = {
    colors: {
        variant1: '#76A7ED',
        variant2: '#4C7ABB',
        variant3: '#334C76',
        variant4: '#E9EAEC',
        separation: '#F5F5F5',
        white: '#FFFFFF',
        keyboard: '#273047',
        background: '#E3E3E3',
        buttonOff: '#B4B4B4',
        vaccine: {
            applied: '#5CED38',
            notApplied: '#E85656',
            late: '#FACB71',
            schedule: '#B4B4B4',
        }
    },
}

export type ITheme = typeof Theme

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme { }
}