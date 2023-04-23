import React, { useState } from 'react'
import TodosItem from './TodosItem'
const Todos = (props) => {

    const[no,setNo] = useState('');

    const changeNo = (event) => {
        if(event.target.value === '')
        return; 
        setNo(parseInt(event.target.value));
    }

    const[task,setTask] = useState('');

    const changeTask = (event) => {
        if(event.target.value === '')
        return; 
        setTask(event.target.value);
    }

    const[time,setTime] = useState('');

    const changeTime = (event) => {
        if(event.target.value === '')
        return; 
        setTime(event.target.value);
    }

    const sendData = () => {
        if(no&&task&&time)
        props.onAdd({no,task,time})
        else
        alert("fields can't be blank")
        setNo('');
        setTime('');
        setTask('');
    }


  return (
    <div className='container'>
      <h3 className='text-center'>
        Todos List
      </h3>
      <div>
        no: <input name="query" type="text" value={no} onChange={changeNo}/>
      </div>
      <div>
        task: <input name="query" type="text" value={task} onChange={changeTask}/>
      </div>
      <div>
        time: <input name="query" type="text" value={time} onChange={changeTime}/>
      </div>
      <div>
        <button className='btn btn-sm btn-danger' onClick={sendData}>Add</button>
      </div>
      <hr/>
      {props.list.length === 0 ? 'No tasks to display' :
      props.list.map( (item) => {
            return <TodosItem item={item} key ={item.no} onDelete={props.onDelete}/>
        })
      }
    </div>
  )
}

export default Todos


