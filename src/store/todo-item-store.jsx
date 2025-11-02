import { createContext, useReducer } from "react";

export const TodoItemContext = createContext([]);

const reducerTodo=(currItem,action)=>{
  // let newTodoItems=currItem;
  if(action.type==="NEW_ITEM"){
    return currItem= [
      ...currItem,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  }
  else if(action.type==="DELETE_ITEM"){
    return currItem.filter((item) => item.name !== action.payload.todoItemName);
  }

  return currItem;
}

const CreateContextProvider = ({ children }) => {
  const [todoItems, dispatch] = useReducer(reducerTodo, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = {
      type: "NEW_ITEM",
      payload: { itemName, itemDueDate },
    };
    dispatch(newTodoItems);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = { type: "DELETE_ITEM", payload: { todoItemName } };
    dispatch(newTodoItems);
  };


  return <TodoItemContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
    {children}
  </TodoItemContext.Provider>
};

export default CreateContextProvider;
