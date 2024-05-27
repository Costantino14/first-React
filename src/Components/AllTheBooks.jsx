import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export default function AllTheBooks(props) {
    console.log(props.books)
  return (
    <Row>

        {props.books.map(book => (
            
            <Col className='m-2'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={book.img}  style={{ height: '23rem' }} />
                    <Card.Body  style={{ height: '13rem' }}>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>
                          Prezzo: {book.price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            )
        )}
        
    </Row>

  )
}
