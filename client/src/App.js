import React, { Fragment} from 'react';
import './App.css';

//components
import InputToDo from './components/InputToDo';
import ListToDos from './components/ListToDo';


function App() {
  return <Fragment>
    <div className="container">
      <InputToDo />
      <ListToDos />


    </div>
  </Fragment>;
}

export default App;
