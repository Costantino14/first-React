import React from 'react'
import SingleComment from './SingleComment'

export default function CommentList({comments, setComments, add, setAdd}) {

  //Personalmente non trovo utilità in questo componente che è praticamente di passaggio, ma era parte del compito quindi l'ho lasciato
  return (
    <SingleComment comments={comments} setComments={setComments} setAdd={setAdd} add={add}/>
  )
}
