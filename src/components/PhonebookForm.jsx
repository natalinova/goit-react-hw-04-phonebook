import { Component } from "react";
import {FormTotal, InputField,InputButton} from './PhonebookStyled'


export default class PhonebookForm extends Component {
    state = {
        name: '',
        number: ''
    }
    
    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        }
        )
    }
   
    handleSubmit = (e) => {
         e.preventDefault();
        const { name, number } = this.state;
        console.log(name);
            this.props.onSubmit({ name, number });
            this.setState({
                name: '',
                number: ''
            })
    }


    render() {
        const { handleInput, handleSubmit } = this;
        
        return (
                <FormTotal onSubmit={handleSubmit}>
                
                <label htmlFor="id-name"> Name:</label>
                    <InputField
                        id="id-name"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.value}
                    onChange={handleInput}
                />
               
                <label htmlFor="id-number"> Phone: </label>
                <InputField
                    id="id-number"
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={handleInput}
                    />
            
                <InputButton >Add people</InputButton>
                </FormTotal>
        
    
        )
    }
}