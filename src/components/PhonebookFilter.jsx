import {InputField} from './PhonebookStyled'
export default function PhonebookFilter({ filter, handleInput }) {
    return (<InputField
          type='text'
          name='filter'
          value={filter}
          onChange={handleInput}
          placeholder={"filter"}/>)
}