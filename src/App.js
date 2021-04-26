import TodoList from "./components/TodoList";
import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import {useCallback, useState} from "react";
import {v4} from "uuid";
function App() {

  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const onTextInputChange = useCallback ((e) =>{
      setTextInput(e.target.value); //set use input
  }, []);

  const onAddButton = useCallback((e) =>{
      setTodoList([...todoList, {id: v4(), name: textInput, isCompleted: false},]);
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
