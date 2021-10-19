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
            <ul className="list">
                {
                    filteredContacts.map((contact, i) => (
                        <li key={i}>
                            <span>{contact.fullName}</span>
                            <span>{contact.phone}</span>
                        </li>
                    ))
                }
            </ul>
            <p>Total Contacts: {filteredContacts.length}</p>
            </div>
           
        </div>
    )
}

export default List;
