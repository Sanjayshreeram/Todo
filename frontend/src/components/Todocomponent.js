import React from 'react';
import {GrDocumentUpdate,GrStatusDisabled} from "react-icons/gr";


export const Todocomponent = ({text,DeleteTodo,Updatenote}) => {

  
  return (
    <div className='todo'>
     <div>
     <h1 className='text'>
           {text}
        </h1>
     </div>
       

       <div className='icons'>

       
        <GrDocumentUpdate onClick={Updatenote} className='icon' />

      
        
        <GrStatusDisabled onClick={DeleteTodo} className='icon' />

        
        
        </div>

        



    </div>
  )
}
