import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import SingleBook from './SingleBook'

export default function AllTheBooks({books, form}) {

  let [selected, setSelected] = useState(false);
  return (
    <Row>
      <Col>
        <Row>
          {books
          .filter(book => book.title.toLowerCase().includes(form))
          .map(book => (
            <Col className='m-2'>
              {/*Faccio partire il componente SingleBook insieme alle Props*/}
              <SingleBook key={book.asin} book= {book} selected= {selected} setSelected={setSelected}/>
            </Col>
          ))}     
        </Row>
      </Col>
    </Row>
  )
}
