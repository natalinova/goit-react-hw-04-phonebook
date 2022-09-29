import { Component } from "react";
import { nanoid } from "nanoid";
import PhonebookForm from "./PhonebookForm";
import PhonebookList from "./PhonebookList";
import PhonebookFilter from "./PhonebookFilter";
import {Block} from './PhonebookStyled'


export default class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }
  componentDidMount() {
    const currentStorage = localStorage.getItem('contacts');
    if (currentStorage !== null) {
      this.setState(
        { contacts: JSON.parse(currentStorage) }
      )
    }
 } 

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
      
    }
    
  }
  addContact = (contact) => {
    if (this.isDuplicate(contact)) {
  
      return alert(`There are ${contact.name} in phonebook`)
    }
    this.setState((prev) => {
      const newContact = {
        id: nanoid(),
        ...contact
      }
      return {
        contacts: [...prev.contacts, newContact]
      }
    })
  }
  handleInput = (e) => {
    console.log(e)
    const { name, value } = e.target;
    this.setState({
      [name]: value
    }
    )
  }
  isDuplicate({ name, number }) {
    const { contacts } = this.state;
    const result = contacts.find((contact) => contact.name === name && contact.number === number);
    return result
  }
  

  getFilteredPeople() {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredPeople = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase();
      const normalizedNumber = number.toLocaleLowerCase();
      const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
      return result;
        
    })

    return filteredPeople;
  }
  
  removeContacts = (id) => {
    this.setState((prev) => ({...prev, contacts: prev.contacts.filter(item =>item.id !== id)})
    )

  }

  
  render() {
    const people = this.getFilteredPeople();
    const filter = this.state.filter
    return (
      <Block>
        <h1>Phonebook</h1>
        <PhonebookForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <PhonebookFilter
          filter={filter}
          handleInput={this.handleInput} />
        <PhonebookList
          data={people}
          removeContacts={ this.removeContacts} />
      </Block>
    )
  }
}

