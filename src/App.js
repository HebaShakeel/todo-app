import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, InputLabel, Input, FormControl } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    //this code here...fires when the app.js loads
    db.collection("todos").orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})));
    });
  }, []);

  const addTodo = (event) => {
    //this will fire when we click the button
    event.preventDefault(); //will stop the REFRESH

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput(""); //clear up the input after clicking add todo button
  };

  return (
    <div className="App">
      <h1>Hello Beautiful!</h1>
      <form>
        <FormControl>
          <InputLabel> Write a Todo </InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          variant="contained"
          onClick={addTodo}
          color="primary"
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo = {todo} />
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
