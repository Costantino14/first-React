import '../App.css';
import React, { useEffect, useState } from 'react'
import CommentList from './CommentList';
import AddComment from './AddComment';
import { Alert } from 'react-bootstrap';


export default function CommentArea({asin}) {

  //4 stati divertsi: uno per i commenti, uno per il carimamento del loader, uno per visualizzare l'errore, uno per l'add
  const [comments, setComments] = useState([]);
  const [caricamento, setCaricamento] = useState(false);
  const [errorFetch, setErrorFetch] = useState(false);
  const [add, setAdd] = useState(false);
  const url = 'https://striveschool-api.herokuapp.com/api/books/';

  // Creo il read con useEffect
  useEffect(() => {
    //Cambio lo stato di caricamento per farlo visualizzare
    setCaricamento(true);
    fetch(url+asin+"/comments/")
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => {
        console.error("Errore nella fetch:", error)
        setErrorFetch(true)
      })
      .finally(() => setCaricamento(false));
  }, [asin]); //Lascio una dipendenza che fa ripartire il read ogni volta che utilizzo un asin diverso

  return (
    <div data-testid="comment-area">
      {caricamento && <p id="loader">Caricamento...</p>} {/*Se caricamento è true visualizza la scritta Caricamento...*/}
      {errorFetch &&  <Alert variant="danger"> {/*Se errorFetch è true visualizza l'alert di bootstrap*/}
                        ops...si è verificato un errore!
                      </Alert>}
      <CommentList comments= {comments} setComments={setComments} setAdd={setAdd} add={add}/>
      <AddComment asin= {asin} setAdd={setAdd} add={add}/>
    </div>
  )
}
