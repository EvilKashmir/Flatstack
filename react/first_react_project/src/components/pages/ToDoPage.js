import {useState, useEffect} from 'react';
import styled from 'styled-components';
import ToDoList from '../molecules/ToDoList';
import ToDoForm from '../molecules/ToDoForm';
// import Button from '../../atoms/Button';

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

const ToDoPage = ({initialList}) => {
  const [list, setList] = useState(initialList);
  const [listUnSaved, setListUnsaved] = useState(false);
  const onAddNewListItem = (value) => {
    setList([...list, {text: value}]);
  };
  const handleRemove = (i) => setList(list.filter((elem, index) => i !== index));

  useEffect(() => {
    if (JSON.stringify(initialList) !== JSON.stringify(list)) {
      setListUnsaved(true);
    } else {
      setListUnsaved(false);
    }
  }, [initialList, list, listUnSaved]);


  return (
    <Wrapper>
      <Title>ToDoPage</Title>
      <ToDoList list={list} onRemove={handleRemove}/>
      <ToDoForm onSubmit={onAddNewListItem}/>
      {listUnSaved && (
        <div>
          List not saved
          {/* <Button>Dismiss</Button> */}
          {/* <Button primary>Save</Button> */}
        </div>
      )}
    </Wrapper>
  );
};

export default ToDoPage;