import axios from "axios";

const baseUrl="http://localhost:5000";


 export const GetAllToDo=async (settodo)=>{      //get all todo


    await axios.get(baseUrl).then(({data})=>{

        console.log(data);
        settodo(data)
    })
}

export const ADDTODO =async (text, settext, settodo) => {                     //create todo and put into database todo is a callback function
    await axios.post(`${baseUrl}/create`, { text }).then((data) => {
      console.log(data);
      settext("");
      GetAllToDo(settodo);
    });
  }

  export const DeleteTodo = async (id, settodo) => {
    await axios.post(`${baseUrl}/delete`, { _id: id })
      .then((data) => {
        console.log(data);
        GetAllToDo(settodo);
      })
      .catch((error) => console.log(error));
  }
  
  
  






//update todo
export const UpdateTodo = async (todoid, text, settodo, settext, isupdating) => {
    await axios.post(`${baseUrl}/update`, { _id: todoid, text })
      .then(() => {
        settext("");
        isupdating(false);
        GetAllToDo(settodo);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  