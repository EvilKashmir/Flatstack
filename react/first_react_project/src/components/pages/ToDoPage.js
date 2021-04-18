import {useState, useEffect} from 'react';
import styled from 'styled-components';
import ToDoList from '../molecules/ToDoList';
import ToDoForm from '../molecules/ToDoForm';
import Button from '../atoms/Button';
import useToDo from '../../hooks/useToDo';

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

const ToDoPage = () => {
  const {list: initialList, updateList} = useToDo();
  console.log(initialList);
  const [list, setList] = useState(initialList);
  const [listUnSaved, setListUnsaved] = useState(false);

  useEffect(() => {
    if (JSON.stringify(initialList) !== JSON.stringify(list)) {
      setListUnsaved(true);
    } else {
      setListUnsaved(false);
    }
  }, [initialList, list, listUnSaved]);

  const onAddNewListItem = (value) => {
    setList([...list, {text: value}]);
  };
  const handleRemove = (i) => setList(list.filter((elem, index) => i !== index));

  const onSave = () => {
    updateList(list);
  };

  const onDismiss = () => {
    setList(initialList);
  };

  const handleCheck = (ev, i) => {
    const {
      target: {checked},
    } = ev;
    setList((currentList) => currentList.map((listItem, index) => (i === index ? {...listItem, checked} : listItem)));
  };
  return (
    <Wrapper>
      <Title>ToDoPage</Title>
      <ToDoForm onSubmit={onAddNewListItem}/>
      <ToDoList list={list} onRemove={handleRemove} onCheck={handleCheck}/>
      {listUnSaved && (
        <div>
          <Button onClick={onDismiss}>Dismiss</Button>
          <Button primary onClick={onSave}>
            Save
          </Button>
        </div>
      )}
    </Wrapper>
  );
};

export default ToDoPage;