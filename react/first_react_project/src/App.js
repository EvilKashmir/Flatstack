import { useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import defaultTheme from './config/theme/default';
import './App.css';
import Examples from './examples';

const initialList = [];

function App() {
  const [list, setList] = useState(initialList);
  const addToList = (newElement) => setList([...list, { name: newElement }]);
  const exampleProps = {
    size: 5,
    error: false,
    list,
    addToList,
  };
  return (
    <StyledThemeProvider theme={defaultTheme}>
      <div className="App">
        <Examples {...exampleProps}>Example One</Examples>
      </div>
    </StyledThemeProvider>
  );
}

export default App;
