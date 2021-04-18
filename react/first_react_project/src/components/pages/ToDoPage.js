import { useState } from 'react';
import styled from 'styled-components';
import ToDoList from '../molecules/ToDoList';
import ToDoForm from '../molecules/ToDoForm';

const Wrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const initialList = [{ text: 'Позвтракать' }, { text: 'Не опаздать' }];

const ToDoPage = () => {
  const [list, setList] = useState(initialList);
  const onAddNewListItem = (value) => {
    setList([...list, { text: value }]);
  };
  const handleRemove = (i) => setList(list.filter((elem, index) => i !== index));

  return (
    <Wrapper>
      <Title>ToDoPage</Title>
      <ToDoList list={list} onRemove={handleRemove} />
      <ToDoForm onSubmit={onAddNewListItem} />
    </Wrapper>
  );
};

export default ToDoPage;