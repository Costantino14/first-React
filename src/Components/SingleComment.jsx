import React from 'react';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

export default function SingleComment({comments, setComments}) {

  const deleteComment = (id) => {
    
    fetch("https://striveschool-api.herokuapp.com/api/comments/"+id, {
      method: "DELETE",
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMDhlOTBiM2IyNTAwMTUxYjU0MjMiLCJpYXQiOjE3MTcyMzE1MDYsImV4cCI6MTcxODQ0MTEwNn0.cCxiQ6_mCk-VCPkpVkXwQnt7vampB5hHTXY43ZoJRkg',
       } })
       .then(() => setComments(comments.filter((comment) => comment._id !== id)))
        .catch((error) => console.error("Errore nell'eliminare la todo", error))
    };


  return (
    <ListGroup className='mb-2' style={{ width: '18rem'}} >
      {comments.map(comment => 
      <ListGroup.Item>{comment.comment}   Voto:{comment.rate}
       <Button className='ms-3 p-1' variant="danger" onClick={() => deleteComment(comment._id)}>
        x
      </Button>
      </ListGroup.Item>)}
    </ListGroup>
  )
}
