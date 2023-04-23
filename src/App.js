import './App.css';
import Navbar from './Components/Navbar'
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import Alert from './Components/Alert';
import About from './Components/About';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  let init;
  if(localStorage.getItem('data')===null)
  init = [];
  else
  init = JSON.parse(localStorage.getItem('data'))

  const[alert,setAlert] = useState(null)
  const[data,setData] = useState(init)

  const onDelete = (item) =>{
    console.log('hii');
    // This method will not work
    // const index = data.indexOf(item);
    // data.splice(index,1);
    // setData(data);

    setData(data.filter((ite)=>{
      return item!==ite;
    }))
    // localStorage.setItem('data',JSON.stringify(data))
  }

  const onAdd = (obj) => {
    let a =1;
    data.forEach((da)=>{
      if(JSON.stringify(da) === JSON.stringify(obj))
      {
        setAlert('This task is already present.Please finish it first.');
        a=0;
        return;
      } 
    })
    if(a===1){
      const newList = data.concat(obj)
    setData(newList);
    // localStorage.setItem('data',JSON.stringify(data))
    }
    
  }

  useEffect(()=>{
    localStorage.setItem('data',JSON.stringify(data))
  },[data])

  return (
    <>
    <Router>
      <Navbar title="MyTodosList"/>
      <Alert alert={alert}/>
      <Routes>
        <Route exact path="/" element={ <Todos list={data} onDelete={onDelete} onAdd={onAdd}/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
      <Footer/></Router>
    </>
  );
}

export default App;
