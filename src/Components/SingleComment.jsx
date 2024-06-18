import '../App.css';
import React from 'react';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import ListGroup from 'react-bootstrap/ListGroup';

export default function SingleComment({comments, setComments, setAdd, add}) {

  //Funzione per modificare il commento e fare chiamata Put
  const updateComment = (id, changeComment, changeRate) => {

    fetch("https://striveschool-api.herokuapp.com/api/comments/"+id, {
      method: "PUT",
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMDhlOTBiM2IyNTAwMTUxYjU0MjMiLCJpYXQiOjE3MTg2Mzk5NjYsImV4cCI6MTcxOTg0OTU2Nn0.ZIa_sp7up3XB3-Q16a-YeygHvWXuaBTBW_TvHkTd-pM',
        "Content-Type": "application/json", // tipo di contenuto come JSON
      },
      body: JSON.stringify({comment: changeComment, rate: changeRate}), 
    })
    .then((response) => response.json()) // Convertiamo la risposta in formato JSON
    .then((data) => setComments(comments.map(comment => comment._id === id ? data : comment)))
    .catch(error => console.error("Errore nel modificare il commento", error))
  }

  //Funzione per cancellare il commento e fare chiamata delete
  const deleteComment = (id) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/"+id, {
      method: "DELETE",
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMDhlOTBiM2IyNTAwMTUxYjU0MjMiLCJpYXQiOjE3MTg2Mzk5NjYsImV4cCI6MTcxOTg0OTU2Nn0.ZIa_sp7up3XB3-Q16a-YeygHvWXuaBTBW_TvHkTd-pM',
      }
    })
    .then(() => {
      setComments(comments.filter((comment) => comment._id !== id))
      setAdd(!add)
    })
    .catch((error) => console.error("Errore nel cancellare il commento", error))
  };

  return (
    
    <ListGroup > {/*Creo un list group di bootstrap per inserire tutti i commenti grazie al pt*/}
      {comments.map(comment => 
      <ListGroup.Item className='px-3 comments-details'>
        <p data-testid="commento">{comment.comment}   Voto:{comment.rate}</p>
        <div className='d-flex'>
          {/*inserisco un bottone per far partire la funzione updateComment*/}
          <div className='p-1 me-1 modifica' onClick={() => updateComment(comment._id, prompt("Modifica il commento:", comment.comment), prompt("Inserisci un voto da 1 a 5:", comment.rate) )}>
            <PencilSquare />
          </div>
          {/*inserisco un bottone per far partire la funzione deleteComment*/}
          <div className='p-1 cancella' onClick={() => deleteComment(comment._id)}>
            <Trash />
          </div>
        </div>
      </ListGroup.Item>)}
    </ListGroup>
  )
}


  
  

