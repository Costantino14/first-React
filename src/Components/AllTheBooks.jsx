import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import SingleBook from './SingleBook'

export default function AllTheBooks(props) {

  const [form, setForm] = useState('');


  return (

    <>
    <Row>
    <form>
      <div>
        <label> Cerca per titoli: 
          <input className='ms-2'
            type="text"
            name="name" 
            value={form} 
            onChange={(e) => setForm(e.target.value)} 
          />
        </label>
      </div>
    </form>
    </Row>

    <Row>
        {props.books
        .filter(book => book.title.toLowerCase().includes(form))
        .map(book => (
            
            <Col className='m-2'>

              <SingleBook key={book.assin} book= {book} />
            </Col>

            )
        )}

        
    </Row>
    </>
  )
  }
