import Card from 'react-bootstrap/Card';

export default function PageHeader(props){
    return (
        <>
        <Card>
          <Card.Body><strong>{props.text}</strong></Card.Body>
        </Card>
        <br/>
        </>
    )
}