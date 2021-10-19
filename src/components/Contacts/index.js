import React from 'react';
import List from './List';
import Form from './Form';
import {useState, useEffect} from 'react';

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
        <div>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts
