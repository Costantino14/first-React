import '../App.css';
import CommentArea from './CommentArea'
import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { ThemeContext } from '../Modules/Contexts';
import { useNavigate } from 'react-router-dom';

export default function SingleBook({book, selected, setSelected}) {


const [themeCtx, setThemeCtx] = useContext(ThemeContext)
let navigate= useNavigate();

  return (
    <>
      <Card data-testid="card" bg={themeCtx} data-bs-theme={themeCtx} style={{ border: selected === book.asin ? '2px red solid' : '1px'}} className='mb-2 card-book' onClick={() => setSelected(book.asin)}>
          <Card.Img variant="top" src={book.img}  style={{ height: '23rem' }} />
          <Card.Body  style={{ minHeight: '13rem' }}>
              <Card.Title>{book.title}</Card.Title>
              <Button 
                className="btn btn-dark w-100 my-2"
                onClick={() => navigate('/details/'+book.asin)}>
                Dettagli
              </Button>
              {selected === book.asin ? <CommentArea asin={book.asin} /> : ""}
          </Card.Body>
      </Card>
    </>
  )
}
