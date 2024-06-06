import '../App.css';
import React, { useContext, useState } from 'react'
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea';
import { ThemeContext } from '../Modules/Contexts';

export default function SingleBook({book}) {

let [selected, setSelected] = useState(false);
const [themeCtx, setThemeCtx] = useContext(ThemeContext)

  return (
    <>
      <Card bg={themeCtx} data-bs-theme={themeCtx} style={{ width: '18rem', border: selected ? '2px red solid' : 'none'}} className='mb-2 card-book' onClick={() => setSelected(!selected)}>
          <Card.Img variant="top" src={book.img}  style={{ height: '23rem' }} />
          <Card.Body  style={{ height: '13rem' }}>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
                Prezzo: {book.price}€
              </Card.Text>
          </Card.Body>
      </Card>
      {selected && <CommentArea asin={book.asin}/>}
    </>
  )
}
