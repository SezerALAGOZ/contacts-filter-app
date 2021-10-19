import React from 'react';
import List from './List';
import Form from './Form';
import {useState, useEffect} from 'react';
import './styles.css'

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullName:"Sezer", 
            phone:"454"
        },
        {
            fullName:"Emrah",
            phone:"452"
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return (
        <div id="container">
            <h1>My Contacts</h1>
            <List contacts={contacts} />
            
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts
