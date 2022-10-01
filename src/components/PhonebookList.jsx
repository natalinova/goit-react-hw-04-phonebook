import {ListItem, Button, Row} from './PhonebookStyled'
export default function PhonebookList({ data, removeContacts }) {

    const list = data.map(({ id, name, number }) => {
        return <ListItem key={id}>
            <Row>Name: {name}</Row>
            <Row>Phone: {number}</Row>
            <span><Button onClick={() => removeContacts(id)}> Remove</Button></span>
        </ListItem>;   
    })

    return (
        <ul>{list}</ul>
        )
}

PhonebookList.defaultProps = {data:[]}