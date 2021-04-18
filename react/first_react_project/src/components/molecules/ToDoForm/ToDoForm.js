import styled from 'styled-components';

import Button from '../../atoms/Button';
import Input from '../../atoms/Input';

const Wrapper = styled.div`
  padding: 6px;
  display: flex;
  justify-content: space-between;
  max-width: 300px;
`;

const ToDoForm = () => (
  <Wrapper>
    <Input/>
    <Button primary>Add!</Button>
  </Wrapper>
);

export default ToDoForm;