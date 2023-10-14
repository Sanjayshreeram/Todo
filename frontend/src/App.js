import { useEffect, useState } from 'react';
import { Todocomponent } from './components/Todocomponent';
import './index.css';
import { GetAllToDo,UpdateTodo,DeleteTodo } from './utilites/HandleAPI';
import { ADDTODO } from './utilites/HandleAPI';
function App() {
  
  const [todo,settodo]=useState([]);
  const [text,settext]=useState("");
  const [update,isupate]=useState(false);

  const [todoid,settodoId]=useState("") 

  useEffect(()=>{

    GetAllToDo(settodo)

  },[])


  const Updatenote =(_id,text)=>{
    isupate(true);
    settext(text)
    settodoId(_id)

     
    alert('update the note')
  }

  const deletenote=(id)=>{

    DeleteTodo(id,settodo)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>TODO APP</h1>

        <div className="Top">

          <div>
          <input type="text" value={text} onChange={(e)=>settext(e.target.value)} placeholder="ADD TODO TEXT HERE"></input>


<button className="add" onClick={  update ? ()=>UpdateTodo(todoid,text,settodo,settext,isupate) :()=>ADDTODO(text,settext,settodo)}>{update ?"isupdating":"ADD"}</button>

          </div> 
          
         
          

        </div>
        <div className='list'>
        {
  todo.map((item) => (
    <Todocomponent
      key={item._id}
      text={item.text}
      Updatenote={() => Updatenote(item._id, item.text)}
      DeleteTodo={() => deletenote(item._id)}
    />
  ))
}

         
          </div>








      </div>
      
    </div>
  );
}

export default App;
