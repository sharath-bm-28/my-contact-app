import React, {useState, useEffect} from "react";
// import { uuid } from "uuidv4";

import "./App.css";
import Header from "./Header";
import AddContact  from "./AddContact";
import ContactList from "./ContactList";
// import ContactCard from  "./ContactCard";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addConatctHandler = (contact) =>{
    console.log(contact);
    setContacts([...contacts, {id:`${contact}-${Date.now()}`, ...contacts }]);
  };

  const removeContactHandler = (id) =>{
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;

    });
    setContacts(newContactList);
  }

  useEffect(() =>{
   const getContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if (getContacts) setContacts(getContacts);
  }, []);

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
 <div className="ui container">
  <Header />
  <AddContact  addConatctHandler={addConatctHandler}/>
  <ContactList contacts={contacts} getContactId = {removeContactHandler}/>
 </div>
  );
}

export default App;
