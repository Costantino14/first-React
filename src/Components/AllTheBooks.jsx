import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'

export default function AllTheBooks({books, form}) {
  let [selected, setSelected] = useState(false);

  return (
    <Row>
      <Col md={9}>
    <Row>
        {books
        .filter(book => book.title.toLowerCase().includes(form))
        .map(book => (
          <Col className='m-2'>
              <SingleBook key={book.asin} book= {book} selected= {selected} setSelected={setSelected}/>
            </Col>
            )
        )}     
    </Row>
    </Col>
        <Col md={3}>
        <CommentArea asin={selected}/>
        
        </Col>

    </Row>
  )
  }
