import { useState } from 'react';

const initialList = [
  { text: 'Позвтракать', checked: true },
  { text: 'Не опаздать', checked: false },
];

const useToDo = () => {
  const [list, setList] = useState(initialList);

  return { list, updateList: setList };
};

export default useToDo;