import styled, {css} from 'styled-components';

const StyledButton = styled.button(
  ({primary, error, outlined}) => `
    color: ${primary ? 'white' : 'blue'};
    ${error && 'color: red'};
    background-color: ${primary ? 'blue' : 'white'};
    font-size: 16px;
    border-radius: 2px;
    border: 1px solid blue;
    ${error && 'border: 1px solid red'};
    padding: 4px 8px;
    cursor: pointer;
    
    :disabled {
      border: 1px solid gray;
      background-color: grey;
      color: white;
      cursor: auto;
    }
    ${outlined && 'border: 0'};
  `,
);

const Button = (props) => {
  const {children, ...otherProps} = props;
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};
export default Button;