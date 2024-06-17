import '../App.css';
import React from 'react';
import { Trash3Fill } from 'react-bootstrap-icons';
import ListGroup from 'react-bootstrap/ListGroup';

export default function SingleComment({comments, setComments, setAdd, add}) {

  const deleteComment = (id) => {
    
    fetch("https://striveschool-api.herokuapp.com/api/comments/"+id, {
      method: "DELETE",
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMDhlOTBiM2IyNTAwMTUxYjU0MjMiLCJpYXQiOjE3MTg2Mzk5NjYsImV4cCI6MTcxOTg0OTU2Nn0.ZIa_sp7up3XB3-Q16a-YeygHvWXuaBTBW_TvHkTd-pM',
       } })
       .then(() => {
        
        setComments(comments.filter((comment) => comment._id !== id))
        setAdd(!add)
        })
        .catch((error) => console.error("Errore nel cancellare il commento", error))
    };


  return (
    <ListGroup >
      {comments.map(comment => 
      <ListGroup.Item className='px-3 comments-details'>
        <p data-testid="commento">{comment.comment}   Voto:{comment.rate}</p>
        <div className='p-1 cancella' variant="danger" onClick={() => deleteComment(comment._id)}>
          <Trash3Fill />
        </div>
      </ListGroup.Item>)}
    </ListGroup>
  )
}
