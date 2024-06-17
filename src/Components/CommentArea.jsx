import '../App.css';
import React, { useEffect, useState } from 'react'
import CommentList from './CommentList';
import AddComment from './AddComment';
import { Alert } from 'react-bootstrap';


export default function CommentArea({asin}) {

  const [comments, setComments] = useState([]);
  const [caricamento, setCaricamento] = useState(false);
  const [errorFetch, setErrorFetch] = useState(false);
  const [add, setAdd] = useState(false);
  const url = 'https://striveschool-api.herokuapp.com/api/books/';

  // READ 
  useEffect(() => {
    setCaricamento(true);
    // GET all'API
    fetch(url+asin+"/comments/")
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => {
        console.error("Errore nella fetch:", error)
        setErrorFetch(true)
      })
      .finally(() => setCaricamento(false));
  }, [asin]);

  return (
    <div data-testid="comment-area">
      {caricamento && <p id="loader">Caricamento...</p>}
      {errorFetch &&  <Alert variant="danger">
                        ops...si è verificato un errore!
                      </Alert>}
      <CommentList comments= {comments} setComments={setComments} setAdd={setAdd} add={add}/>
      <AddComment asin= {asin} setAdd={setAdd} add={add}/>
    </div>
  )
}
