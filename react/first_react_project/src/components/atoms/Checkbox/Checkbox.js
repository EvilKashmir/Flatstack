import styled from 'styled-components';

const StyledCheckBox = styled.input`
  cursor: pointer;
`;

const CheckBox = (props) => <StyledCheckBox {...props} type="checkbox" />;

export default CheckBox;