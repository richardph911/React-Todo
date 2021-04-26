import TodoList from "./components/TodoList";
import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import {useCallback, useEffect, useState} from "react";
import {v4} from "uuid";
const TODO_STORAGE_KEY = "TODO_APP";
function App() {

  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(()=>{
      //refresh or reload , check if localstorage saved those, then open and set items
      const storagedTodoList = localStorage.getItem(TODO_STORAGE_KEY);
      if(storagedTodoList){
          setTodoList(JSON.parse(storagedTodoList));
      }

  },[]);

    useEffect(()=>{
        //save json as string
        localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todoList))
    },[todoList]);

  const onTextInputChange = useCallback ((e) =>{
      setTextInput(e.target.value); //set use input
  }, []);

  const onAddButton = useCallback((e) =>{
      setTodoList([{id: v4(), name: textInput, isCompleted: false}, ...todoList]); //add vo first list, thi su dung ...todolist owr dang sau

      setTextInput("");

  }, [todoList, textInput]);
  return (
      <div>
        <h3>Lists:</h3>
        <TextField name='add-todo'
                   placeholder='Add stuff to do...'
                   elemAfterInput={
                     <Button isDisabled= {!textInput} appearance='primary' onClick={onAddButton}>Add</Button>
                   }
                   value={textInput}
                   onChange={onTextInputChange}
        >
        </TextField>
          <TodoList todoList = {todoList} />

      </div>


  );
}

export default App;
