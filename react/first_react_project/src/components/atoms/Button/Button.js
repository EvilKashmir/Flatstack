import styled from 'styled-components';

const StyledButton = styled.button(
  ({ disabled }) => `
    color: black;
    cursor: ${disabled ? 'default' : 'pointer'};
    font-size: 20px;
    border-radius: 10px;
    border: 2px solid grey;
    padding: 4px 8px;
    margin: 0px 10px;
    &:hover {
        background-color: blue;
        color: white;
    }
`);

const Button = (props) => {
  const { primary, children } = props;
  return <StyledButton primary={primary}>{children}</StyledButton>;
};

export default Button;