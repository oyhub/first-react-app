import { ThemeProvider } from 'styled-components';

const theme = {
    color: {
        primary: 'teal',
        secondary: 'darkred',
    }};

// @ts-ignore
export const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme;