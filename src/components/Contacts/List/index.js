import React from 'react';
import {useState} from 'react';

function List({contacts}) {

    const [filterText, setFilterText] = useState('');

    const filteredContacts = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
        item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase())
        );
    });

    return (
        <div>
            <div>
                <input 
                placeholder="Filter Contacts"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}/>
            </div>

            <div>
            <ul>
                {
                    filteredContacts.map((contact, i) => (
                        <li key={i}>{contact.fullName}</li>
                    ))
                }
            </ul>
            </div>
           
        </div>
    )
}

export default List;
