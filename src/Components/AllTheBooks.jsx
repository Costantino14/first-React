import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SingleBook from './SingleBook'

export default function AllTheBooks({books, form}) {

  return (

    <>

    <Row>
        {books
        .filter(book => book.title.toLowerCase().includes(form))
        .map(book => (
            
            <Col className='m-2'>

              <SingleBook key={book.asin} book= {book} />
            </Col>

            )
        )}

        
    </Row>
    </>
  )
  }
