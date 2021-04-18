import ToDoList from '../molecules/ToDoList';
import ToDoForm from '../molecules/ToDoForm';

const list = [{ text: 'Поставить будильник на 7:00' }, { text: 'Позвтракать' }, { text: 'Не опаздать' }];

const ToDoPage = () => (
  <>
    <div>ToDoPage</div>
    <ToDoList list={list} />
    <ToDoForm />
  </>
);

export default ToDoPage;