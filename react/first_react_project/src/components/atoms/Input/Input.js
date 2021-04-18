import styled from 'styled-components';

const StyledInput = styled.input(
  ({disabled}) => `
    background-color: #ddd;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    padding: 4px 8px;
    :focus {
      border: 1px solid blue;
    }
    :disabled {
      border: 1px solid gray;
    }
    &:hover { 
      background-color: #ccc;
    }
  `);

const Input = ({ onChange, ...props }) => {
  const handleChange = (ev) => {
    onChange(ev.target.value);
  };
  return <StyledInput {...props} onChange={handleChange} />;
};

export default Input;