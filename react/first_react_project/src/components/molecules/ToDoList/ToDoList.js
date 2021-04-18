import ToDoListItem from '../../atoms/ToDoListItem/ToDoListItem';

const ToDoList = (props) => {
  const {list} = props;
  return (
    <>
      <div>ToDoList</div>
      <ul>
        {list.map((listItem) => (
          <ToDoListItem>{listItem.text}</ToDoListItem>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;