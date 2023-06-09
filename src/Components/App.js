import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact])
  };

  useEffect = () =>{
    
  }
   
  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList const contacts={contacts} />
    </div>
  );
}

export default App;
