import React from 'react'

export default function TodosItem({item,onDelete}) {
  return (
    <div className='my-4'>
      <div>{item.no}</div>
      <div>{item.task}</div>
      <div>{item.time}</div>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(item)}}>Delete</button>
      <hr/>
    </div>
  )
}
