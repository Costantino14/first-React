import React from 'react'
import SingleComment from './SingleComment'

export default function CommentList({comments, setComments, add, setAdd}) {
  return (
    <SingleComment comments={comments} setComments={setComments} setAdd={setAdd} add={add}/>
  )
}
