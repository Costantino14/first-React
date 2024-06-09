import '../App.css';
import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { ThemeContext } from '../Modules/Contexts';

export default function SingleBook({book, selected, setSelected}) {


const [themeCtx, setThemeCtx] = useContext(ThemeContext)

  return (
    <>
      <Card bg={themeCtx} data-bs-theme={themeCtx} style={{ width: '15rem', border: selected === book.asin ? '2px red solid' : 'none'}} className='mb-2 card-book' onClick={() => setSelected(book.asin)}>
          <Card.Img variant="top" src={book.img}  style={{ height: '23rem' }} />
          <Card.Body  style={{ height: '13rem' }}>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
                Prezzo: {book.price}€
              </Card.Text>
          </Card.Body>
      </Card>
    </>
  )
}
