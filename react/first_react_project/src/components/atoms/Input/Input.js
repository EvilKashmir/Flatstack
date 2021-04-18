import styled from 'styled-components';

const StyledInput = styled.input(
  ({disabled}) => `
    background-color: #ddd;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    padding: 4px 8px;
    &:focus {
        color: black;
    }
    &:hover { 
        background-color: #ccc;
    }
  `);

const Input = (props) => {
  const {disabled, children} = props;
  return <StyledInput primary={disabled}>{children}</StyledInput>;
};

export default Input;