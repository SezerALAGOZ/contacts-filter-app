import React from 'react';
import {useState, useEffect} from 'react';



const initialFormValues = {fullName:"", phone:""};

function Form({addContact, contacts}) {

    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts])

    const onInputChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (form.fullName === '' || form.phone === '') {
            return false;
        }

        addContact([...contacts, form]);
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <div>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Fullname" 
                    value={form.fullName}
                    onChange={onInputChange}/>
                </div>
                <div>
                    <input 
                    type="phone" 
                    name="phone" 
                    placeholder="Mobile Phone" 
                    value={form.phone}
                    onChange={onInputChange}/>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        </div>
    )
}

export default Form
