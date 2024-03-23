"use client"
import { useSelectedLayoutSegments } from 'next/navigation';
import React, { useState } from 'react';

const page = () => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const [bgcolor, setBgcolor]=useState(false)

  const submitHandler=(e)=>{
    e.preventDefault()
    setMainTask([...mainTask, {title, des}])
    setTitle("")
    setDes("")
    setBgcolor(!bgcolor)
  };

  const deleteHandler=(i)=>{
    const copyData=[...mainTask]
    copyData.splice(i,1)
    setMainTask(copyData)
  }

  let renderTask= <h2>no task present</h2>

  if(mainTask.length>0){

    renderTask=mainTask.map((t,i)=>{
      return (
        <li key={i}>
          <div className='flex justify-between mb-5 w-2/3'>
            <h5>{t.title}</h5>
            <h5>{t.des}</h5>
          <button className='bg-red-400 px-4 py-2 rounded'
          onClick={()=>{
            deleteHandler(i)
          }}
          >Delete</button>
          </div>
        </li>
      )
    })
  }
  return (
    <>
      <h1 className="bg-black text-white font-bold text-5xl p-5 flex text-center justify-center">ToDo LIst</h1>
      <form onSubmit={submitHandler} className='justify-center'>
        <input type='text' className='text-2xl font-bold border-2 border-zinc-800 px-4 py-2 m-8' 
        placeholder='Enter task here' 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
        <input type='text' className='text-2xl font-bold border-2 border-zinc-800 px-4 py-2 m-8' 
        placeholder='Enter description here' 
        value={des}
        onChange={(e)=>{
          setDes(e.target.value)
        }}/>
        <button className='bg-black text-white py-3 px-4 font-bold rounded'>Add Task</button>
      </form>
      <hr/>
        <div className={"p-8 "+(bgcolor?'bg-orange-400':'bg-blue-500')}>
          <ul>
            {renderTask}
          </ul>
        </div>
    </>
  )
}

export default page  