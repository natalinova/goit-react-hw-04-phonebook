import { useState, useEffect} from "react";
import { nanoid } from "nanoid";
import PhonebookForm from "./PhonebookForm";
import PhonebookList from "./PhonebookList";
import PhonebookFilter from "./PhonebookFilter";
import {Block} from './PhonebookStyled'


export default function Phonebook() {
  const [contacts, setContacts] = useState(
  [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  )
  
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
     const currentStorage = localStorage.getItem('contacts');
    if (currentStorage !== null) {
        setContacts(JSON.parse(currentStorage)  )
    } 
  }, [])

  useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts))
}, [contacts])
  
  const addContact = (name, number) => {
     
    if (isDuplicate(name,number)) {
      return alert(`There are ${name} in phonebook`)
    }
    setContacts(() => {
      const newContact = {
        id: nanoid(),
        name: name,
        number: number
      }
      return [...contacts, newContact]
      }
    )
  }

  const  handleInput = (e) => {
    setFilter(e.target.value)
  }
  const isDuplicate = ({ name, number }) => {

    const result = contacts.find((contact) => contact.name === name && contact.number === number);
    return result;
  };
  

  const getFilteredPeople = () => {
    if (!filter) {
      return contacts
    };
    
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredPeople = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase();
      const normalizedNumber = number.toLocaleLowerCase();
      
      const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
      return result;
        
    })
    return filteredPeople;
  };
  
  const removeContacts = (id) => {
    setContacts([...contacts.filter(item => item.id !== id)])
  };

  const people = getFilteredPeople();

    return (
      <Block>
        <h1>Phonebook</h1>
        <PhonebookForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <PhonebookFilter
          filter={filter}
          handleInput={handleInput} />
        <PhonebookList
          data={people}
          removeContacts={removeContacts} />
      </Block>
    )
}

