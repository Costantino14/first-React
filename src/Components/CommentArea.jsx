import React, { useEffect, useState } from 'react'
import CommentList from './CommentList';
import AddComment from './AddComment';

export default function CommentArea({asin}) {

   const [comments, setComments] = useState([]);
   const url = 'https://striveschool-api.herokuapp.com/api/books/';

  // READ 
  useEffect(() => {
    // GET all'API
    fetch(url+asin+"/comments/", {
      headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMDhlOTBiM2IyNTAwMTUxYjU0MjMiLCJpYXQiOjE3MTcyMzE1MDYsImV4cCI6MTcxODQ0MTEwNn0.cCxiQ6_mCk-VCPkpVkXwQnt7vampB5hHTXY43ZoJRkg'}
      })
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error("Errore nella fetch:", error))
  }, [asin]);

  return (
    <>
    <CommentList comments= {comments}/> 
    <AddComment asin= {asin} comments= {comments}/>
    </>
  )
}
