import {ListItem, Button} from './PhonebookStyled'
export default function PhonebookList({ data, removeContacts }) {
    
  
    const list = data.map(({ id, name, number }) => {
        return <ListItem key={id}>
            <span>Name: {name}</span>
            <span>Phone: {number}</span>
            <span><Button onClick={() => removeContacts(id)}> Remove</Button></span>
        </ListItem>
    })
    return (
        <ul>{list}</ul>
        )
}
PhonebookList.defaultProps = {data:[]}