import TodoList from "./components/TodoList";
import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import {useState} from "react";
function App() {

  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");
  const onTextInputChange = (e) =>{
      setTextInput(e.target.value); //set use input
  }
  return (
      <div>
        <h3>Lists:</h3>
        <TextField name='add-todo'
                   placeholder='Add stuff to do...'
                   elemAfterInput={
                     <Button isDisabled={true} appearance='primary'>Add</Button>
                   }
        >
        </TextField>
          <TodoList />

      </div>


  );
}

export default App;
