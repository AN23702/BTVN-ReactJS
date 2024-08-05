import { useState, useReducer } from "react";

const initialState = [
  {
    id: new Date().getTime(),
    todo: "Xóa tất cả",
    done: false
  }
];

const todoReducer = (state = initialState, action = {}) => {

  switch (action.type) {
    case "[TODO] add todo":
      return [...state, action.payload];

    case "[TODO] remove todo":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return initialState;
  }
};

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleAddAction = (newTodo) => {

    const action = {
      type: "[TODO] add todo",
      payload: newTodo
    };
    dispatch(action);
  };

  const handleDeleteAction = (id) => {  

    dispatch({
      type: "[TODO] Remove Todo",
      payload: id
    });
  };

  const addNewTodo = () => {

    const newTodo = {
      id: new Date().getTime(),
      todo: inputValue,
      done: false
    };

    handleAddAction(newTodo);
    setInputValue("");
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Thêm ghi chú"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={addNewTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => handleDeleteAction(todo.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

