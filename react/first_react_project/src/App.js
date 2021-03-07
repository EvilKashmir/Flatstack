// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Examples from './Test';

const initialList = [
    {name: 'F'},
    {name: 'S'},
    {name: 'T'},
];

function App() {
    const [list, setList] = useState(initialList);
    return (
        <div className="App">
            <Examples size={5}> Example One </Examples>
        </div>
    );
}

export default App;
