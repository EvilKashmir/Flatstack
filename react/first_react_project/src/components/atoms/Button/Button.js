import styled, {css} from 'styled-components';

const StyledButton = styled.button(
  ({primary, error, outlined = true}) => css`
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

    :focus {
      outline: #61dafb 1px solid;
    }

    :active {
      outline: #61dafb 1px solid;
    }

    ${!outlined &&
    css`
      border: 0;

      :focus {
        outline: 0;
      }

      :active {
        outline: 0;
      }
    `};
  `,
);

const Button = (props) => {
  const {children, ...otherProps} = props;
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};
export default Button;