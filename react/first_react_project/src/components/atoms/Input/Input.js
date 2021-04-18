import styled from 'styled-components';

const StyledInput = styled.input`
  font-size: 16px;
  border-radius: 2px;
  border: 1px solid blue;
  padding: 4px 8px;

  :focus {
    border: 1px solid blue;
    outline: #61dafb 1px solid;
  }

  :disabled {
    border: 1px solid gray;
  }

  :active {
    outline: #61dafb 1px solid;
  }
`;

const Input = ({onChange, ...props}) => {
  const handleChange = (ev) => {
    onChange(ev.target.value);
  };
  return <StyledInput {...props} onChange={handleChange}/>;
};

export default Input;