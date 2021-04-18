import styled from 'styled-components';
import Button from '../../atoms/Button';
import CheckBox from '../../atoms/Checkbox';
import ToDoListItem from '../../atoms/ToDoListItem/ToDoListItem';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledButton = styled(Button)`
  margin-left: auto;
`;


const ToDoList = (props) => {
  const { list, onRemove } = props;
  return (
    <List>
      {list.map((listItem, i) => (
        <ToDoListItem key={`${i}-${listItem.text}`}>
          <CheckBox />
          {listItem.text}
          <StyledButton error outlined onClick={() => onRemove(i)}>
            X
          </StyledButton>
        </ToDoListItem>
      ))}
    </List>
  );
};

export default ToDoList;