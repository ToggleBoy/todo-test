import React, { useState } from "react";
import Navbar from "./components/UI/Navbar";
import ToDoContextProvider from "./contexts/ToDoContext";
import ToDoList from "./components/ToDoList";
import BodyContainer from "./components/UI/BodyContainer";
import AddTodo from "./components/Add-Todo/AddTodo";
import EditTodo from "./components/Edit-Todo/EditTodo";

function App() {
  const [addModuleShow, setaddModal] = useState(false);
  const [editModuleShow, seteditModal] = useState(false);

  const showAddModal = () => {
    setaddModal(true);
  };

  const hideAddModal = () => {
    setaddModal(false);
  };

  const showEditModal = () => {
    seteditModal(true);
  };

  const hideEditModal = () => {
    seteditModal(false);
  };




  return (
    <div className="App">
      <ToDoContextProvider>
        {addModuleShow && <AddTodo onClose={hideAddModal}/>}
        {editModuleShow && <EditTodo onClose={hideEditModal} />}
        <Navbar />
        <BodyContainer onShowAddModal={showAddModal}/>
        <ToDoList onShowEditModal={showEditModal}/>
      </ToDoContextProvider>
    </div>
  );
}

export default App;
