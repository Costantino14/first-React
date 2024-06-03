import React from 'react';
import { Badge } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

export default function SingleComment({comments}) {
  return (
    <ListGroup className='mb-2' style={{ width: '18rem'}} >
      {comments.map(comment => 
      <ListGroup.Item>{comment.comment}   Voto:{comment.rate}
       <Badge className='ms-3' pill bg="danger">
        X
      </Badge>
      </ListGroup.Item>)}
    </ListGroup>
  )
}
