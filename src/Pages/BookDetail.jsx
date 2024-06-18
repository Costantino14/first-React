import React from 'react'
import { useParams } from 'react-router-dom'
import fantasy from '../Books/fantasy.json';
import history from '../Books/history.json';
import romance from '../Books/romance.json';
import horror from '../Books/horror.json';
import scifi from '../Books/scifi.json';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';

export default function BookDetail({type}) {

    const { asin } = useParams();
    let book={};
    if (type === 'fantasy') {book = fantasy.find( b => b.asin === asin) }
    else if (type === 'history') {book = history.find( b => b.asin === asin) }
        else if (type === 'horror') {book = horror.find( b => b.asin === asin) }
            else if (type === 'romance') {book = romance.find( b => b.asin === asin) }
                else if (type === 'scifi') {book = scifi.find( b => b.asin === asin) }
  return (
    <Row>
        <Col>
            <Row>
                <Col md={5}>
                    <Card style={{ width: "18rem"}}>
                        <Card.Img variant="top" src={book.img} />
                    </Card>
                </Col>
                <Col md={7}>
                    <h1>Book Details</h1>
                    <ListGroup>
                        <ListGroup.Item>Title: {book.title} </ListGroup.Item>
                        <ListGroup.Item>Category: {book.category} </ListGroup.Item>
                        <ListGroup.Item>Price: €{book.price}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Col>
    </Row>
  )
}