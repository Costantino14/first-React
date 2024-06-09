import '../App.css';
import React, { useEffect, useState } from 'react'
import CommentList from './CommentList';
import AddComment from './AddComment';
import { Alert } from 'react-bootstrap';


export default function CommentArea({asin}) {

  const [comments, setComments] = useState([]);
  const [caricamento, setCaricamento] = useState(false);
  const [errorFetch, setErrorFetch] = useState(false);
  const url = 'https://striveschool-api.herokuapp.com/api/books/';

  // READ 
  useEffect(() => {
    setCaricamento(true);
    // GET all'API
    fetch(url+asin+"/comments/", {
      headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMDhlOTBiM2IyNTAwMTUxYjU0MjMiLCJpYXQiOjE3MTcyMzE1MDYsImV4cCI6MTcxODQ0MTEwNn0.cCxiQ6_mCk-VCPkpVkXwQnt7vampB5hHTXY43ZoJRkg'}
      })
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => {
        console.error("Errore nella fetch:", error)
        setErrorFetch(true)
      })
      .finally(() => setCaricamento(false));
  }, [asin]);

  return (
    <>
    <AddComment asin= {asin} comments= {comments}/>
    {caricamento && <p id="loader">Caricamento...</p>}
    {errorFetch &&  <Alert variant="danger">
          ops...si è verificato un errore!
        </Alert>}
    <CommentList comments= {comments}/> 
    
    </>
  )
}
