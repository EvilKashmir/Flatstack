import ToDoPage from './components/pages/ToDoPage';

const initialList = [{ text: 'Позвтракать' }, { text: 'Не опаздать' }];

const App = () => (
  <>
    <ToDoPage initialList={initialList} />
  </>
);

export default App;
