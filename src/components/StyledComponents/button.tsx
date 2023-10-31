import styled, { CSSObject } from 'styled-components';

interface ButtonProps {
    isActive?: boolean;
    theme: {
        color: {
            primary: string;
            secondary: string;
            active: string;
            inactive: string;
        };
    };
}

const StyledButton = styled.button<ButtonProps>((props) => {
    return `
    background: ${props.isActive ? props.theme.color.primary : props.theme.color.secondary};
    color: ${props.isActive ? props.theme.color.secondary : props.theme.color.primary};
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  `;
});

export default StyledButton;
