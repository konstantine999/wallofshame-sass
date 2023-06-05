import "./App.css";
import Header from "./components/header/Header";
import Table from "./components/table/Table";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [excuse, setExcuse] = useState("");
  const [users, setUsers] = useState([]);

  function addNewUser() {
    let id = users.length + 1;
    let count = 1;
    if (name.length > 0 && excuse.length > 0) {
      setUsers((prev) => [...prev, { id, name, excuse, count }]);
    } else {
      alert("შეავსე ყველა ველი");
    }
  }
  console.log(users);
  return (
    <div className="App">
      <Header
        name={(e) => setName(e.target.value)}
        excuse={(e) => setExcuse(e.target.value)}
        addNewUser={addNewUser}
      />
      <Table users={users} />
    </div>
  );
}

export default App;
